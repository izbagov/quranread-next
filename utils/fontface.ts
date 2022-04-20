import range from 'lodash.range';
import { Verse } from 'types/verse';

export const getPagesByVerses = (verses: Verse[]): number[] => {
  const firstPage = verses[0].page_number;
  const lastPage = verses[verses.length - 1].page_number;

  return range(firstPage, lastPage + 1);
};

export const isFontLoaded = (fonts: string[], fontFaceName: string) => fonts.includes(fontFaceName);

export const getFontFaceSource = (pageNumber: number): string => {
  const pageName = String(pageNumber).padStart(3, '0');
  const woff2 = `/fonts/v2/woff2/p${pageNumber}.woff2`;
  const woff = `/fonts/v2/woff/p${pageNumber}.woff`;
  const ttf = `/fonts/v2/ttf/p${pageNumber}.ttf`;

  return `local(QCF2${pageName}), url('${woff2}') format('woff2'), url('${woff}') format('woff'), url('${ttf}') format('truetype')`;
};
