import { CardChapter } from 'components/CardChapter';
import { chapters } from 'data/chapters';
import * as s from './styled';

export const Chapters: React.FC = () => (
  <s.Wrap>
    <s.Container>
      {chapters.map(({ text: { sura_id, translit, name } }) => (
        <CardChapter key={sura_id} num={sura_id} translit={translit} name={name} />
      ))}
    </s.Container>
  </s.Wrap>
);
