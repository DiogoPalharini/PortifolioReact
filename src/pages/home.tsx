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
                  <strong> plataforma informativa para mães de crianças com Insuficiência Renal Crônica (IRC)</strong>, oferecendo suporte
                  por meio de artigos educativos, ferramentas para compartilhamento de experiências e dicas, além de um sistema de 
                  gerenciamento de postagens em um blog.
                </p>

                <h4>Proposta do Projeto:</h4>
                <p>
                  A proposta do projeto foi criar uma plataforma que incluísse funcionalidades para tela de login, cadastro e recuperação de senha,
                  um blog com sistema de filtro e área de comentários, uma área de administração para gerenciamento de usuários e postagens,
                  localização de hospitais e sintomas comuns relacionados à doença, além de gráficos para visualização de dados informativos.
                </p>

                <h4>Contribuições Pessoais:</h4>
                <p>
                  Durante o projeto, atuei como <strong>Product Owner</strong>, sendo responsável por organizar o backlog do projeto, 
                  priorizar funcionalidades com base nos objetivos do parceiro acadêmico e garantir a entrega de funcionalidades alinhadas 
                  às expectativas do cliente. Além disso, participei diretamente no desenvolvimento das telas de login e cadastro, contribuindo 
                  para a implementação técnica e ajustes necessários ao longo do processo.
                </p>

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
                  Participei do desenvolvimento do <strong>Internet Ocean</strong>, um sistema de gerenciamento de chamados para otimizar
                  o atendimento e suporte ao cliente em uma empresa de serviços de internet. O sistema permite o registro, acompanhamento 
                  e resolução de chamados, assegurando uma gestão eficiente das demandas e melhorando a experiência dos clientes e técnicos.
                </p>

                <h4>Proposta do Projeto:</h4>
                <p>
                  A proposta do projeto foi desenvolver uma solução que permitisse o cadastro de usuários, incluindo clientes, técnicos e
                  administradores, cada um com perfis e permissões distintos. Também foram implementadas funcionalidades para o registro e
                  detalhamento de chamados, um sistema de acompanhamento com diferentes status (Aberto, Em Processo, Finalizado, Concluído)
                  e uma base de conhecimento com soluções para problemas comuns (FAQ), tornando o suporte mais rápido e eficiente.
                </p>

                <h4>Contribuições Pessoais:</h4>
                <p>
                  Durante o projeto, contribui diretamente para o desenvolvimento das funcionalidades de cadastro e autenticação de usuários, 
                  além da implementação do sistema de registro e acompanhamento de chamados. Também colaborei na criação da base de conhecimento, 
                  que forneceu informações valiosas para a equipe de suporte e clientes, garantindo uma experiência otimizada e completa.
                </p>

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
                  <p>
                    A proposta do projeto envolveu a criação de um sistema completo que incluiu funcionalidades para o cadastro, edição e desativação de projetos, 
                    além da criação de administradores comuns. Também foram implementados sistemas para solicitação de criação e edição de projetos, juntamente 
                    com a manipulação de arquivos relacionados a cada projeto. Para garantir maior usabilidade e eficiência, desenvolvemos um sistema de filtros 
                    avançados que permitiu a busca e a visualização dos projetos de forma otimizada, atendendo às demandas específicas do cliente e do público-alvo.
                  </p>

                  <h4>Contribuições Pessoais:</h4>
                  <p>
                    Durante o projeto, contribui diretamente para a implementação de funcionalidades de cadastro, edição e desativação de projetos,
                    assim como no desenvolvimento do sistema de criação de administradores comuns. Também participei da criação do sistema de 
                    solicitações para novos projetos e edições, garantindo que todas as demandas fossem atendidas de forma organizada. Adicionalmente, 
                    atuei na manipulação e integração de arquivos ao sistema, permitindo que documentos relacionados aos projetos fossem incorporados 
                    de maneira eficiente. Essas atividades envolveram desde a definição de requisitos até a execução técnica, sempre buscando entregar 
                    um sistema funcional e alinhado às necessidades do cliente.
                  </p>

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
