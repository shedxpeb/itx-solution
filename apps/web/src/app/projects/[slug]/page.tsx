import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, ProjectNotFoundError } from '@/lib/api/projects';
import { ProjectDetail } from '@/types/api/projects';
import { Container, Heading1, Heading2, Heading3, BodyMedium, Caption } from '@itx/ui';
import Image from 'next/image';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Use runtime fetching - don't require backend during build
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  try {
    const project = await getProjectBySlug(slug);
    return {
      title: `${project.title} - ITX Solution`,
      description: project.shortDescription,
    };
  } catch {
    return {
      title: 'Project - ITX Solution',
    };
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  let project: ProjectDetail;

  try {
    project = await getProjectBySlug(slug);
  } catch (e) {
    if (e instanceof ProjectNotFoundError) {
      notFound();
    }
    throw e;
  }

  const coverImage = project.projectMedia?.[0]?.media.url;

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="max-w-4xl">
            <Caption className="tracking-widest text-primary mb-6">
              PROJECT
            </Caption>
            <Heading1 className="mb-6 leading-tight">
              {project.title}
            </Heading1>
            <BodyMedium className="text-foreground-muted max-w-2xl mb-6">
              {project.shortDescription}
            </BodyMedium>
            {project.industry && (
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {project.industry}
              </div>
            )}
          </div>
        </Container>
      </section>

      {coverImage && (
        <section className="bg-background-alt">
          <Container>
            <div className="aspect-video bg-muted overflow-hidden rounded-lg relative">
              <Image
                src={coverImage}
                alt={project.projectMedia?.[0]?.media.altText || project.title}
                fill
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 900px, 100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="max-w-4xl">
            <Heading2 className="mb-8">Overview</Heading2>
            <BodyMedium className="text-foreground-muted leading-relaxed whitespace-pre-line">
              {project.description}
            </BodyMedium>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-12">
                <Heading3 className="mb-4">Technologies</Heading3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.technology.slug}
                      className="px-3 py-1 bg-background-alt border border-border rounded-full text-sm"
                    >
                      {tech.technology.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.projectUrl && (
              <div className="mt-12">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-lg hover:bg-primary-dark transition-colors"
                >
                  Visit Live Project →
                </a>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
