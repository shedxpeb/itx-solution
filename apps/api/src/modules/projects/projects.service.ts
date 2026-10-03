import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from './projects.repository';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectQueryDto } from './dto/project-query.dto';
import { ProjectStatus } from '@prisma/client';
import {
  ProjectNotFoundError,
  ProjectSlugAlreadyExistsError,
} from '../../common/errors/app-error';
import { ProjectListResponse, ProjectDetailResponse } from './types/project.types';
import { PaginatedResponse } from '../../common/pagination/pagination.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly repository: ProjectsRepository) {}

  async create(dto: CreateProjectDto): Promise<ProjectDetailResponse> {
    const slug = dto.slug || this.generateSlug(dto.title);

    const existing = await this.repository.slugExists(slug);
    if (existing) {
      throw new ProjectSlugAlreadyExistsError();
    }

    let publishedAt: Date | undefined;
    if (dto.status === ProjectStatus.PUBLISHED && !dto.publishedAt) {
      publishedAt = new Date();
    } else if (dto.publishedAt) {
      publishedAt = new Date(dto.publishedAt);
    }

    return this.repository.create({
      title: dto.title,
      slug,
      shortDescription: dto.shortDescription,
      description: dto.description,
      clientName: dto.clientName,
      industry: dto.industry,
      challenge: dto.challenge,
      solution: dto.solution,
      results: dto.results,
      projectUrl: dto.projectUrl,
      githubUrl: dto.githubUrl,
      featured: dto.featured,
      status: dto.status || ProjectStatus.DRAFT,
      publishedAt,
    });
  }

  async findAll(query: ProjectQueryDto): Promise<PaginatedResponse<ProjectListResponse>> {
    const page = query.page || 1;
    const limit = query.limit || 12;
    const skip = (page - 1) * limit;

    const { items, total } = await this.repository.findList({
      skip,
      take: limit,
      search: query.search,
      status: query.status,
      featured: query.featured,
      industry: query.industry,
      sort: query.sort || 'createdAt',
      order: query.order || 'desc',
    });

    return {
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(id: string): Promise<ProjectDetailResponse> {
    const project = await this.repository.findById(id);
    if (!project) {
      throw new ProjectNotFoundError();
    }
    return project;
  }

  async findBySlug(slug: string): Promise<ProjectDetailResponse> {
    const project = await this.repository.findBySlug(slug);
    if (!project) {
      throw new ProjectNotFoundError();
    }
    return project;
  }

  async update(id: string, dto: UpdateProjectDto): Promise<ProjectDetailResponse> {
    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new ProjectNotFoundError();
    }

    if (dto.slug && dto.slug !== existing.slug) {
      const slugExists = await this.repository.slugExists(dto.slug, id);
      if (slugExists) {
        throw new ProjectSlugAlreadyExistsError();
      }
    }

    let publishedAt: Date | undefined;
    if (dto.status === ProjectStatus.PUBLISHED && !existing.publishedAt && !dto.publishedAt) {
      publishedAt = new Date();
    } else if (dto.publishedAt) {
      publishedAt = new Date(dto.publishedAt);
    }

    return this.repository.update(id, {
      ...dto,
      publishedAt,
    });
  }

  async delete(id: string): Promise<void> {
    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new ProjectNotFoundError();
    }
    await this.repository.delete(id);
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
}
