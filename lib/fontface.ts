export const getFontFaceSource = (pageNumber: number): string => {
  const pageName = String(pageNumber).padStart(3, '0');
  const woff2 = `/fonts/v2/woff2/p${pageNumber}.woff2`;
  const woff = `/fonts/v2/woff/p${pageNumber}.woff`;
  const ttf = `/fonts/v2/ttf/p${pageNumber}.ttf`;

  return `local(QCF2${pageName}), url('${woff2}') format('woff2'), url('${woff}') format('woff'), url('${ttf}') format('truetype')`;
};
