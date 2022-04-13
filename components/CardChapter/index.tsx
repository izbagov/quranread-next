import Link from 'next/link';
import * as s from './styled';

type CardChapterProps = {
  name: string;
  translit: string;
  num: number;
};

export const CardChapter: React.FC<CardChapterProps> = ({ name, translit, num }) => (
  <s.Container>
    <Link href={`/${num}`} passHref>
      <s.Chapter>
        <s.Num>{num}</s.Num>
        <s.Content>
          <s.Arab>{name}</s.Arab>
          <s.Translate>{translit}</s.Translate>
        </s.Content>
      </s.Chapter>
    </Link>
  </s.Container>
);
