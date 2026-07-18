export interface Project {
  slug: string;
  title: string;
  industry: string;
  location: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  outcome: string;
  isPlaceholder: true; // All projects are placeholders until real data is provided
}

export const projects: Project[] = [
  {
    slug: 'highway-corridor-survey',
    title: 'Highway Corridor Topographic Survey',
    industry: 'Transportation',
    location: '[Location to be confirmed]',
    challenge:
      'A regional highway project required detailed topographic data across a multi-kilometre corridor. Traditional ground surveys were projected to take several weeks and disrupt traffic flow.',
    approach:
      'Lotusmirk deployed survey-grade drones to capture high-resolution imagery along the full corridor over a series of planned flights, establishing ground control points for spatial accuracy.',
    deliverables: [
      'Geo-referenced orthomosaic of the full corridor',
      'Digital Elevation Model',
      'Contour maps at required intervals',
      'Cross-section profiles',
    ],
    outcome:
      '[Outcome to be confirmed — placeholder: Field capture was completed significantly faster than projected ground survey timelines, providing the engineering team with the spatial data needed to proceed with design.]',
    isPlaceholder: true,
  },
  {
    slug: 'solar-farm-thermal-inspection',
    title: 'Solar Farm Thermal Inspection',
    industry: 'Renewable Energy',
    location: '[Location to be confirmed]',
    challenge:
      'A solar energy operator needed to identify underperforming panels across a large installation. Manual panel-by-panel inspection was not feasible given the farm size and operational constraints.',
    approach:
      'Lotusmirk conducted a systematic thermal and visual aerial inspection across the entire solar farm, capturing panel-level thermal data for anomaly analysis.',
    deliverables: [
      'Panel-level thermal anomaly map',
      'Defect catalogue with severity classification',
      'High-resolution visual imagery archive',
      'Prioritised maintenance recommendations',
    ],
    outcome:
      '[Outcome to be confirmed — placeholder: The inspection identified multiple thermal anomalies including hotspots and string-level issues, enabling the operator to prioritise targeted maintenance.]',
    isPlaceholder: true,
  },
  {
    slug: 'mining-stockpile-volumetrics',
    title: 'Mining Site Stockpile Volumetric Survey',
    industry: 'Mining',
    location: '[Location to be confirmed]',
    challenge:
      'A mining operation required regular, accurate stockpile volume measurements for inventory reconciliation. Ground-based methods were slow, inconsistent and exposed surveyors to active site hazards.',
    approach:
      'Lotusmirk established a recurring drone survey programme to capture stockpile data at regular intervals, processing each dataset into accurate volumetric reports.',
    deliverables: [
      'Stockpile volume reports',
      'Surface models for each survey epoch',
      'Cut/fill analysis between surveys',
      'Orthomosaic site overview maps',
    ],
    outcome:
      '[Outcome to be confirmed — placeholder: The recurring survey programme provided consistent, comparable volume data that improved inventory accuracy and reduced surveyor time on the active site.]',
    isPlaceholder: true,
  },
];
