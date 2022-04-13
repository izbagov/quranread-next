import { Verse as TVerse } from 'types/verse';
import * as s from './styled';

type VerseProps = {
  verse: TVerse;
};

export const Verse: React.FC<VerseProps> = ({ verse }) => {
  return (
    <s.Container>
      <s.Words>
        {verse.words.map((word) => (
          <s.Word
            key={word.id}
            dangerouslySetInnerHTML={{ __html: word.code_v2 }}
            style={{ fontFamily: `p${verse.page_number}-v2` }}
          />
        ))}
      </s.Words>
      <s.Translations>
        {verse.translations.map((translate) => (
          <s.Translation key={translate.id}>
            <s.Text>{translate.text}</s.Text>
          </s.Translation>
        ))}
      </s.Translations>
    </s.Container>
  );
};
