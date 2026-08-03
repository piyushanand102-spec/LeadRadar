import { importLeads } from "./importLeads.js";

const leads = [
    {
        platform: "Discord",
        community: "Video Editors",
        title: "Need a YouTube editor",
        description: "Long-term paid work",
        author: "John",
        url: "https://example.com/101",
        createdAt: new Date()
    },
    {
        platform: "Reddit",
        community: "NewTubers",
        title: "Hiring editor for gaming videos",
        description: "Budget available",
        author: "Alex",
        url: "https://example.com/102",
        createdAt: new Date()
    }
];

importLeads(leads);