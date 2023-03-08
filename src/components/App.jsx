import { Reader } from 'components/Reader/Reader';
import { GlobalStyle } from './GlobalStyled';
import { Layout } from 'components/Layout.styled';
import publications from 'publications.json';
import { Counter } from 'components/Counter/Counter';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Reader items={publications} />
      <Counter initialValue={0} />
    </Layout>
  );
};
