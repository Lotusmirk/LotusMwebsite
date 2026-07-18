import { SectionHeading } from '../ui/SectionHeading';
import { ProcessStep } from '../ui/ProcessStep';

const steps = [
  {
    title: 'Discover',
    description:
      'We begin by understanding your project — the site, objectives, deliverables, timeline and any specific constraints. Every mission starts with clarity.',
  },
  {
    title: 'Plan',
    description:
      'Our team designs the operation according to site conditions, output requirements, equipment selection and applicable permissions. Nothing is left to chance.',
  },
  {
    title: 'Capture',
    description:
      'Professional pilots execute the flight plan systematically, capturing high-quality data with the right sensors for the job.',
  },
  {
    title: 'Analyse & Deliver',
    description:
      'Raw data is processed, quality-checked and delivered as decision-ready outputs — in the formats and coordinate systems your team needs.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-brand-navy to-brand-black" id="how-it-works">
      <div className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — heading */}
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                label="Our Process"
                title="How Lotusmirk Works"
                description="Every mission follows a structured workflow designed for accuracy, safety and efficiency. From first conversation to final deliverable."
                align="left"
              />

              {/* Visual placeholder */}
              <div className="hidden lg:flex mt-8 h-64 rounded-2xl bg-gradient-to-br from-brand-slate/50 to-brand-navy/50 border border-white/5 items-center justify-center">
                <p className="text-sm text-brand-grey">Process visual placeholder</p>
              </div>
            </div>

            {/* Right — steps */}
            <div>
              {steps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
