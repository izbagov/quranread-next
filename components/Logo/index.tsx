import Image from 'next/image';
import logoLarge from 'assets/logo.svg';
import logoSmall from 'assets/logo-small.svg';
import Link from 'next/link';
import styled from 'styled-components';

type LogoProps = {
  size: 'small' | 'big';
  url?: string;
};

const LogoLink = styled.a`
  display: inline-block;
`;

export const Logo: React.FC<LogoProps> = ({ size = 'small', url = '/' }) => (
  <Link href={url} passHref>
    <LogoLink>
      <Image src={size === 'small' ? logoSmall : logoLarge} alt="QuranRead логотип" />
    </LogoLink>
  </Link>
);
