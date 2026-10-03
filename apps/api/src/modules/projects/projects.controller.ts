import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectQueryDto } from './dto/project-query.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    const project = await this.projectsService.create(createProjectDto);
    return {
      success: true,
      data: project,
    };
  }

  @Get()
  async findAll(@Query() query: ProjectQueryDto) {
    const result = await this.projectsService.findAll(query);
    return {
      success: true,
      data: result,
    };
  }

  @Get('slug/:slug')
  async findBySlug(@Param('slug') slug: string) {
    const project = await this.projectsService.findBySlug(slug);
    return {
      success: true,
      data: project,
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const project = await this.projectsService.findById(id);
    return {
      success: true,
      data: project,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    const project = await this.projectsService.update(id, updateProjectDto);
    return {
      success: true,
      data: project,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.projectsService.delete(id);
    return {
      success: true,
      data: null,
    };
  }
}
