import "dotenv/config";
import fs from "fs";
import he from "he";

const apiKey = process.env.YOUTUBE_API_KEY;
const channelId = process.env.YOUTUBE_CHANNEL_ID;
const url = `
https://www.googleapis.com/youtube/v3/search?
key=${apiKey}
&channelId=${channelId}
&part=snippet,id
&maxResults=20
&order=date
&type=video
&videoEmbeddable=true
`;

const fetchVideos = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items) {
      console.error("Error: Youtube API returned no videos");
      return;
    }

    const latestVideos = data.items.slice(0, 20).map((item) => ({
      videoId: item.id.videoId,
      title: he.decode(item.snippet.title),
      description: he.decode(item.snippet.description),
      published: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.high.url,
    }));

    fs.writeFileSync("./data.json", JSON.stringify(latestVideos, null, 2));
  } catch (err) {
    console.error(err.message);
  }
};

fetchVideos();
