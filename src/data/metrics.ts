export interface Metric {
  label: string;
  value: string; // Use "XX" for placeholder values
  suffix: string;
  isPlaceholder: boolean;
}

export const metrics: Metric[] = [
  { label: 'Projects Completed', value: 'XX', suffix: '+', isPlaceholder: true },
  { label: 'Acres Surveyed', value: 'XX', suffix: '+', isPlaceholder: true },
  { label: 'Flight Hours', value: 'XX', suffix: '+', isPlaceholder: true },
  { label: 'Client Satisfaction', value: 'XX', suffix: '%', isPlaceholder: true },
];
