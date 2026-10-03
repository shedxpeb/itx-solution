import { Container, Heading1, BodyMedium, EmptyState, Caption } from '@itx/ui';

export const metadata = {
  title: 'Case Studies - ITX Solution',
  description: 'In-depth documentation of selected projects and their outcomes.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="max-w-3xl">
            <Caption className="tracking-widest text-primary mb-6">
              CASE STUDIES
            </Caption>
            <Heading1 className="mb-6 leading-tight">
              Selected work, documented in depth.
            </Heading1>
            <BodyMedium className="text-foreground-muted max-w-2xl">
              Detailed case studies exploring our approach, challenges,
              solutions, and outcomes across various projects.
            </BodyMedium>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <EmptyState
            title="Case Studies Coming Soon"
            description="We're preparing detailed case studies of our work. Check back soon for in-depth project documentation."
          />
        </Container>
      </section>
    </>
  );
}
