import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export async function githubCollector() {

    const { data } = await octokit.search.issuesAndPullRequests({
        q: '("video editor" OR "youtube editor" OR "shorts editor") is:issue',
        sort: "created",
        order: "desc",
        per_page: 10
    });

    return data.items.map(issue => ({
        platform: "GitHub",
        community: issue.repository_url.split("/").pop(),
        title: issue.title,
        description: issue.body || "",
        author: issue.user.login,
        url: issue.html_url,
        createdAt: new Date(issue.created_at)
    }));
}