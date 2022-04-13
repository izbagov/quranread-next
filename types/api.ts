import { Pagination } from './common';
import { Verse } from './verse';

export type GetChapter = {
  verses: Verse[];
  pagination: Pagination;
};
