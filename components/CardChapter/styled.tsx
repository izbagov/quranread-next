import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10px;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  margin-bottom: 20px;
`;

export const Chapter = styled.a`
  border-radius: 4px;
  padding: 20px;
  background: #fcf7f0;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background: #fff0db;
  }
`;

export const Num = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  margin-right: 20px;
  border-radius: 50%;
  background: #f0dbbe;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  overflow: hidden;
`;
export const Arab = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Translate = styled.div`
  color: #8d6937;
  margin-top: 8px;
`;
