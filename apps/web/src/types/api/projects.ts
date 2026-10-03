export type ProjectStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export interface ProjectListItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  clientName: string | null;
  industry: string | null;
  featured: boolean;
  status: ProjectStatus;
  publishedAt: string | null;
  createdAt: string;
  coverImage?: string;
}

export interface ProjectDetail {
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
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  projectMedia?: Array<{
    sortOrder: number;
    media: {
      url: string;
      altText: string | null;
    };
  }>;
  technologies?: Array<{
    technology: {
      name: string;
      slug: string;
    };
  }>;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ProjectListResponse {
  items: ProjectListItem[];
  pagination: PaginationMeta;
}

export interface ProjectQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: ProjectStatus;
  featured?: boolean;
  industry?: string;
  sort?: 'createdAt' | 'updatedAt' | 'title' | 'publishedAt' | 'sortOrder';
  order?: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: {
    code: string;
    message: string;
  };
}
