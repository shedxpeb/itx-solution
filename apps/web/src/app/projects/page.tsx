import { getProjects } from '@/lib/api/projects';
import { ProjectListItem } from '@/types/api/projects';
import { Container, Heading1, Heading2, BodyMedium, NavLink, Caption } from '@itx/ui';

export const metadata = {
  title: 'Projects - ITX Solution',
  description: 'View our portfolio of work across industries and technologies.',
};

// Use runtime fetching - don't require backend during build
export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  let projects: ProjectListItem[] = [];
  let error: string | null = null;

  try {
    const response = await getProjects({ page: 1, limit: 24, status: 'PUBLISHED', sort: 'sortOrder', order: 'asc' });
    projects = response.items;
  } catch (e) {
    error = 'Unable to load projects at this time. Please try again later.';
  }

  const hasProjects = projects.length > 0;
  const featuredProject = hasProjects ? projects[0] : null;
  const remainingProjects = hasProjects ? projects.slice(1) : [];

  const getProjectImage = (project: ProjectListItem) => {
    const slugToImage: Record<string, string> = {
      'shedxpeb': '/projects/shedxpeb/cover.webp',
      'proxsteelhub': '/projects/proxsteelhub/prox.png',
      'buildxcrm': '/projects/buildxcrm/cover.webp',
      'purchasee': '/projects/purchasee/cover.webp',
      'task-management': '/projects/task-management/cover.webp',
    };
    
    return slugToImage[project.slug] || null;
  };

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="max-w-3xl">
            <Caption className="tracking-widest text-primary mb-6">
              PROJECTS
            </Caption>
            <Heading1 className="mb-6 leading-tight">
              Our work across industries.
            </Heading1>
            <BodyMedium className="text-foreground-muted max-w-2xl">
              A selection of projects demonstrating our expertise in building
              digital platforms and business systems.
            </BodyMedium>
          </div>
        </Container>
      </section>

      {hasProjects && featuredProject && (
        <section className="py-16 md:py-20 bg-background-alt">
          <Container>
            <div className="max-w-6xl mx-auto">
              <NavLink href={`/projects/${featuredProject.slug}`} className="block group" data-cursor="project">
                <div className="bg-background border border-border rounded-3xl overflow-hidden group-hover:scale-[1.01] group-hover:border-primary/30 transition-all duration-500">
                  {/* Featured Project Image */}
                  <div className="aspect-[16/9] bg-background-dark/5 relative overflow-hidden">
                    {getProjectImage(featuredProject) ? (
                      <img
                        src={getProjectImage(featuredProject)!}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-primary/5 rounded-2xl border border-primary/10 backdrop-blur-sm">
                          <div className="p-12 space-y-6">
                            <div className="h-4 w-1/3 bg-primary/20 rounded" />
                            <div className="space-y-3">
                              <div className="h-3 w-full bg-primary/10 rounded" />
                              <div className="h-3 w-2/3 bg-primary/10 rounded" />
                              <div className="h-3 w-1/2 bg-primary/10 rounded" />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-8">
                              <div className="h-24 bg-primary/10 rounded-xl" />
                              <div className="h-24 bg-primary/10 rounded-xl" />
                              <div className="h-24 bg-primary/10 rounded-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Featured Project Content */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <Caption className="tracking-widest text-primary">
                        FEATURED / {(featuredProject.industry || 'PROJECT').toUpperCase()}
                      </Caption>
                      <span className="text-caption text-foreground-muted group-hover:text-primary transition-colors">
                        VIEW PROJECT →
                      </span>
                    </div>
                    <Heading2 className="text-3xl md:text-4xl mb-6">
                      {featuredProject.title}
                    </Heading2>
                    <BodyMedium className="text-foreground-muted text-lg leading-relaxed max-w-3xl">
                      {featuredProject.shortDescription}
                    </BodyMedium>
                  </div>
                </div>
              </NavLink>
            </div>
          </Container>
        </section>
      )}

      {remainingProjects.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <Container>
            <Heading2 className="mb-8">More Projects</Heading2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {remainingProjects.map((project, index) => (
                <NavLink key={project.id} href={`/projects/${project.slug}`} className="block group" data-cursor="project">
                  <div className="bg-background border border-border rounded-2xl overflow-hidden group-hover:scale-[1.01] group-hover:border-primary/30 transition-all duration-500 h-full">
                    {/* Project Image */}
                    <div className="aspect-video bg-background-dark/5 relative overflow-hidden">
                      {getProjectImage(project) ? (
                        <img
                          src={getProjectImage(project)!}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3/4 h-3/4 bg-primary/5 rounded-lg border border-primary/10 backdrop-blur-sm">
                            <div className="p-6 space-y-3">
                              <div className="h-3 w-1/3 bg-primary/20 rounded" />
                              <div className="space-y-2">
                                <div className="h-2 w-full bg-primary/10 rounded" />
                                <div className="h-2 w-2/3 bg-primary/10 rounded" />
                              </div>
                              <div className="grid grid-cols-2 gap-2 mt-4">
                                <div className="h-12 bg-primary/10 rounded" />
                                <div className="h-12 bg-primary/10 rounded" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Caption className="tracking-widest text-primary">
                          {String(index + 2).padStart(2, '0')} / {(project.industry || 'PROJECT').toUpperCase()}
                        </Caption>
                      </div>
                      <h3 className="text-h4 font-semibold mb-3">
                        {project.title}
                      </h3>
                      <BodyMedium className="text-foreground-muted line-clamp-2">
                        {project.shortDescription}
                      </BodyMedium>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </Container>
        </section>
      )}

      {!hasProjects && (
        <section className="py-16 md:py-20 bg-background-alt">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <Heading2 className="mb-6">No Projects Available</Heading2>
              <BodyMedium className="text-foreground-muted mb-8">
                We&apos;re updating our portfolio. Check back soon.
              </BodyMedium>
              <NavLink href="/contact" data-cursor="link">
                <span className="text-body-large text-primary hover:text-primary-dark transition-colors font-medium">
                  Start a Conversation →
                </span>
              </NavLink>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
