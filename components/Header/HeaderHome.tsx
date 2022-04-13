import { Logo } from 'components/Logo';
import * as s from './styled';

export const HeaderHome = () => (
  <s.HeaderBigContainer>
    <Logo size="big" />
    <s.HeaderBigText>Смысловой перевод Благородного Корана</s.HeaderBigText>
  </s.HeaderBigContainer>
);
