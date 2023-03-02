import { Reader } from 'components/Reader/Reader';
import { GlobalStyle } from './GlobalStyled';
import publications from 'publications.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Reader items={publications} />
    </>
  );
};
