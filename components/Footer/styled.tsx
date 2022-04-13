import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  padding-bottom: 50px;
`;

export const Copyright = styled.div`
  color: #929292;
`;

export const Links = styled.div`
  &:hover {
    a:not(:hover) {
      opacity: 0.5;
    }
  }
  & a {
    color: #8d6937;
    text-decoration: none;
    transition: opacity 0.3s;
    display: inline-block;
    margin-left: 20px;
  }
`;
