export default (text: string, chunksCount: number): string[] => {
  const chunks: string[] = [];
  const chunkLength = Math.round(text.length / chunksCount);
  let chunkEnd = chunkLength;
  let chunkStart = 0;
  for (let i = 0; i < chunksCount; i++) {
    chunks[i] = text.slice(chunkStart, chunkEnd);
    chunkStart = chunkEnd;
    chunkEnd = chunkStart + chunkLength < text.length && i + 2 < chunksCount ? chunkStart + chunkLength : text.length;
  }
  return chunks;
};
