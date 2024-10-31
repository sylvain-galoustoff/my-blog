type ProjectType = {
  id: number;
  name: string;
  pathname: string;
  url?: string;
  screenshot: string;
  roles: string[];
  year: string;
  context: string;
  description: DescriptionType[];
};

export default ProjectType;

export type DescriptionType = {
  label: string;
  techno: string;
};
