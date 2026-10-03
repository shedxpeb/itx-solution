'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { NavLink } from '@itx/ui';
import { ProjectListItem } from '@/types/api/projects';
import Image from 'next/image';

interface ProjectOrbitProps {
  projects: ProjectListItem[];
}

export function ProjectOrbit({ projects }: ProjectOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const activeProjectRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!shouldAnimate() || !containerRef.current || projects.length === 0) return;

    const container = containerRef.current;
    const orbit = orbitRef.current;
    const activeProject = activeProjectRef.current;
    const markers = markersRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Auto-rotation timeline
      const rotationTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        onRepeat: () => {
          if (!isPaused) {
            setActiveIndex((prev) => (prev + 1) % projects.length);
          }
        },
      });

      // Slow rotation - one complete cycle every 22 seconds
      rotationTl.to({}, { duration: 22 });

      // Mouse parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        if (!orbit) return;
        
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;

        gsap.to(orbit, {
          x,
          y,
          duration: 0.6,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, container);

    return () => ctx.revert();
  }, [projects.length, isPaused]);

  // Update active project
  useEffect(() => {
    if (!shouldAnimate()) return;

    const activeProject = activeProjectRef.current;
    if (activeProject) {
      gsap.fromTo(
        activeProject,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  const handleMarkerHover = (index: number) => {
    setIsPaused(true);
    setActiveIndex(index);
  };

  const handleMarkerLeave = () => {
    setIsPaused(false);
  };

  const getProjectImage = (project: ProjectListItem) => {
    if (project.coverImage) return project.coverImage;
    
    // Fallback to local project image if exists
    const slugToDir: Record<string, string> = {
      'shedxpeb': 'shedxpeb',
      'proxsteelhub': 'proxsteelhub',
      'buildxcrm': 'buildxcrm',
      'purchase': 'purchasee',
      'task-management': 'task-management',
    };
    
    const dir = slugToDir[project.slug];
    if (dir) {
      return `/projects/${dir}/cover.webp`;
    }
    
    return null;
  };

  const activeProject = projects[activeIndex];

  const handlePrev = () => {
    if (projects.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    if (projects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  if (projects.length === 0) {
    return (
      <div className="relative py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-h5 font-semibold text-primary tracking-widest mb-4">
              SELECTED WORK
            </h2>
            <h3 className="text-h2 md:text-h1 font-bold mb-6">
              Systems built for real operational problems
            </h3>
            <p className="text-body-large text-foreground-muted max-w-2xl mx-auto">
              A selection of platforms and systems we are building for businesses that need more than an off-the-shelf solution.
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-body-medium text-foreground-muted mb-8">
              Projects are being updated. Check back soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h5 font-semibold text-primary tracking-widest mb-4">
            SELECTED WORK
          </h2>
          <h3 className="text-h2 md:text-h1 font-bold mb-6">
            Systems built for real operational problems
          </h3>
          <p className="text-body-large text-foreground-muted max-w-2xl mx-auto">
            A selection of platforms and systems we are building for businesses that need more than an off-the-shelf solution.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Mobile Project Card */}
            <div
              ref={activeProjectRef}
              className="bg-background border border-border rounded-2xl overflow-hidden"
            >
              {activeProject && (
                <>
                  {/* Project Image */}
                  <div className="aspect-video bg-background-dark/5 relative overflow-hidden">
                    {getProjectImage(activeProject) ? (
                      <Image
                        src={getProjectImage(activeProject)!}
                        alt={activeProject.title}
                        fill
                        sizes="(min-width: 1280px) 800px, (min-width: 768px) 600px, 100vw"
                        className="object-cover"
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

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-caption text-primary tracking-widest">
                        {String(activeIndex + 1).padStart(2, '0')} / {(activeProject.industry || 'PROJECT').toUpperCase()}
                      </span>
                    </div>
                    <h4 className="text-h4 font-bold mb-3">
                      {activeProject.title}
                    </h4>
                    <p className="text-body-medium text-foreground-muted mb-6 line-clamp-3">
                      {activeProject.shortDescription}
                    </p>
                    <NavLink
                      href={`/projects/${activeProject.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                      data-cursor="link"
                    >
                      View Project →
                    </NavLink>
                  </div>
                </>
              )}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Indicators */}
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-primary' : 'bg-primary/20'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors"
                aria-label="Next project"
              >
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Project Orbit */}
        <div className="hidden lg:block relative h-[600px] md:h-[700px]">
          <div
            ref={orbitRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Orbital Track */}
            <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full border border-primary/10" />
            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-primary/5" />

            {/* Project Markers */}
            {projects.map((project, index) => {
              const angle = (index / projects.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = index === activeIndex;

              return (
                <div
                  key={project.id}
                  ref={(el) => { markersRef.current[index] = el; }}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  }}
                  onMouseEnter={() => handleMarkerHover(index)}
                  onMouseLeave={handleMarkerLeave}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'border-primary bg-primary/10 scale-110'
                        : 'border-primary/20 bg-background hover:border-primary/40'
                    }`}
                  >
                    <span className="text-sm font-semibold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Active Project Preview */}
            <div
              ref={activeProjectRef}
              className="relative w-[400px] md:w-[500px] bg-background border border-border rounded-3xl overflow-hidden shadow-2xl"
            >
              {activeProject && (
                <>
                  {/* Project Image */}
                  <div className="aspect-video bg-background-dark/5 relative overflow-hidden">
                    {getProjectImage(activeProject) ? (
                      <Image
                        src={getProjectImage(activeProject)!}
                        alt={activeProject.title}
                        fill
                        sizes="(min-width: 1280px) 800px, (min-width: 768px) 600px, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-primary/5 rounded-lg border border-primary/10 backdrop-blur-sm">
                          <div className="p-8 space-y-4">
                            <div className="h-3 w-1/3 bg-primary/20 rounded" />
                            <div className="space-y-2">
                              <div className="h-2 w-full bg-primary/10 rounded" />
                              <div className="h-2 w-2/3 bg-primary/10 rounded" />
                              <div className="h-2 w-1/2 bg-primary/10 rounded" />
                            </div>
                            <div className="grid grid-cols-3 gap-3 mt-6">
                              <div className="h-16 bg-primary/10 rounded" />
                              <div className="h-16 bg-primary/10 rounded" />
                              <div className="h-16 bg-primary/10 rounded" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-caption text-primary tracking-widest">
                        {String(activeIndex + 1).padStart(2, '0')} / {(activeProject.industry || 'PROJECT').toUpperCase()}
                      </span>
                    </div>
                    <h4 className="text-h3 font-bold mb-4">
                      {activeProject.title}
                    </h4>
                    <p className="text-body-medium text-foreground-muted mb-6 line-clamp-3">
                      {activeProject.shortDescription}
                    </p>
                    <NavLink
                      href={`/projects/${activeProject.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                      data-cursor="link"
                    >
                      View Project →
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <NavLink
            href="/projects"
            className="inline-flex items-center gap-2 text-body-large text-primary hover:text-primary-dark transition-colors font-semibold"
            data-cursor="link"
          >
            View All Work →
          </NavLink>
        </div>
      </div>
    </div>
  );
}
