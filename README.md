# YouTube Video Fetcher

Automatically retrieves YouTube channel video data on a schedule using Node.js and GitHub Actions that saves the result to JSON.


## Prerequisites

Make sure you have the following installed and set up:

* [Node.js](https://nodejs.org/) (v22 or higher recommended)

* [Google Account](https://www.google.com/accounts/NewAccount) to access the Google API Console, request an API key, and register your application.

* [YouTube Data API Key](https://console.developers.google.com/) to fetch channel video data. [Details](https://developers.google.com/youtube/v3/getting-started#before-you-start)


## Quota Usage

* YouTube Data API allows for 10,000 units a day per key.
* Each search request using this script costs 100 units.


## Installation
```bash
# Clone the repo
git clone https://github.com/AndrewAttemptsCode/youtube-video-fetcher.git

# Navigate into the project
cd youtube-video-fetcher

# Install dependencies
npm install
```

## Environment Variables

### Local .env file

Create a .env file in the project root with the following:

```bash
# Obtained from the Google API Console
YOUTUBE_API_KEY=your_api_key_here

# https://www.youtube.com/c/channel_name/about
# Right click, view page source
# ctrl + F and search for channelId
YOUTUBE_CHANNEL_ID=your_channel_id_here
```


### GitHub Actions Secrets

If using the GitHub Actions workflow (youtube-scheduler.yml), add these as repository secrets:

Settings > Security (Secrets and variables) > Actions > New repository secret

```bash
# Obtained from the Google API Console
YOUTUBE_API_KEY=your_api_key_here

# https://www.youtube.com/c/channel_name/about
# Right click, view page source
# ctrl + F and search for channelId
YOUTUBE_CHANNEL_ID=your_channel_id_here
```


## Running the script

> **Note:** The script is intended to run automatically via GitHub Actions (~every 30th minute).

To run manually:
```bash
npm run fetch
```

This will populate data.json with the latest video data.
