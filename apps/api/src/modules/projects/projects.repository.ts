import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { ProjectStatus } from '@prisma/client';

@Injectable()
export class ProjectsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.project.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        slug: true,
        shortDescription: true,
        description: true,
        clientName: true,
        industry: true,
        challenge: true,
        solution: true,
        results: true,
        projectUrl: true,
        githubUrl: true,
        featured: true,
        status: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        projectMedia: {
          select: {
            sortOrder: true,
            media: {
              select: {
                url: true,
                altText: true,
              },
            },
          },
          orderBy: {
            sortOrder: 'asc',
          },
        },
        technologies: {
          select: {
            technology: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });
  }

  async findBySlug(slug: string) {
    return this.prisma.project.findUnique({
      where: { slug },
      select: {
        id: true,
        title: true,
        slug: true,
        shortDescription: true,
        description: true,
        clientName: true,
        industry: true,
        challenge: true,
        solution: true,
        results: true,
        projectUrl: true,
        githubUrl: true,
        featured: true,
        status: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        projectMedia: {
          select: {
            sortOrder: true,
            media: {
              select: {
                url: true,
                altText: true,
              },
            },
          },
          orderBy: {
            sortOrder: 'asc',
          },
        },
        technologies: {
          select: {
            technology: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });
  }

  async findList(params: {
    skip: number;
    take: number;
    search?: string;
    status?: ProjectStatus;
    featured?: boolean;
    industry?: string;
    sort?: 'createdAt' | 'updatedAt' | 'title' | 'publishedAt';
    order?: 'asc' | 'desc';
  }) {
    const { skip, take, search, status, featured, industry, sort = 'createdAt', order = 'desc' } = params;

    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { shortDescription: { contains: search, mode: 'insensitive' } },
        { clientName: { contains: search, mode: 'insensitive' } },
        { industry: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (status) {
      where.status = status;
    }

    if (featured !== undefined) {
      where.featured = featured;
    }

    if (industry) {
      where.industry = { contains: industry, mode: 'insensitive' };
    }

    const [items, total] = await Promise.all([
      this.prisma.project.findMany({
        where,
        skip,
        take,
        orderBy: { [sort]: order },
        select: {
          id: true,
          title: true,
          slug: true,
          shortDescription: true,
          clientName: true,
          industry: true,
          featured: true,
          status: true,
          publishedAt: true,
          createdAt: true,
          projectMedia: {
            select: {
              sortOrder: true,
              media: {
                select: {
                  url: true,
                  altText: true,
                },
              },
            },
            orderBy: {
              sortOrder: 'asc',
            },
            take: 1,
          },
        },
      }),
      this.prisma.project.count({ where }),
    ]);

    // Map projectMedia to coverImage for list response
    const itemsWithCover = items.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      shortDescription: item.shortDescription,
      clientName: item.clientName,
      industry: item.industry,
      featured: item.featured,
      status: item.status,
      publishedAt: item.publishedAt,
      createdAt: item.createdAt,
      coverImage: item.projectMedia[0]?.media.url || null,
    }));

    return { items: itemsWithCover, total };
  }

  async create(data: {
    title: string;
    slug: string;
    shortDescription?: string;
    description: string;
    clientName?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    projectUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    status?: ProjectStatus;
    publishedAt?: Date;
  }) {
    const createData: any = {
      title: data.title,
      slug: data.slug,
      description: data.description,
    };

    if (data.shortDescription !== undefined) createData.shortDescription = data.shortDescription;
    if (data.clientName !== undefined) createData.clientName = data.clientName;
    if (data.industry !== undefined) createData.industry = data.industry;
    if (data.challenge !== undefined) createData.challenge = data.challenge;
    if (data.solution !== undefined) createData.solution = data.solution;
    if (data.results !== undefined) createData.results = data.results;
    if (data.projectUrl !== undefined) createData.projectUrl = data.projectUrl;
    if (data.githubUrl !== undefined) createData.githubUrl = data.githubUrl;
    if (data.featured !== undefined) createData.featured = data.featured;
    if (data.status !== undefined) createData.status = data.status;
    if (data.publishedAt !== undefined) createData.publishedAt = data.publishedAt;

    return this.prisma.project.create({
      data: createData,
      select: {
        id: true,
        title: true,
        slug: true,
        shortDescription: true,
        description: true,
        clientName: true,
        industry: true,
        challenge: true,
        solution: true,
        results: true,
        projectUrl: true,
        githubUrl: true,
        featured: true,
        status: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        projectMedia: {
          select: {
            sortOrder: true,
            media: {
              select: {
                url: true,
                altText: true,
              },
            },
          },
          orderBy: {
            sortOrder: 'asc',
          },
        },
        technologies: {
          select: {
            technology: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: string, data: {
    title?: string;
    slug?: string;
    shortDescription?: string;
    description?: string;
    clientName?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    projectUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    status?: ProjectStatus;
    publishedAt?: Date;
  }) {
    return this.prisma.project.update({
      where: { id },
      data,
      select: {
        id: true,
        title: true,
        slug: true,
        shortDescription: true,
        description: true,
        clientName: true,
        industry: true,
        challenge: true,
        solution: true,
        results: true,
        projectUrl: true,
        githubUrl: true,
        featured: true,
        status: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        projectMedia: {
          select: {
            sortOrder: true,
            media: {
              select: {
                url: true,
                altText: true,
              },
            },
          },
          orderBy: {
            sortOrder: 'asc',
          },
        },
        technologies: {
          select: {
            technology: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });
  }

  async delete(id: string) {
    return this.prisma.project.delete({
      where: { id },
    });
  }

  async slugExists(slug: string, excludeId?: string) {
    return this.prisma.project.findFirst({
      where: {
        slug,
        ...(excludeId && { id: { not: excludeId } }),
      },
    });
  }
}
