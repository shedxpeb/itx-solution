import { apiClient, ApiError } from './client';
import {
  ProjectListItem,
  ProjectDetail,
  ProjectListResponse,
  ProjectQueryParams,
  ApiResponse,
} from '../../types/api/projects';

export class ProjectApiError extends ApiError {
  constructor(code: string, message: string, statusCode?: number) {
    super(code, message, statusCode);
  }
}

export class ProjectNotFoundError extends ProjectApiError {
  constructor() {
    super('PROJECT_NOT_FOUND', 'Project not found', 404);
  }
}

export class ProjectSlugAlreadyExistsError extends ProjectApiError {
  constructor() {
    super('PROJECT_SLUG_ALREADY_EXISTS', 'Project slug already exists', 409);
  }
}

function buildQueryParams(params: ProjectQueryParams): URLSearchParams {
  const searchParams = new URLSearchParams();

  if (params.page !== undefined) searchParams.append('page', params.page.toString());
  if (params.limit !== undefined) searchParams.append('limit', params.limit.toString());
  if (params.search) searchParams.append('search', params.search);
  if (params.status) searchParams.append('status', params.status);
  if (params.featured !== undefined) searchParams.append('featured', params.featured.toString());
  if (params.industry) searchParams.append('industry', params.industry);
  if (params.sort) searchParams.append('sort', params.sort);
  if (params.order) searchParams.append('order', params.order);

  return searchParams;
}

export async function getProjects(params: ProjectQueryParams = {}): Promise<ProjectListResponse> {
  const query = buildQueryParams(params);
  const queryString = query.toString() ? `?${query.toString()}` : '';

  const response = await apiClient.get<ApiResponse<ProjectListResponse>>(`/projects${queryString}`);

  if (!response.success || !response.data) {
    throw new ProjectApiError(
      response.error?.code || 'API_ERROR',
      response.error?.message || 'Failed to fetch projects',
    );
  }

  return response.data;
}

export async function getProjectById(id: string): Promise<ProjectDetail> {
  const response = await apiClient.get<ApiResponse<ProjectDetail>>(`/projects/${id}`);

  if (!response.success || !response.data) {
    if (response.error?.code === 'PROJECT_NOT_FOUND') {
      throw new ProjectNotFoundError();
    }
    throw new ProjectApiError(
      response.error?.code || 'API_ERROR',
      response.error?.message || 'Failed to fetch project',
    );
  }

  return response.data;
}

export async function getProjectBySlug(slug: string): Promise<ProjectDetail> {
  try {
    const response = await apiClient.get<ApiResponse<ProjectDetail>>(`/projects/slug/${slug}`);

    if (!response.success || !response.data) {
      if (response.error?.code === 'PROJECT_NOT_FOUND') {
        throw new ProjectNotFoundError();
      }
      throw new ProjectApiError(
        response.error?.code || 'API_ERROR',
        response.error?.message || 'Failed to fetch project',
      );
    }

    return response.data;
  } catch (e) {
    if (e instanceof ApiError && e.statusCode === 404) {
      throw new ProjectNotFoundError();
    }
    throw e;
  }
}
