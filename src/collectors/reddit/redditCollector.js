import { getNextFeed } from "../../utils/feedRotation.js";
import { REDDIT_FEEDS } from "../../../config/feeds.js";

import { fetchFeed } from "./fetchFeed.js";
import { normalize } from "./normalize.js";
import { timeFilter } from "./timeFilter.js";
import { keywordFilter } from "./keywordFilter.js";

export async function redditCollector() {

    let allPosts = [];

    console.log("\n===============================");
    console.log("Starting Reddit Collector...");
    console.log("===============================\n");

    // Get only ONE feed each run
    const feedUrl = getNextFeed(REDDIT_FEEDS);

    console.log(`Fetching: ${feedUrl}`);

    const feed = await fetchFeed(feedUrl);

    if (!feed) {
        console.log("Failed to fetch feed.\n");
        return [];
    }

    const posts = normalize(feed);

    console.log(feed.title);
    console.log(`Posts fetched: ${posts.length}\n`);

    allPosts.push(...posts);

    console.log("================================");
    console.log(`Total Posts Collected : ${allPosts.length}`);

    const recentPosts = timeFilter(allPosts);
    console.log(`Recent Posts : ${recentPosts.length}`);

    const hiringPosts = keywordFilter(recentPosts);
    console.log(`Hiring Leads : ${hiringPosts.length}`);
    console.log("================================\n");

    return hiringPosts;
}