import axios from 'axios';
import qs from 'query-string';
import { GetChapter } from 'types/api';

const BASE_URL = 'https://api.quran.com/api/v4';

const request = axios.create({
  baseURL: 'https://api.quran.com/api/v4',
});

interface ChapterParams {
  words?: boolean;
  translations?: string[];
  word_fields?: string;
  tafsirs?: string[];
  fields?: string[];
  page?: number;
  per_page?: number;
}

interface QuranApi {
  url: string;
}

class QuranApi implements QuranApi {
  constructor() {
    this.url = BASE_URL;
  }

  getChapter(chapterId: string, options?: ChapterParams) {
    let params;
    if (options) {
      params = qs.stringify(options);
    }

    return request.get<GetChapter>(`/verses/by_chapter/${chapterId}?${params}`);
  }
}

const api = new QuranApi();

export default api;
