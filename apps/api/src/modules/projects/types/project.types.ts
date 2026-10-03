import { ProjectStatus } from '@prisma/client';

export interface ProjectListResponse {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  clientName: string | null;
  industry: string | null;
  featured: boolean;
  status: ProjectStatus;
  publishedAt: Date | null;
  createdAt: Date;
  coverImage?: string;
}

export interface ProjectDetailResponse {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  clientName: string | null;
  industry: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  projectUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  status: ProjectStatus;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  projectMedia: Array<{
    sortOrder: number;
    media: {
      url: string;
      altText: string | null;
    };
  }>;
  technologies: Array<{
    technology: {
      name: string;
      slug: string;
    };
  }>;
}
