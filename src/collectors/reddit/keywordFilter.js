import {
    POSITIVE_KEYWORDS,
    NEGATIVE_KEYWORDS,
    MINIMUM_SCORE
} from "../../../config/keywords.js";

export function keywordFilter(posts) {

    return posts.filter(post => {

        const text =
            `${post.title} ${post.description}`.toLowerCase();

        let score = 0;

        let matchedKeywords = [];

        for (const keyword of POSITIVE_KEYWORDS) {

            if (text.includes(keyword.phrase)) {

                score += keyword.score;

                matchedKeywords.push(keyword.phrase);

            }

        }

        for (const keyword of NEGATIVE_KEYWORDS) {

            if (text.includes(keyword.phrase)) {

                score += keyword.score;

            }

        }

        post.score = score;

        post.matchedKeywords = matchedKeywords;

        return score >= MINIMUM_SCORE;

    });

}