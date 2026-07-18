import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { Button } from '../ui/Button';

export function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-brand-black to-brand-navy" id="featured-projects">
      <div className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Featured Projects"
            title="Real challenges. Aerial solutions."
            description="See how Lotusmirk has helped clients across industries capture better data and make better decisions. These are placeholder case studies — real projects will be added as they are completed and approved."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                industry={project.industry}
                location={project.location}
                challenge={project.challenge}
                isPlaceholder={project.isPlaceholder}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Button to="/projects" variant="outline" showArrow>
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
