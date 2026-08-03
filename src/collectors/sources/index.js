export const SOURCES = [
  { id: "reddit", enabled: true },
  { id: "upwork", enabled: true },
  { id: "contra", enabled: true },
  { id: "wellfound", enabled: true },
  { id: "peopleperhour", enabled: true }
];

export function getEnabledSources() {
  return SOURCES.filter(source => source.enabled);
}
