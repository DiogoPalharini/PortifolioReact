import React from 'react';
import styled from 'styled-components';
import IrcImage from '../img/irc.jpg';
import InternetOceanImage from '../img/internetOcean.jpg';

const Container = styled.div`
  padding: 2rem 2rem 0;  /* Padding apenas nas laterais e na parte superior */
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const ProjectCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProjectDescription = styled.p`
  margin-top: 0.5rem;
  color: #555;
`;

const Projects: React.FC = () => {
  const projectList = [
    {
      image: IrcImage,
      link: 'https://github.com/Daiene/Pixels',
      description: 'Uma plataforma informativa e de suporte para mães de crianças com insuficiência renal crônica. Este site/blog oferece artigos educativos e ferramentas de gerenciamento de postagens para compartilhar experiências e dicas.',
    },
    {
      image: InternetOceanImage,
      link: 'https://github.com/CoddingWarriors/Api_CoddingWarriors',
      description: 'Um sistema intuitivo para o gerenciamento de chamados de suporte técnico em uma empresa fictícia de serviços de internet. Facilita a organização, o acompanhamento e a resolução eficiente dos chamados dos clientes.',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <Container>
      <h1>Meus Projetos</h1>
      <ProjectGrid>
        {projectList.map((project, index) => (
          <ProjectCard key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={`Project ${index + 1}`} />
            </a>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  );
};

export default Projects;
