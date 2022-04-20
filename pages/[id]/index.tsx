import { useEffect, useRef, useState } from 'react';
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
import { getFontFaceSource, getPagesByVerses, isFontLoaded } from 'utils/fontface';
import useStore from 'store';

type ChapterProps = {
  verses: TVerse[];
  pagination: Pagination;
};

function removeItemFromArray<T>(itemToRemove: T, array: T[]): T[] {
  return array.filter((item) => item !== itemToRemove)
}

const Chapter: React.FC<ChapterProps> = ({ verses }) => {
  const [fonts, setFont] = useState<string[]>([]);
  const currentlyFetchingFonts = useRef<string[]>([]);
  useEffect(() => {
    if (verses.length > 0) {
      getPagesByVerses(verses).forEach((pageNumber) => {
        const fontFaceName = `p${pageNumber}-v2`;
        const fontFace = new FontFace(fontFaceName, getFontFaceSource(pageNumber));
        if (
          !currentlyFetchingFonts.current.includes(fontFaceName) &&
          !isFontLoaded(fonts, fontFaceName)
        ) {
          currentlyFetchingFonts.current = [...currentlyFetchingFonts.current, fontFaceName];
          fontFace.display = 'block';
          document.fonts.add(fontFace);
          fontFace.load().then(() => {
            setFont((prevFonts) => [...prevFonts, fontFaceName])
          }).finally(() => {
            currentlyFetchingFonts.current = removeItemFromArray(
              fontFaceName,
              currentlyFetchingFonts.current,
            );
          });
        }
      });
    }
  }, [verses, currentlyFetchingFonts, fonts]);
  return (
    <div>
      <div style={{ height: 200, background: '#bbb' }}>Header</div>
      {verses.map((verse) => (
        <Verse key={verse.id} verse={verse} />
      ))}
    </div>
  );
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
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
