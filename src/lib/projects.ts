import portfolioData from '../data/portfolio.json';

export function getProjects() {
  return portfolioData.proyectos;
}

export function getProjectById(id: number) {
  return portfolioData.proyectos.find(project => project.id === id);
}