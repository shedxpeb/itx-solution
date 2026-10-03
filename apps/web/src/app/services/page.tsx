import { Container, Heading1, Heading2, BodyMedium, Card, Heading4, Caption } from '@itx/ui';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
  },
  {
    title: 'Business Systems',
    description: 'Enterprise-grade systems for operations, management, and workflows.',
  },
  {
    title: 'Automation',
    description: 'Process automation and integration to streamline business operations.',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture and deployment solutions.',
  },
  {
    title: 'Digital Strategy',
    description: 'Strategic planning for digital transformation and growth.',
  },
];

export const metadata = {
  title: 'Services - ITX Solution',
  description: 'Our comprehensive technology services including web development, mobile apps, business systems, and automation.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="max-w-3xl">
            <Caption className="tracking-widest text-primary mb-6">
              SERVICES
            </Caption>
            <Heading1 className="mb-6 leading-tight">
              Comprehensive technology services.
            </Heading1>
            <BodyMedium className="text-foreground-muted max-w-2xl">
              We offer end-to-end technology services to support your business
              goals from strategy to implementation.
            </BodyMedium>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={service.title} variant="elevated" className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-h4 font-bold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <Heading4 className="mb-2">{service.title}</Heading4>
                    <BodyMedium className="text-foreground-muted">
                      {service.description}
                    </BodyMedium>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
