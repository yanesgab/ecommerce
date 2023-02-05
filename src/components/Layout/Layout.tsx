import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../Navbar';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-bottom: 20px;
  margin: 0;
`;
