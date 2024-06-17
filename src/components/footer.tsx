// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2024 Meu Portfólio. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
