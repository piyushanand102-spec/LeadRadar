export function scoreLead(lead) {

    let score = 0;

    const text =
        `${lead.title} ${lead.description}`.toLowerCase();

    if (text.includes("looking for")) score += 30;
    if (text.includes("need")) score += 20;
    if (text.includes("hiring")) score += 30;
    if (text.includes("editor")) score += 20;
    if (text.includes("paid")) score += 30;
    if (text.includes("budget")) score += 20;
    if (text.includes("long-term")) score += 20;
    if (text.includes("youtube")) score += 10;
    if (text.includes("shorts")) score += 10;

    return {
        ...lead,
        score
    };
}