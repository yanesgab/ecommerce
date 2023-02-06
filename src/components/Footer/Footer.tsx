import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Footer: FunctionComponent = () => {
  return (
    <Container>
      <Grid container spacing={3.5}>
        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Preguntas frecuentes</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Locales</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Botón de arrepentimiento</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Subscríbete a nuestro Newsletter y te regalamos un 10% OFF</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Síguenos en nuestras redes</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Métodos de pago</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Contacto</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Cambios y devoluciones</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Términos y condiciones</Text>
          </TextContainer>
        </Grid>

        <Grid item xs={2.4}>
          <TextContainer>
            <Text>Políticas de privacidad</Text>
          </TextContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 4rem;
  padding-inline: 7rem;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
