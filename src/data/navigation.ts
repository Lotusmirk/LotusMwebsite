export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Drone Surveying & Mapping', href: '/services/drone-surveying-and-mapping' },
      { label: 'Aerial Inspection & Analysis', href: '/services/aerial-inspection-and-analysis' },
      { label: 'UAV Data Processing', href: '/services/uav-data-processing' },
      { label: 'Creative Aerial Content', href: '/services/creative-aerial-content' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Transportation', href: '/industries/transportation' },
      { label: 'Renewable Energy', href: '/industries/renewable-energy' },
      { label: 'Mining', href: '/industries/mining' },
      { label: 'Utilities', href: '/industries/utilities' },
      { label: 'Infrastructure & Construction', href: '/industries/infrastructure-and-construction' },
      { label: 'Agriculture', href: '/industries/agriculture' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Oil & Gas', href: '/industries/oil-and-gas' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
