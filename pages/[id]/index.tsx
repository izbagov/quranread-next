import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { isValidChapterId } from 'utils/validator';

interface IParams extends ParsedUrlQuery {
  id: string;
}

const Chapter = () => <div>Chapter</div>;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as IParams;
  const isChapter = isValidChapterId(id);

  if (!isChapter) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};
export default Chapter;
