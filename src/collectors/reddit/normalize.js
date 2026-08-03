export function normalize(feed) {

    if (!feed) return [];

    return feed.items.map(post => ({

        platform: "Reddit",

        community: feed.title,

        title: post.title || "No Title",

        description: post.contentSnippet || "",

        author: post.creator || post.author || "Unknown",

        url: post.link,

        createdAt: new Date(post.pubDate),

        score: 0,

        matchedKeywords: []

    }));

}