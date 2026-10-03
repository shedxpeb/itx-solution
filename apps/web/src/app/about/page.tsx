import { Container, Heading1, Heading2, BodyLarge, BodyMedium, Caption } from '@itx/ui';

export const metadata = {
  title: 'About ITX Solution',
  description: 'Learn about ITX Solution and our approach to building technology for modern businesses.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="max-w-3xl">
            <Caption className="tracking-widest text-primary mb-6">
              ABOUT ITX SOLUTION
            </Caption>
            <Heading1 className="mb-6 leading-tight">
              Technology built around real business needs.
            </Heading1>
            <BodyLarge className="text-foreground-muted">
              We partner with organizations to design, build, and scale technology
              that drives meaningful business outcomes.
            </BodyLarge>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading2 className="mb-8">What We Do</Heading2>
            <div className="space-y-12">
              <div>
                <h3 className="text-h5 font-semibold text-foreground mb-3">
                  Digital Products
                </h3>
                <BodyMedium className="text-foreground-muted">
                  We build web and mobile applications that serve real users
                  and solve actual problems.
                </BodyMedium>
              </div>
              <div>
                <h3 className="text-h5 font-semibold text-foreground mb-3">
                  Business Systems
                </h3>
                <BodyMedium className="text-foreground-muted">
                  We create enterprise-grade systems for operations, management,
                  and workflows that scale with your business.
                </BodyMedium>
              </div>
              <div>
                <h3 className="text-h5 font-semibold text-foreground mb-3">
                  Automation
                </h3>
                <BodyMedium className="text-foreground-muted">
                  We design and implement process automation and integrations
                  that streamline operations and reduce manual work.
                </BodyMedium>
              </div>
              <div>
                <h3 className="text-h5 font-semibold text-foreground mb-3">
                  Technology Expertise
                </h3>
                <BodyMedium className="text-foreground-muted">
                  We work with modern, proven technologies including Next.js,
                  NestJS, PostgreSQL, and cloud infrastructure to build
                  reliable, maintainable solutions.
                </BodyMedium>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
