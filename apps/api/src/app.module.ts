import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { HealthModule } from './health/health.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [PrismaModule, HealthModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
