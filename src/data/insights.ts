export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export const insights: Insight[] = [
  {
    slug: 'drone-mapping-project-planning',
    title: 'How Drone Mapping Supports Better Project Planning',
    excerpt:
      'Accurate aerial data captured early in a project lifecycle can inform better design decisions, reduce surprises during construction and improve budget accuracy.',
    category: 'Surveying',
    readTime: '5 min read',
    date: 'Coming Soon',
  },
  {
    slug: 'thermal-imaging-asset-inspection',
    title: 'Using Thermal Imaging for Asset Inspection',
    excerpt:
      'Thermal cameras mounted on drones reveal heat anomalies invisible to the naked eye — from faulty solar panels to overloaded electrical components.',
    category: 'Inspection',
    readTime: '4 min read',
    date: 'Coming Soon',
  },
  {
    slug: 'understanding-geospatial-outputs',
    title: 'Understanding Orthomosaics, Point Clouds and Terrain Models',
    excerpt:
      'A practical guide to the key geospatial outputs from drone surveys — what they are, how they differ and when to use each one.',
    category: 'Data Processing',
    readTime: '6 min read',
    date: 'Coming Soon',
  },
];
