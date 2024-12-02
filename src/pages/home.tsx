import React, { useState } from 'react';
import '../styles/Home.css';
import MinhaFoto from '../img/DiogoPalharini.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (project: string) => {
    setOpenProject(openProject === project ? null : project);
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="section profile-section">
        <div className="section-content">
          <img src={MinhaFoto} alt="Minha Foto" className="profile-photo" />
          <h1>Diogo Palharini</h1>
          <p>
          Estudante de Desenvolvimento Multiplataforma na FATEC São José dos Campos. Tenho experiência em projetos que envolvem design e tecnologia, com foco em entregar soluções funcionais e eficientes no desenvolvimento de software.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="section-content">
          <h2>Projetos</h2>
          <div className="dropdown">
            {/* Projeto 1 */}
            <div className="dropdown-header" onClick={() => toggleProject('pixels')}>
              <h3>Projeto Pixels</h3>
            </div>
            {openProject === 'pixels' && (
              <div className="dropdown-content">
                <h4>Semestre: <strong>2023-2</strong></h4>
                <p>
                  Participei do projeto da API com o <strong>Parceiro Acadêmico Grupo de Mães</strong>. O objetivo foi desenvolver uma 
                  <strong> plataforma informativa para mães de crianças com Insuficiência Renal Crônica (IRC)</strong>, oferecendo suporte por meio de:
                </p>
                <ul>
                  <li>Artigos educativos sobre a doença;</li>
                  <li>Ferramentas para compartilhamento de experiências e dicas;</li>
                  <li>Gerenciamento de postagens em um blog.</li>
                </ul>

                <h4>Proposta do Projeto:</h4>
                <p>A plataforma inclui funcionalidades como:</p>
                <ul>
                  <li><strong>Tela de Login, Cadastro e Recuperação de Senha</strong>: para acesso seguro;</li>
                  <li><strong>Blog</strong>: com sistema de filtro e área de comentários;</li>
                  <li><strong>Área de Administração</strong>: para gerenciamento de usuários e postagens;</li>
                  <li><strong>Localização de hospitais</strong> e sintomas comuns para IRC;</li>
                  <li><strong>Gráficos de dados</strong>: para visualização de informações sobre a doença.</li>
                </ul>

                <h4>Contribuições Pessoais:</h4>
                <p>
                  Durante o projeto, atuei como <strong>Product Owner</strong>, sendo responsável por:
                </p>
                <ul>
                  <li>Organizar o backlog do projeto;</li>
                  <li>Priorizar funcionalidades de acordo com o objetivo do parceiro acadêmico;</li>
                  <li>Garantir a entrega de funcionalidades alinhadas às expectativas do cliente;</li>
                  <li>Participar do desenvolvimento das telas de login e cadastro.</li>
                </ul>

                <h4>Tecnologias Utilizadas:</h4>
                <ul>
                  <li><strong>Backend:</strong> Python Flask;</li>
                  <li><strong>Frontend:</strong> HTML e CSS;</li>
                  <li><strong>Banco de Dados:</strong> MySQL;</li>
                  <li><strong>Prototipagem:</strong> Figma.</li>
                </ul>

                <h4>Habilidades Desenvolvidas:</h4>
                <p><strong>Hard Skills:</strong> Python, HTML, CSS, MySQL.</p>
                <p><strong>Soft Skills:</strong> Comunicação, trabalho em equipe, organização.</p>

                <h4>Link do Repositório:</h4>
                <p>
                  Para mais detalhes, acesse o repositório do projeto no GitHub:{' '}
                  <a
                    href="https://github.com/Daiene/Pixels"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixels
                  </a>
                </p>
              </div>
            )}
            <br />
            <div className="dropdown-header" onClick={() => toggleProject('internet-ocean')}>
              <h3>Projeto Internet Ocean</h3>
            </div>
            {openProject === 'internet-ocean' && (
              <div className="dropdown-content">  
                <h4>Semestre: <strong>2024-1</strong></h4>
                <p>
                  Participei do desenvolvimento do <strong>Internet Ocean</strong>, um sistema de gerenciamento de chamados 
                  para otimizar o atendimento e suporte ao cliente em uma empresa de serviços de internet. 
                  A plataforma permite o registro, acompanhamento e resolução de chamados, assegurando uma gestão eficiente das demandas.
                </p>

                <h4>Proposta do Projeto:</h4>
                <p>A plataforma inclui funcionalidades como:</p>
                <ul>
                  <li><strong>Cadastro de Usuários:</strong> Inclusão de clientes, técnicos e administradores com perfis distintos.</li>
                  <li><strong>Registro de Chamados:</strong> Sistema para abertura e detalhamento de solicitações de suporte.</li>
                  <li><strong>Acompanhamento de Chamados:</strong> Monitoramento do status dos chamados (Aberto, Em Processo, Finalizado, Concluído).</li>
                  <li><strong>Base de Conhecimento (FAQ):</strong> Repositório de soluções para problemas comuns.</li>
                </ul>

                <h4>Contribuições Pessoais:</h4>
                <p>Durante o projeto, contribui com:</p>
                <ul>
                  <li>Desenvolvimento das funcionalidades de cadastro e autenticação de usuários.</li>
                  <li>Implementação do sistema de registro e acompanhamento de chamados.</li>
                  <li>Colaboração na criação da base de conhecimento para suporte aos clientes.</li>
                </ul>

                <h4>Tecnologias Utilizadas:</h4>
                <ul>
                  <li><strong>Backend:</strong> Node.js com Express</li>
                  <li><strong>Frontend:</strong> React.js</li>
                  <li><strong>Banco de Dados:</strong> MySQL</li>
                  <li><strong>Controle de Versão:</strong> GitHub</li>
                </ul>

                <h4>Habilidades Desenvolvidas:</h4>
                <p><strong>Hard Skills:</strong> Programação em JavaScript, desenvolvimento com Node.js e React.js, manipulação de banco de dados MySQL.</p>
                <p><strong>Soft Skills:</strong> Trabalho em equipe, comunicação eficaz, gestão de tempo e resolução de problemas.</p>

                <h4>Link do Repositório:</h4>
                <p>
                  Para mais detalhes, acesse o repositório do projeto no GitHub:{' '}
                  <a
                    href="https://github.com/CoddingWarriors/Api_CoddingWarriors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Internet Ocean
                  </a>
                </p>
              </div>
            )}
            <br />
            <div className="dropdown-header" onClick={() => toggleProject('portal-transparencia')}>
              <h3>Releitura do Portal de Transparência</h3>
            </div>
            {openProject === 'portal-transparencia' && (
              <div className="dropdown-content">
                <h4>Semestre: <strong>2024-2</strong></h4>
                <p>
                  Participei do desenvolvimento de uma nova versão do <strong>Portal de Transparência</strong> da Fundação de Apoio à Pesquisa de Pós-Graduandos (FAPG). 
                  O objetivo foi criar uma plataforma mais eficiente e moderna para gestão e visualização de informações públicas, assegurando acessibilidade e transparência.
                </p>

                <h4>Proposta do Projeto:</h4>
                <p>A plataforma incluiu funcionalidades como:</p>
                <ul>
                  <li><strong>Cadastro, edição e desativação de projetos;</strong></li>
                  <li><strong>Criação de administradores comuns;</strong></li>
                  <li><strong>Solicitação de criação e edição de projetos;</strong></li>
                  <li><strong>Manipulação de arquivos;</strong> associando documentos a projetos;</li>
                  <li><strong>Sistema de filtros avançados;</strong> para busca e visualização de projetos.</li>
                </ul>

                <h4>Contribuições Pessoais:</h4>
                <p>Durante o projeto, contribui diretamente para:</p>
                <ul>
                  <li>Implementação de funcionalidades de cadastro, edição e desativação de projetos.</li>
                  <li>Desenvolvimento da criação de administradores comuns.</li>
                  <li>Criação do sistema de solicitações para novos projetos e edições.</li>
                  <li>Manipulação e integração de arquivos ao sistema.</li>
                </ul>

                <h4>Tecnologias Utilizadas:</h4>
                <ul>
                  <li><strong>Backend:</strong> Java com Spring Boot</li>
                  <li><strong>Frontend:</strong> React.js</li>
                  <li><strong>Banco de Dados:</strong> MySQL</li>
                  <li><strong>Controle de Versão:</strong> GitHub</li>
                </ul>

                <h4>Habilidades Desenvolvidas:</h4>
                <p><strong>Hard Skills:</strong> Java com Spring Boot, React.js, MySQL, manipulação de arquivos.</p>
                <p><strong>Soft Skills:</strong> Organização, comunicação em equipe, e resolução de problemas técnicos complexos.</p>

                <h4>Link do Repositório:</h4>
                <p>
                  Para mais detalhes, acesse o repositório do projeto no GitHub:{' '}
                  <a
                    href="https://github.com/A-Sync-Fatec/api-fatec-3sem-24"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Releitura do Portal de Transparência
                  </a>
                </p>
              </div>
            )}


          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Meus Principais Conhecimentos</h2>
          <div className="skills-container">
            <div className="skill-card">
              <h3>Python</h3>
              <p>
                Experiência em desenvolvimento de APIs com Flask, incluindo
                gerenciamento de dados e criação de aplicações escaláveis.
              </p>
            </div>
            <div className="skill-card">
              <h3>MySQL</h3>
              <p>
                Forte conhecimento em modelagem de bancos de dados relacionais,
                queries avançadas e otimização de performance.
              </p>
            </div>
            <div className="skill-card">
              <h3>TypeScript</h3>
              <p>
                Habilidade no uso de TypeScript para desenvolvimento front-end e
                back-end, garantindo segurança e clareza no código.
              </p>
            </div>
            <div className="skill-card">
              <h3>GitHub</h3>
              <p>
                Experiência com versionamento de código, colaboração em equipe e
                gestão de repositórios.
              </p>
            </div>
            <div className="skill-card">
              <h3>React.js</h3>
              <p>
                Desenvolvimento de interfaces dinâmicas e responsivas com foco em
                experiência do usuário.
              </p>
            </div>
            <div className="skill-card">
              <h3>Spring Boot</h3>
              <p>
                Desenvolvimento de sistemas robustos com Java, utilizando Spring Boot
                para criar APIs e serviços RESTful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="section-content">
          <h2>Contato</h2>
          <p>Conecte-se comigo através das redes sociais:</p>
          <div className="contact-icons">
            <a href="https://github.com/DiogoPalharini" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/diogo-palharini-10b803275/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/diogopalharini/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:diogo.palharini@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
