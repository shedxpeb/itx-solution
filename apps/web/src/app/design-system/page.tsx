import {
  Button,
  Heading1,
  Heading2,
  Heading3,
  BodyMedium,
  Card,
  CardHeader,
  CardContent,
  Badge,
  Container,
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Input,
  Textarea,
  Skeleton,
  EmptyState,
  NavLink,
  Media,
} from '@itx/ui';

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Section>
        <Container>
          <Heading1>Design System</Heading1>
          <BodyMedium className="mt-4">
            ITX Solution visual foundation and component library.
          </BodyMedium>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader>
            <SectionTitle>Typography</SectionTitle>
            <SectionDescription>
              Type scale and hierarchy examples
            </SectionDescription>
          </SectionHeader>

          <div className="space-y-6">
            <div>
              <Heading2>Heading 2</Heading2>
              <Heading3>Heading 3</Heading3>
              <BodyMedium>Body Medium - Standard text content</BodyMedium>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Buttons</SectionTitle>
            <SectionDescription>
              Button variants and sizes
            </SectionDescription>
          </SectionHeader>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader>
            <SectionTitle>Cards</SectionTitle>
            <SectionDescription>
              Card variants and composition
            </SectionDescription>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader>
                <Heading3>Default Card</Heading3>
              </CardHeader>
              <CardContent>
                <BodyMedium>Standard card with border</BodyMedium>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <Heading3>Elevated Card</Heading3>
              </CardHeader>
              <CardContent>
                <BodyMedium>Card with shadow for depth</BodyMedium>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <Heading3>Outlined Card</Heading3>
              </CardHeader>
              <CardContent>
                <BodyMedium>Card with thick border</BodyMedium>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Badges</SectionTitle>
            <SectionDescription>
              Status and category badges
            </SectionDescription>
          </SectionHeader>

          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader>
            <SectionTitle>Media</SectionTitle>
            <SectionDescription>
              Image component with aspect ratios
            </SectionDescription>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Media
              src="https://via.placeholder.com/400x400/4099D5/FFFFFF?text=Square"
              alt="Square"
              aspectRatio="square"
              variant="rounded"
            />
            <Media
              src="https://via.placeholder.com/400x533/4099D5/FFFFFF?text=Portrait"
              alt="Portrait"
              aspectRatio="portrait"
              variant="rounded"
            />
            <Media
              src="https://via.placeholder.com/400x225/4099D5/FFFFFF?text=Landscape"
              alt="Landscape"
              aspectRatio="landscape"
              variant="rounded"
            />
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader>
            <SectionTitle>Form Elements</SectionTitle>
            <SectionDescription>
              Input and textarea components
            </SectionDescription>
          </SectionHeader>

          <div className="space-y-4 max-w-md">
            <Input placeholder="Text input" />
            <Input placeholder="Error state" error />
            <Textarea placeholder="Textarea input" rows={4} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Loading & Empty States</SectionTitle>
            <SectionDescription>
              Feedback components
            </SectionDescription>
          </SectionHeader>

          <div className="space-y-6">
            <div>
              <Heading3>Skeleton</Heading3>
              <div className="space-y-2 mt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>

            <div>
              <Heading3>Empty State</Heading3>
              <EmptyState
                title="No data found"
                description="There are no items to display at this time."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader>
            <SectionTitle>Links</SectionTitle>
            <SectionDescription>
              Navigation and text links
            </SectionDescription>
          </SectionHeader>

          <div className="flex flex-wrap gap-4">
            <NavLink href="/">Home Link</NavLink>
            <NavLink href="/" variant="primary">Primary Link</NavLink>
            <NavLink href="/" variant="muted">Muted Link</NavLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
