import { useEffect } from 'react';
import api from 'lib/api';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Verse } from 'components/Verse';

// types
import { Pagination } from 'types/common';
import { Verse as TVerse } from 'types/verse';

// utils
import { TRANSLATIONS } from 'constants/api';
import { isValidChapterId } from 'utils/validator';
import { getFontFaceSource, getPagesByVerses } from 'utils/fontface';

type ChapterProps = {
  verses: TVerse[];
  pagination: Pagination;
};

const Chapter: React.FC<ChapterProps> = ({ verses }) => {
  console.log({ verses });
  useEffect(() => {
    getPagesByVerses(verses).forEach((pageNumber) => {
      const fontFaceName = `p${pageNumber}-v2`;
      const fontFace = new FontFace(fontFaceName, getFontFaceSource(pageNumber));
      document.fonts.add(fontFace);
      fontFace.load().then(() => {
        console.log('шрифт загружен', fontFaceName);
      });
    });
  }, [verses]);
  return (
    <div>
      {verses.map((verse) => (
        <Verse key={verse.id} verse={verse} />
      ))}
    </div>
  );
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as IParams;
  const isChapter = isValidChapterId(id);

  if (!isChapter) {
    return {
      notFound: true,
    };
  }

  const reqParams = {
    translations: [TRANSLATIONS.elmir],
    words: true,
    word_fields: 'v2_page, code_v2',
  };

  const result = await api.getChapter(id, reqParams);
  const { verses, pagination } = result.data;

  return {
    props: {
      verses,
      pagination,
    },
  };
};
export default Chapter;
