import { POSITIVE_KEYWORDS, NEGATIVE_KEYWORDS } from "../../config/keywords.js";

export function filterPosts(posts) {

    return posts.filter(post => {

        const text = post.title.toLowerCase();

        const hasPositive = POSITIVE_KEYWORDS.some(keyword =>
            text.includes(keyword)
        );

        const hasNegative = NEGATIVE_KEYWORDS.some(keyword =>
            text.includes(keyword)
        );

        return hasPositive && !hasNegative;

    });

}