import Link from 'next/link';
import * as s from './styled';

export const Footer = () => (
  <div className="wrap">
    <s.Footer>
      <s.Copyright>© 2021 QuranRead.ru</s.Copyright>
      <s.Links>
        <Link href="/about">
          <a>О проекте</a>
        </Link>
        <Link href="/contacts">
          <a>Контакты</a>
        </Link>
      </s.Links>
    </s.Footer>
  </div>
);
