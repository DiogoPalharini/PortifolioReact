import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  background-attachment: fixed;
  color: #e2e8f0;
`;

const Content = styled.main`
  flex: 1;
  width: 100%;
`;

const Footer = styled.footer`
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  color: #94a3b8;
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;
  border-top: 1px solid rgba(56, 189, 248, 0.1);
  margin-top: 4rem;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
        <Footer>
          <p>
            © {new Date().getFullYear()} <strong style={{ color: '#38bdf8' }}>Diogo Palharini</strong>. Todos os direitos reservados.
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            Desenvolvido com React, TypeScript e Styled Components
          </p>
        </Footer>
      </AppContainer>
    </Router>
  );
};

export default App;
