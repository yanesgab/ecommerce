import { FunctionComponent, useState } from 'react';
import { Menu, PersonOutline, ShoppingBagOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { StyledDrawer } from '../StyledDrawer';

export const Navbar: FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Container>
      <IconButton sx={{ color: 'black' }} onClick={() => setOpenDrawer(prevState => !prevState)}>
        <Menu sx={{ fontSize: 30 }} />
      </IconButton>

      <StyledDrawer isOpen={openDrawer} setIsOpen={setOpenDrawer} />

      <Title>PROBADOR</Title>

      <OptionsContainer>
        <IconButton sx={{ color: 'black' }}>
          <PersonOutline sx={{ fontSize: 30 }} />
        </IconButton>

        <IconButton sx={{ color: 'black' }}>
          <ShoppingBagOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </OptionsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.h1`
  font-family: 'Aboreto', cursive;
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
