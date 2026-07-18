import { SectionHeading } from '../ui/SectionHeading';
import { InsightCard } from '../ui/InsightCard';
import { insights } from '../../data/insights';

export function Insights() {
  return (
    <section className="py-24 lg:py-32 bg-brand-black" id="insights">
      <div className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Insights"
            title="Knowledge that helps you plan better."
            description="Practical perspectives on drone technology, aerial data and how to get the most from your projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {insights.map((insight, index) => (
              <InsightCard key={insight.slug} {...insight} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
