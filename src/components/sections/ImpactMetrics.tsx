import { AnimatedCounter } from '../ui/AnimatedCounter';
import { metrics } from '../../data/metrics';

export function ImpactMetrics() {
  return (
    <section className="py-20 lg:py-28 bg-brand-black relative overflow-hidden" id="impact-metrics">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/3 via-transparent to-brand-cyan/3" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

      <div className="section-padding relative z-10">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              Our Impact
            </span>
            <p className="text-sm text-brand-grey">
              Statistics will be updated once confirmed. All figures shown are placeholders.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((metric) => (
              <AnimatedCounter
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                isPlaceholder={metric.isPlaceholder}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
