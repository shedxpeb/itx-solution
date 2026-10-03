import { Container, Heading1, BodyMedium, EmptyState, Caption } from '@itx/ui';

export const metadata = {
  title: 'Blog - ITX Solution',
  description: 'Ideas, insights, and technology perspectives from the ITX Solution team.',
};

export default function BlogPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="max-w-3xl">
            <Caption className="tracking-widest text-primary mb-6">
              BLOG
            </Caption>
            <Heading1 className="mb-6 leading-tight">
              Ideas, insights, and technology.
            </Heading1>
            <BodyMedium className="text-foreground-muted max-w-2xl">
              Thoughts on technology, development, and building products
              that solve real problems.
            </BodyMedium>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <EmptyState
            title="Blog Coming Soon"
            description="We're preparing articles on technology, development practices, and industry insights. Check back soon."
          />
        </Container>
      </section>
    </>
  );
}
