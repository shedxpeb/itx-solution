import { PrismaClient, RoleName, ProjectStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Seed Roles
  const roles = [
    { name: 'SUPER_ADMIN' as RoleName },
    { name: 'ADMIN' as RoleName },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
  }

  console.log('✅ Roles seeded successfully');

  // Seed Technologies
  const technologies = [
    { name: 'Next.js', slug: 'nextjs' },
    { name: 'React', slug: 'react' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'NestJS', slug: 'nestjs' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'Prisma', slug: 'prisma' },
  ];

  for (const tech of technologies) {
    await prisma.technology.upsert({
      where: { slug: tech.slug },
      update: {},
      create: tech,
    });
  }

  console.log('✅ Technologies seeded successfully');

  // Seed Projects
  const baseDate = new Date();
  const projects = [
    {
      title: 'ShedX PEB',
      slug: 'shedxpeb',
      shortDescription: 'Pre-Engineered Building solutions website for industrial, commercial, and infrastructure projects.',
      description: 'A comprehensive website for ShedX PEB LLP, a Pre-Engineered Building manufacturer based in Ahmedabad, Gujarat. The site showcases their services including standard frame types, roofing and wall panels, crane systems, and mezzanine systems. The website features detailed project galleries, service information, client testimonials, and contact forms for industrial shed, warehouse, factory building, and cold storage solutions.',
      industry: 'Industrial',
      projectUrl: 'https://shedxpeb.com/',
      featured: true,
      status: 'PUBLISHED' as ProjectStatus,
      publishedAt: new Date(baseDate.getTime() - 4000),
    },
    {
      title: 'BuildX CRM',
      slug: 'buildxcrm',
      shortDescription: 'Customer Relationship Management system with authentication and user management.',
      description: 'A CRM application featuring user authentication, login, registration, and password recovery functionality. The system provides account management capabilities for business customer relationship operations.',
      industry: 'Business Software',
      projectUrl: 'https://buildxcrm.com/',
      featured: true,
      status: 'PUBLISHED' as ProjectStatus,
      publishedAt: new Date(baseDate.getTime() - 3000),
    },
    {
      title: 'ProxSteelHub',
      slug: 'proxsteelhub',
      shortDescription: 'Steel hub and distribution platform serving industrial and construction sectors.',
      description: 'Steel distribution and industrial hub platform for the construction and industrial sectors. The platform provides steel material management and distribution services.',
      industry: 'Industrial',
      projectUrl: 'https://proxsteelhub.com/',
      featured: false,
      status: 'PUBLISHED' as ProjectStatus,
      publishedAt: new Date(baseDate.getTime() - 2000),
    },
    {
      title: 'Task Management',
      slug: 'task-management',
      shortDescription: 'TaskFlow task management application with calendar, reports, and priority matrix features.',
      description: 'A task management application called TaskFlow that provides comprehensive task organization with views for tasks, today\'s schedule, calendar planning, and detailed reports. The system includes a priority matrix for task categorization and efficient workflow management.',
      industry: 'Productivity',
      projectUrl: 'https://task-management-w4ai-swart.vercel.app/app/tasks/',
      featured: true,
      status: 'PUBLISHED' as ProjectStatus,
      publishedAt: new Date(baseDate.getTime() - 1000),
    },
    {
      title: 'Purchasee',
      slug: 'purchasee',
      shortDescription: 'Purchase management application with dashboard, projects, vendors, and purchase tracking.',
      description: 'A comprehensive purchase management system featuring a dashboard for activity overview, new purchase creation, purchase history, project management, and vendor tracking. The application streamlines procurement workflows with centralized purchase and vendor data management.',
      industry: 'Business Software',
      projectUrl: 'https://purchasee.vercel.app/',
      featured: true,
      status: 'PUBLISHED' as ProjectStatus,
      publishedAt: baseDate,
    },
  ];

  const techRecords = await prisma.technology.findMany();

  for (const project of projects) {
    const created = await prisma.project.upsert({
      where: { slug: project.slug },
      update: {
        title: project.title,
        shortDescription: project.shortDescription,
        description: project.description,
        industry: project.industry,
        projectUrl: project.projectUrl,
        featured: project.featured,
        status: project.status,
        publishedAt: project.publishedAt,
      },
      create: project,
    });

    // Add technologies for published projects
    if (project.status === 'PUBLISHED' && techRecords.length > 0) {
      const relevantTechs = techRecords.slice(0, 4); // Add first 4 technologies
      for (const tech of relevantTechs) {
        const existing = await prisma.projectTechnology.findUnique({
          where: {
            projectId_technologyId: {
              projectId: created.id,
              technologyId: tech.id,
            },
          },
        });

        if (!existing) {
          await prisma.projectTechnology.create({
            data: {
              projectId: created.id,
              technologyId: tech.id,
            },
          });
        }
      }
    }
  }

  console.log('✅ Projects seeded successfully');

  // Seed Media for projects
  const mediaItems = [
    {
      storageKey: 'projects/shedxpeb/cover.webp',
      url: '/projects/shedxpeb/cover.webp',
      filename: 'cover.webp',
      mimeType: 'image/webp',
      size: 372,
      width: 1200,
      height: 630,
      altText: 'ShedX PEB Project Cover',
    },
    {
      storageKey: 'projects/proxsteelhub/cover.webp',
      url: '/projects/proxsteelhub/cover.webp',
      filename: 'cover.webp',
      mimeType: 'image/webp',
      size: 369,
      width: 1200,
      height: 630,
      altText: 'ProxSteelHub Project Cover',
    },
    {
      storageKey: 'projects/buildxcrm/cover.webp',
      url: '/projects/buildxcrm/cover.webp',
      filename: 'cover.webp',
      mimeType: 'image/webp',
      size: 372,
      width: 1200,
      height: 630,
      altText: 'BuildX CRM Project Cover',
    },
    {
      storageKey: 'projects/purchasee/cover.webp',
      url: '/projects/purchasee/cover.webp',
      filename: 'cover.webp',
      mimeType: 'image/webp',
      size: 365,
      width: 1200,
      height: 630,
      altText: 'Purchasee Project Cover',
    },
    {
      storageKey: 'projects/task-management/cover.webp',
      url: '/projects/task-management/cover.webp',
      filename: 'cover.webp',
      mimeType: 'image/webp',
      size: 365,
      width: 1200,
      height: 630,
      altText: 'Task Management Project Cover',
    },
  ];

  for (const media of mediaItems) {
    const createdMedia = await prisma.media.upsert({
      where: { storageKey: media.storageKey },
      update: {},
      create: media,
    });

    // Link media to project
    const project = await prisma.project.findUnique({
      where: { slug: media.storageKey.split('/')[1] },
    });

    if (project) {
      const existing = await prisma.projectMedia.findUnique({
        where: {
          projectId_mediaId: {
            projectId: project.id,
            mediaId: createdMedia.id,
          },
        },
      });

      if (!existing) {
        await prisma.projectMedia.create({
          data: {
            projectId: project.id,
            mediaId: createdMedia.id,
            sortOrder: 0,
          },
        });
      }
    }
  }

  console.log('✅ Project media seeded successfully');
  console.log('✅ Seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
