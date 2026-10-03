import { IsOptional, IsString, IsBoolean, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ProjectStatus } from '@prisma/client';
import { PaginationDto } from '../../../common/pagination/pagination.dto';

export class ProjectQueryDto extends PaginationDto {
  @IsString()
  @IsOptional()
  search?: string;

  @IsEnum(ProjectStatus)
  @IsOptional()
  status?: ProjectStatus;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  featured?: boolean;

  @IsString()
  @IsOptional()
  industry?: string;

  @IsString()
  @IsOptional()
  sort?: 'createdAt' | 'updatedAt' | 'title' | 'publishedAt';

  @IsEnum(['asc', 'desc'])
  @IsOptional()
  order?: 'asc' | 'desc';
}
