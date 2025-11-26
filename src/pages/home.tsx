import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import MinhaFoto from '../img/DiogoPalharini.png';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';

const Home: React.FC = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleProject = (project: string) => {
    setOpenProject(openProject === project ? null : project);
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section id="home" className={`section hero-section ${visibleSections.has('home') ? 'visible' : ''}`}>
        <div className="section-content">
          <div className="hero-content">
            <div className="profile-image-wrapper">
              <img src={MinhaFoto} alt="Diogo Palharini" className="profile-photo" />
              <div className="photo-glow"></div>
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Diogo Palharini</span>
            </h1>
            <p className="hero-subtitle">
              Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> na FATEC São José dos Campos
            </p>
            <p className="hero-description">
              Atuo como <strong>Product Owner</strong> em projetos acadêmicos com parceiros reais. 
              Gosto de transformar necessidades em soluções digitais práticas e que realmente funcionam.
            </p>
            <div className="hero-cta">
              <button 
                className="cta-button"
                onClick={() => {
                  document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Projetos
                <FaChevronDown className="cta-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className={`section ${visibleSections.has('sobre') ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-decoration">Sobre</span>
          </h2>
          <div className="about-content">
            <p>
              Sou desenvolvedor e <strong>Product Owner</strong>. Na FATEC, trabalho em projetos reais com parceiros 
              como o Exército Brasileiro e a Tecsus. Nessas experiências, aprendi a equilibrar o que é tecnicamente 
              viável com o que o cliente realmente precisa.
            </p>
            <p>
              Trabalho com desenvolvimento full-stack e lidero equipes usando metodologias ágeis. 
              Prezo por código organizado, comunicação clara e entregas que agreguem valor de verdade.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className={`section ${visibleSections.has('projetos') ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-decoration">Projetos Acadêmicos e Parceiros</span>
          </h2>
          <div className="dropdown">
            {/* PROJETO 2025.02 - Gerenciamento de Almoxarifado Militar */}
            <div 
              className={`dropdown-header ${openProject === 'almoxarifado' ? 'active' : ''}`}
              onClick={() => toggleProject('almoxarifado')}
            >
              <div className="project-header-content">
                <h3>Aplicativo Mobile para Controle de Almoxarifado Militar</h3>
                <span className="project-badge">2025.02</span>
              </div>
              <FaChevronDown className={`dropdown-icon ${openProject === 'almoxarifado' ? 'open' : ''}`} />
            </div>
            {openProject === 'almoxarifado' && (
              <div className="dropdown-content">
                <div className="project-meta">
                  <span className="meta-item"><strong>Semestre:</strong> 5º – 2025.02</span>
                  <span className="meta-item"><strong>Parceiro:</strong> Exército Brasileiro</span>
                </div>
                <p>
                  Atuei como <strong>Product Owner</strong> no desenvolvimento de um aplicativo mobile para controle 
                  de materiais em unidades militares. O sistema substitui processos manuais por uma solução digital 
                  com rastreamento por QR Code, alertas de estoque e previsões de demanda usando IA.
                </p>

                <h4>O que o sistema faz:</h4>
                <ul className="feature-list">
                  <li>Controle de entrada e saída com QR Code</li>
                  <li>Gestão de lotes e validade</li>
                  <li>Fluxos de aprovação</li>
                  <li>Dashboard com previsões usando IA</li>
                  <li>Notificações automáticas</li>
                  <li>Geração de relatórios em PDF</li>
                </ul>

                <h4>O que fiz como Product Owner:</h4>
                <p>
                  Organizei e priorizei o backlog pensando em um MVP viável. Facilitei as cerimônias do Scrum, 
                  validei as entregas com o cliente e garanti que o time estava alinhado com os requisitos. 
                  Coordenei 3 sprints e conseguimos entregar todas as histórias planejadas.
                </p>

                <div className="tech-stack">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Supabase</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">Figma</span>
                  </div>
                </div>

                <div className="project-link">
                  <a href="https://github.com/TeamHiveAPI/API-2025.02" target="_blank" rel="noopener noreferrer" className="link-button">
                    Ver Repositório <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            )}

            {/* PROJETO 2025.01 - Monitoramento Meteorológico IoT */}
            <div 
              className={`dropdown-header ${openProject === 'iot' ? 'active' : ''}`}
              onClick={() => toggleProject('iot')}
            >
              <div className="project-header-content">
                <h3>Sistema IoT de Monitoramento Meteorológico</h3>
                <span className="project-badge">2025.01</span>
              </div>
              <FaChevronDown className={`dropdown-icon ${openProject === 'iot' ? 'open' : ''}`} />
            </div>
            {openProject === 'iot' && (
              <div className="dropdown-content">
                <div className="project-meta">
                  <span className="meta-item"><strong>Semestre:</strong> 4º – 2025.01</span>
                  <span className="meta-item"><strong>Parceiro:</strong> Tecsus</span>
                </div>
                <p>
                  Fui <strong>Product Owner</strong> de uma plataforma IoT para estações meteorológicas remotas. 
                  O sistema coleta dados ambientais em tempo real e envia alertas automáticos para eventos climáticos extremos.
                </p>

                <h4>O que o sistema faz:</h4>
                <ul className="feature-list">
                  <li>Dashboard web interativo</li>
                  <li>Mapas de calor</li>
                  <li>Alertas por e-mail e SMS</li>
                  <li>Integração com sensores usando MQTT</li>
                  <li>Histórico e gráficos</li>
                </ul>

                <h4>O que fiz como Product Owner:</h4>
                <p>
                  Organizei o backlog com mais de 40 histórias de usuário. Priorizei funcionalidades críticas, 
                  como alertas que precisavam ser enviados em menos de 5 segundos. Conduzi refinamentos e validações 
                  com a Tecsus, garantindo que o sistema atendesse aos requisitos de segurança e escalabilidade.
                </p>

                <div className="tech-stack">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">Chart.js</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">MQTT</span>
                    <span className="tech-tag">Docker</span>
                  </div>
                </div>

                <div className="project-link">
                  <a href="https://github.com/TeamHiveAPI/API-2025.01" target="_blank" rel="noopener noreferrer" className="link-button">
                    Ver Repositório <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            )}

            {/* Portal de Transparência */}
            <div 
              className={`dropdown-header ${openProject === 'portal-transparencia' ? 'active' : ''}`}
              onClick={() => toggleProject('portal-transparencia')}
            >
              <div className="project-header-content">
                <h3>Portal de Transparência – FAPG</h3>
                <span className="project-badge">2024-2</span>
              </div>
              <FaChevronDown className={`dropdown-icon ${openProject === 'portal-transparencia' ? 'open' : ''}`} />
            </div>
            {openProject === 'portal-transparencia' && (
              <div className="dropdown-content">
                <div className="project-meta">
                  <span className="meta-item"><strong>Semestre:</strong> 2024-2</span>
                </div>
                <p>
                  Desenvolvi uma versão nova do Portal de Transparência da Fundação de Apoio à Pesquisa. 
                  Focamos em tornar o portal mais fácil de usar, com filtros melhores e uma gestão completa de projetos públicos.
                </p>
                <h4>O que desenvolvi:</h4>
                <ul className="feature-list">
                  <li>Sistema completo de cadastro e edição de projetos</li>
                  <li>Sistema de solicitações e aprovação</li>
                  <li>Upload e controle de versões de documentos</li>
                  <li>Filtros dinâmicos e interface responsiva</li>
                </ul>
                <div className="tech-stack">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">MySQL</span>
                  </div>
                </div>
                <div className="project-link">
                  <a href="https://github.com/A-Sync-Fatec/api-fatec-3sem-24" target="_blank" rel="noopener noreferrer" className="link-button">
                    Ver Repositório <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            )}

            {/* Internet Ocean */}
            <div 
              className={`dropdown-header ${openProject === 'internet-ocean' ? 'active' : ''}`}
              onClick={() => toggleProject('internet-ocean')}
            >
              <div className="project-header-content">
                <h3>Internet Ocean – Sistema de Chamados</h3>
                <span className="project-badge">2024-1</span>
              </div>
              <FaChevronDown className={`dropdown-icon ${openProject === 'internet-ocean' ? 'open' : ''}`} />
            </div>
            {openProject === 'internet-ocean' && (
              <div className="dropdown-content">
                <div className="project-meta">
                  <span className="meta-item"><strong>Semestre:</strong> 2024-1</span>
                </div>
                <p>
                  Sistema para abertura, acompanhamento e resolução de chamados técnicos. 
                  Inclui uma base de conhecimento para ajudar os usuários a resolverem problemas sozinhos.
                </p>
                <h4>O que desenvolvi:</h4>
                <ul className="feature-list">
                  <li>Sistema de autenticação</li>
                  <li>Controle de status dos chamados</li>
                  <li>FAQ com busca</li>
                  <li>Dashboard para administradores</li>
                </ul>
                <div className="tech-stack">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">MySQL</span>
                  </div>
                </div>
                <div className="project-link">
                  <a href="https://github.com/CoddingWarriors/Api_CoddingWarriors" target="_blank" rel="noopener noreferrer" className="link-button">
                    Ver Repositório <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            )}

            {/* Projeto Pixels */}
            <div 
              className={`dropdown-header ${openProject === 'pixels' ? 'active' : ''}`}
              onClick={() => toggleProject('pixels')}
            >
              <div className="project-header-content">
                <h3>Projeto Pixels – Plataforma para Famílias</h3>
                <span className="project-badge">2023-2</span>
              </div>
              <FaChevronDown className={`dropdown-icon ${openProject === 'pixels' ? 'open' : ''}`} />
            </div>
            {openProject === 'pixels' && (
              <div className="dropdown-content">
                <div className="project-meta">
                  <span className="meta-item"><strong>Semestre:</strong> 2023-2</span>
                  <span className="meta-item"><strong>Parceiro:</strong> Grupo de Mães</span>
                </div>
                <p>
                  Plataforma educativa com blog, fórum e recursos para famílias de crianças com Insuficiência Renal Crônica.
                </p>
                <h4>O que fiz:</h4>
                <ul className="feature-list">
                  <li>Primeira experiência como Product Owner</li>
                  <li>Organizei e gerenciei o backlog</li>
                  <li>Desenvolvi o sistema de autenticação</li>
                </ul>
                <div className="tech-stack">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Flask</span>
                    <span className="tech-tag">HTML/CSS</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Figma</span>
                  </div>
                </div>
                <div className="project-link">
                  <a href="https://github.com/Daiene/Pixels" target="_blank" rel="noopener noreferrer" className="link-button">
                    Ver Repositório <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`section ${visibleSections.has('skills') ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-decoration">Principais Competências</span>
          </h2>
          <div className="skills-container">
            <div className="skill-card">
              <div className="skill-icon">🎯</div>
              <h3>Product Owner</h3>
              <p>Organização de backlog, priorização, Scrum e validação com clientes</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Flutter</h3>
              <p>Desenvolvimento mobile para Android e iOS</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>React.js</h3>
              <p>Desenvolvimento de interfaces web</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🚀</div>
              <h3>Node.js</h3>
              <p>Desenvolvimento de APIs e backends</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">☕</div>
              <h3>Java Spring Boot</h3>
              <p>Desenvolvimento de sistemas corporativos</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🐍</div>
              <h3>Python</h3>
              <p>Flask, automações e projetos com IA</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>Bancos de Dados</h3>
              <p>MySQL, PostgreSQL e MongoDB</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔄</div>
              <h3>Git & Metodologias Ágeis</h3>
              <p>Controle de versão, Scrum e Kanban</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className={`section contact-section ${visibleSections.has('contato') ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-decoration">Contato</span>
          </h2>
          <p className="contact-description">Quer conversar sobre projetos, estágios ou oportunidades? Entre em contato!</p>
          <div className="contact-icons">
            <a 
              href="https://github.com/DiogoPalharini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/diogo-palharini-10b803275/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.instagram.com/diogopalharini/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="Instagram"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a 
              href="mailto:diogo.palharini@gmail.com"
              className="contact-link"
              aria-label="Email"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
