// src/pages/Home.tsx
import React from 'react';
import styled from 'styled-components';
import MinhaFoto from '../img/DiogoPalharini.jpg';

const Container = styled.div`
   padding: 2rem 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  background-color: #333;  /* Fundo acinzentado escuro */
  padding: 1rem;
  border-radius: 8px;
  color: #f5f5f5;  /* Cor do texto clara */
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-right: 2rem;
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Section>
        <ProfileSection>
          <Photo src={MinhaFoto} alt="Minha foto" />
          <TextContainer>
            <h1>Diogo Palharini</h1>
            <p>
              Nasci no estado do Mato Grosso e cursei o ensino fundamental na Escola Estadual Angelina Franciscon Mazutti. Após concluir essa etapa, mudei-me para São José dos Campos, onde completei o ensino médio na E.E.E.M.I. Prof. Nelson do Nascimento Monteiro. Após concluir o ensino médio, prestei o ENEM e ingressei no curso de Ciências da Computação na <strong><a href="http://bbg.unemat.br/">UNEMAT Câmpus Universitário Dep. Est. Renê Barbour</a></strong>. Após dois anos de curso, em meio à pandemia, optei por mudar de faculdade e ingressei na FATEC.
            </p>
          </TextContainer>
        </ProfileSection>
      </Section>
      <Section>
        <h2>Interesses/Hobbies</h2>
        <p>Sou um grande fã de jogos.</p>
        <p>Gosto de ler livros.</p>
        <p>Gosto de assistir filmes, séries e animes.</p>
        <p>Frequento regularmente a academia.</p>
      </Section>
      <Section>
        <h2>Experiências</h2>
        <p>Trabalhei 2 anos como estagiário em uma empresa de tecnologia chamada TecSUS.</p>
        <p>Tenho um curso de hardware.</p>
      </Section>
    </Container>
  );
};

export default Home;
