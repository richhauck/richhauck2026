export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  categories: string[];
}

export interface ProjectData {
  name: string;
  description: string;
  project: string;
  client: string;
  categories: string[];
  url: string;
  images: string[];
}
