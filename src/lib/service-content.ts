export function parseServiceParagraphs(content: string): string[] {
  const normalized = content.replace(/\\n/g, "\n").trim();

  return normalized
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

export function groupServiceParagraphs(paragraphs: string[]) {
  if (paragraphs.length <= 3) {
    return [{ title: "Overview", paragraphs }];
  }

  const chunkSize = Math.ceil(paragraphs.length / 4);

  return [
    { title: "Overview", paragraphs: paragraphs.slice(0, chunkSize) },
    { title: "Our Approach", paragraphs: paragraphs.slice(chunkSize, chunkSize * 2) },
    {
      title: "Engineering and Delivery",
      paragraphs: paragraphs.slice(chunkSize * 2, chunkSize * 3),
    },
    { title: "Working With BluKits", paragraphs: paragraphs.slice(chunkSize * 3) },
  ].filter((section) => section.paragraphs.length > 0);
}
