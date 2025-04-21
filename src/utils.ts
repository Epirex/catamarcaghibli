import { getProjects } from './lib/projects';

export type ProjectItem = {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
};

export async function getDatabase(): Promise<ProjectItem[]> {
  return getProjects();
}

export async function getPage(id: number): Promise<ProjectItem | undefined> {
  return getProjects().find(project => project.id === id);
}
