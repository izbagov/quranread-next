import { useEffect } from 'react';
import api from 'lib/api';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Pagination } from 'types/common';
import { Verse as TVerse } from 'types/verse';
import { TRANSLATIONS } from 'constants/api';
import { isValidChapterId } from 'utils/validator';
import { Verse } from 'components/Verse';
import { getFontFaceSource } from 'lib/fontface';

type ChapterProps = {
  verses: TVerse[];
  pagination: Pagination;
};

const Chapter: React.FC<ChapterProps> = ({ verses }) => {
  console.log({ verses });
  useEffect(() => {
    const pageNumber = 1;
    const fontFaceName = `p${pageNumber}-v2`;
    const fontFace = new FontFace(fontFaceName, getFontFaceSource(pageNumber));
    document.fonts.add(fontFace);
    fontFace.load().then(() => {
      console.log('шрифт загружен');
    });
  }, []);
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

  const result = await api.getChapter(1, reqParams);
  const { verses, pagination } = result.data;

  return {
    props: {
      verses,
      pagination,
    },
  };
};
export default Chapter;
