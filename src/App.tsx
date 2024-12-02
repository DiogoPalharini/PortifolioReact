import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e293b, #0f172a); /* Fundo consistente com o design */
  color: #e2e8f0;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem; /* Adiciona espaço ao redor do conteúdo */
`;

const Footer = styled.footer`
  background-color: #0f172a;
  color: #94a3b8;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
        <Footer>
          <p>
            © 2024 <strong>Diogo Palharini</strong>. Todos os direitos reservados.
          </p>
        </Footer>
      </AppContainer>
    </Router>
  );
};

export default App;
