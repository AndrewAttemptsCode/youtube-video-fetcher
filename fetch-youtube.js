import "dotenv/config";

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
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err.message);
  }
};

fetchVideos();
console.log({ apiKey, channelId });
