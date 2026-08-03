import { SETTINGS } from "../../../config/settings.js";

export function timeFilter(posts) {

    const cutoff =
        Date.now() -
        SETTINGS.MAX_POST_AGE_MINUTES * 60 * 1000;

    return posts.filter(post =>
        post.createdAt.getTime() >= cutoff
    );

}