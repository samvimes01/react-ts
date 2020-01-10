const wordSeparators = [' '];

export default function getSplittedStringChunks(text: string, chunksCount: number): string[] {
  const chunks: string[] = [];
  const chunkLength = Math.round(text.length / chunksCount);
  let chunkEnd = getNextWordSeparatorIndex(chunkLength, text, wordSeparators);
  let chunkStart = 0;
  for (let i = 0; i < chunksCount; i++) {
    chunks[i] = text.slice(chunkStart, chunkEnd);
    chunkStart = chunkEnd;
    chunkEnd = chunkStart + chunkLength < text.length && i + 2 < chunksCount
      ? getNextWordSeparatorIndex(chunkStart + chunkLength, text, wordSeparators)
      : text.length;
  }
  return chunks;
};

function getNextWordSeparatorIndex(startIndex: number, text: string, wordSeparators: string[]): number {
  for (let i = startIndex; i < text.length; i++) {
    if (i + 1 === text.length) {
      return i;
    }
    if (wordSeparators.includes(text.charAt(i))) {
      return i + 1;
    }
  }
  return startIndex;
}