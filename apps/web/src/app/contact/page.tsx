import { Container, Heading1, BodyMedium, Caption, Button } from '@itx/ui';
import { ctaConfig } from '@itx/config';

export const metadata = {
  title: 'Contact - ITX Solution',
  description: 'Get in touch with ITX Solution to discuss your project.',
};

export default function ContactPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="max-w-3xl">
            <Caption className="tracking-widest text-primary mb-6">
              CONTACT
            </Caption>
            <Heading1 className="mb-6 leading-tight">
              Let&apos;s build something meaningful.
            </Heading1>
            <BodyMedium className="text-foreground-muted max-w-2xl mb-8">
              Tell us about your project and we&apos;ll get back to you to discuss
              how we can help.
            </BodyMedium>
            {!ctaConfig.footer.disabled ? (
              <Button variant="primary" size="large">
                Start a Conversation
              </Button>
            ) : (
              <Button variant="primary" size="large" disabled>
                Contact Form Coming Soon
              </Button>
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-h5 font-semibold text-foreground mb-4">
              Get in Touch
            </h2>
            <BodyMedium className="text-foreground-muted mb-8">
              Our contact form is currently being prepared. In the meantime,
              feel free to reach out through other channels.
            </BodyMedium>
            <div className="space-y-4">
              <div>
                <h3 className="text-body-medium font-medium text-foreground mb-1">
                  Email
                </h3>
                <BodyMedium className="text-foreground-muted">
                  Contact information coming soon
                </BodyMedium>
              </div>
              <div>
                <h3 className="text-body-medium font-medium text-foreground mb-1">
                  Location
                </h3>
                <BodyMedium className="text-foreground-muted">
                  Location information coming soon
                </BodyMedium>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
