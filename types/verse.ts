export interface Word {
  id: number;
  position: number;
  verse_key: string;
  code_v1: string;
  code_v2: string;
  v1_page: number;
  v2_page: number;
}

export interface Translation {
  resource_id: number;
  resource_name: string;
  id: number;
  text: string;
  language_id: number;
}

export interface Verse {
  id: number;
  chapter_id: number;
  verse_number: number;
  verse_key: string;
  verse_index: number;
  juz_number: number;
  hizb_number: number;
  rub_number: number;
  page_number: number;
  words: Word[];
  translations: Translation[];
}
