import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Home: FunctionComponent = () => {
  const handleClick = () => {
    console.log('Image click')
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src='https://complot.com.ar/media/weltpixel/owlcarouselslider/images/s/l/slide-desktop_23.jpg' />
        </Grid>
      </Grid>


      <Container>
        <Grid container spacing={3.5}>
          <Grid item xs={6}>
            <Image src='https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/b1abd741-8b8f-47ff-8965-6d6bd54f7279___80c3199e2788ff362e19a8369a227356.jpg' onClick={handleClick}/>
          </Grid>
          <Grid item xs={6}>
            <Image src='https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/8f877e20-923c-4e1d-a408-b40c7aea3816___86e89001760ffe9e18bea41d5eed9131.jpg' />
          </Grid>
          <Grid item xs={12}>
            <TextContainer>
              <Title>Shop the look</Title>
              <Subtitle>cliquea tu look fav y llévalo</Subtitle>
            </TextContainer>
          </Grid>
          <Grid item xs={12}>
            <Image src='https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/67868f27-7914-419b-9d44-ffb33c58ff40___dfa0027173f8b837ab64a7142ba44290.jpg' />
          </Grid>
          <Grid item xs={4}>
            <TextContainer>
              <h3>ENVÍO GRATIS</h3>
              <p>En compras superiores a $18.000</p>
            </TextContainer>
          </Grid>
          <Grid item xs={4}>
            <TextContainer>
              <h3>PAGA EN 3 CUOTAS SIN INTERÉS</h3>
              <p>6 cuotas sin interés a partir de $18.000</p>
            </TextContainer>
          </Grid>
          <Grid item xs={4}>
            <TextContainer>
              <h3>CAMBIOS Y DEVOLUCIONES</h3>
              <p>Primer cambio gratis</p>
            </TextContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const Image = styled.img`
  width: 100%;
  padding-bottom: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 42px;
  padding-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
`;