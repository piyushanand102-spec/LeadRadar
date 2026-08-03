import axios from "axios";

export async function fetchSubreddit(subreddit, limit = 25) {
    try {
        const url = `https://www.reddit.com/r/${subreddit}/new.json?limit=${limit}`;

        const response = await axios.get(url, {
            headers: {
                "User-Agent": "LeadRadar/1.0"
            }
        });

        return response.data.data.children.map(post => post.data);

    } catch (error) {
        console.error(`❌ Failed to fetch r/${subreddit}`);

        if (error.response) {
            console.error(`Status: ${error.response.status}`);
        } else {
            console.error(error.message);
        }

        return [];
    }
}