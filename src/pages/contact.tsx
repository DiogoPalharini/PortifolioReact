import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Container = styled.div`
  padding: 2rem 2rem 0;  /* Padding apenas nas laterais e na parte superior */
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  background-color: #333;  /* Fundo acinzentado escuro */
  padding: 1rem;
  border-radius: 8px;
  color: #f5f5f5;  /* Cor do texto clara */
  text-align: center;  /* Centraliza o texto e os ícones */
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: #f5f5f5;
  font-size: 2rem;
  transition: color 0.2s;

  &:hover {
    color: #007BFF;
  }
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <Section>
        <h1>Contato</h1>
        <p>Conecte-se comigo através das minhas redes sociais:</p>
        <IconContainer>
          <IconLink href="https://github.com/DiogoPalharini" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/diogo-palharini-10b803275/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://www.instagram.com/diogopalharini/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconLink>
          <IconLink href="mailto:diogo.palharini@gmail.com">
            <FaEnvelope />
          </IconLink>
        </IconContainer>
      </Section>
    </Container>
  );
};

export default Contact;
