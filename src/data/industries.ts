export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  challenges: string[];
  relevantServices: string[];
  applications: string[];
  deliverables: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'transportation',
    title: 'Transportation',
    shortDescription:
      'Support road, rail and corridor projects with precise aerial data for planning, construction monitoring and asset management.',
    heroDescription:
      'From highway alignment surveys to railway corridor inspections, aerial data helps transportation teams plan more efficiently and maintain assets more safely.',
    icon: 'Route',
    challenges: [
      'Large-scale corridor surveys are time-consuming with traditional methods',
      'Traffic management during ground inspections disrupts operations',
      'Bridge and overpass inspections require expensive access equipment',
      'Progress tracking across long linear projects is difficult to coordinate',
    ],
    relevantServices: ['Drone Surveying & Mapping', 'Aerial Inspection & Analysis', 'UAV Data Processing'],
    applications: [
      'Highway and road corridor mapping',
      'Bridge and overpass condition assessment',
      'Railway track and infrastructure inspection',
      'Traffic flow analysis from aerial vantage',
      'Route planning and alignment studies',
      'Construction progress documentation',
    ],
    deliverables: ['Corridor orthomosaics', 'Bridge inspection reports', 'Terrain profiles', 'Progress comparison maps', 'Volumetric earthwork reports'],
    benefits: [
      'Reduced survey time across long corridors',
      'Safer inspections without lane closures',
      'Frequent progress updates for stakeholders',
      'Accurate earthwork volume calculations',
    ],
    faqs: [
      {
        question: 'Can drones operate near active traffic?',
        answer: 'Drone operations near active roads require careful planning and coordination with relevant authorities. We follow applicable safety protocols for each project.',
      },
    ],
  },
  {
    slug: 'renewable-energy',
    title: 'Renewable Energy',
    shortDescription:
      'Inspect solar arrays, wind turbines and energy infrastructure efficiently to maximise output and extend asset life.',
    heroDescription:
      'Aerial inspection and thermal imaging help renewable energy operators identify faults faster, reduce downtime and protect their investment across solar and wind assets.',
    icon: 'Sun',
    challenges: [
      'Solar panel defects reduce output without visible indicators',
      'Wind turbine blade inspection at height is dangerous and slow',
      'Large solar farms make manual inspection impractical',
      'Weather windows limit maintenance scheduling',
    ],
    relevantServices: ['Aerial Inspection & Analysis', 'Drone Surveying & Mapping', 'UAV Data Processing'],
    applications: [
      'Solar panel thermal inspection',
      'Wind turbine blade visual inspection',
      'Substation and electrical infrastructure assessment',
      'Site selection survey and terrain analysis',
      'Environmental impact area monitoring',
      'Vegetation encroachment detection',
    ],
    deliverables: ['Thermal defect maps', 'Blade condition reports', 'Site survey datasets', 'Panel-level anomaly catalogues', 'Vegetation analysis maps'],
    benefits: [
      'Faster defect identification across large installations',
      'Reduced need for manual climbing and rope access',
      'Data-driven maintenance scheduling',
      'Comprehensive visual records for warranty claims',
    ],
    faqs: [
      {
        question: 'How does thermal imaging detect solar panel faults?',
        answer: 'Malfunctioning cells and connections generate different thermal signatures compared to functioning panels. Thermal cameras capture these differences, enabling rapid identification of hotspots and underperforming areas.',
      },
    ],
  },
  {
    slug: 'mining',
    title: 'Mining',
    shortDescription:
      'Improve operational efficiency with regular aerial surveys for stockpile measurement, pit progression and site planning.',
    heroDescription:
      'Drone-based surveys give mining operations accurate, frequent spatial data for volume calculations, blast planning and environmental compliance — with less disruption than ground methods.',
    icon: 'Mountain',
    challenges: [
      'Manual stockpile measurement is slow and inconsistent',
      'Active mine sites present safety risks for ground surveyors',
      'Infrequent surveys delay volume reconciliation',
      'Environmental monitoring requires broad area coverage',
    ],
    relevantServices: ['Drone Surveying & Mapping', 'UAV Data Processing', 'Aerial Inspection & Analysis'],
    applications: [
      'Stockpile volume measurement',
      'Pit and bench progression monitoring',
      'Haul road and dump area surveys',
      'Blast planning support',
      'Environmental and rehabilitation monitoring',
      'Tailings dam inspection',
    ],
    deliverables: ['Volume reports', 'Progress surface models', 'Pit design overlays', 'Environmental monitoring maps', 'Orthomosaic time series'],
    benefits: [
      'More frequent and accurate volume data',
      'Reduced surveyor exposure to active operations',
      'Better reconciliation between planned and actual extraction',
      'Comprehensive visual records for compliance',
    ],
    faqs: [
      {
        question: 'How accurate are drone-based volume measurements?',
        answer: 'Accuracy depends on survey design, ground control and material characteristics. Well-planned drone surveys can achieve results comparable to traditional methods in many scenarios. We discuss accuracy requirements before each project.',
      },
    ],
  },
  {
    slug: 'utilities',
    title: 'Utilities',
    shortDescription:
      'Inspect and monitor power, water and telecommunications infrastructure across wide networks with efficient aerial operations.',
    heroDescription:
      'Utility companies manage vast networks of distributed assets. Aerial inspection and mapping helps identify issues earlier, plan maintenance better and maintain compliance across the network.',
    icon: 'Zap',
    challenges: [
      'Network assets span large and often remote areas',
      'Manual line patrols are expensive and slow',
      'Vegetation encroachment threatens service reliability',
      'Aging infrastructure requires more frequent condition assessment',
    ],
    relevantServices: ['Aerial Inspection & Analysis', 'Drone Surveying & Mapping', 'UAV Data Processing'],
    applications: [
      'Power line and pole inspection',
      'Vegetation clearance assessment',
      'Substation thermal surveys',
      'Water pipeline corridor mapping',
      'Telecommunications tower inspection',
      'Right-of-way monitoring',
    ],
    deliverables: ['Line inspection reports', 'Vegetation encroachment maps', 'Thermal analysis findings', 'Corridor survey datasets', 'Asset condition databases'],
    benefits: [
      'Faster coverage of large network areas',
      'Early detection of vegetation risks',
      'Reduced need for manual climbing',
      'Systematic, repeatable inspection data',
    ],
    faqs: [
      {
        question: 'Can drones inspect live electrical infrastructure?',
        answer: 'Drones can capture detailed data on electrical assets while maintaining safe standoff distances. Specific operating procedures follow applicable regulations and safety requirements.',
      },
    ],
  },
  {
    slug: 'infrastructure-and-construction',
    title: 'Infrastructure & Construction',
    shortDescription:
      'Track project progress, verify earthworks and create as-built records with regular aerial surveys throughout the construction lifecycle.',
    heroDescription:
      'Aerial data integrates seamlessly into construction workflows — from pre-construction surveys through to final as-built documentation, giving project teams the spatial intelligence they need.',
    icon: 'Building2',
    challenges: [
      'Manual progress tracking is subjective and inconsistent',
      'Earthwork volume verification relies on infrequent ground surveys',
      'Large sites make comprehensive visual oversight difficult',
      'Stakeholder communication needs clear visual evidence',
    ],
    relevantServices: ['Drone Surveying & Mapping', 'UAV Data Processing', 'Creative Aerial Content'],
    applications: [
      'Pre-construction topographic surveys',
      'Regular progress monitoring flights',
      'Cut and fill volume calculations',
      'As-built survey and documentation',
      'Site logistics and planning support',
      'Stakeholder progress reports with aerial media',
    ],
    deliverables: ['Progress orthomosaics', 'Volume change reports', 'Terrain models', 'Time-series comparisons', 'As-built survey data', 'Aerial progress videos'],
    benefits: [
      'Objective progress evidence for all stakeholders',
      'Faster earthwork volume verification',
      'Reduced surveyor time on active construction sites',
      'Comprehensive project visual archive',
    ],
    faqs: [
      {
        question: 'How frequently should we schedule progress flights?',
        answer: 'Frequency depends on the project phase and pace of change. Monthly flights are common, but some projects benefit from weekly or fortnightly captures during active earthwork phases.',
      },
    ],
  },
  {
    slug: 'agriculture',
    title: 'Agriculture',
    shortDescription:
      'Monitor crop health, map field conditions and support precision agriculture decisions with regular aerial data capture.',
    heroDescription:
      'Drone-based agricultural surveys provide farmers and agronomists with timely, field-level data to optimise inputs, detect problems early and improve yield outcomes.',
    icon: 'Wheat',
    challenges: [
      'Ground-level field inspection is labour-intensive and incomplete',
      'Crop stress may not be visible until damage is advanced',
      'Precision input application requires accurate field maps',
      'Large landholdings are difficult to monitor consistently',
    ],
    relevantServices: ['Drone Surveying & Mapping', 'UAV Data Processing', 'Aerial Inspection & Analysis'],
    applications: [
      'Crop health and vigour mapping',
      'Field boundary and area measurement',
      'Drainage and irrigation planning',
      'Soil and terrain analysis',
      'Pest and disease early detection',
      'Post-harvest residue assessment',
    ],
    deliverables: ['NDVI and vegetation index maps', 'Field boundary datasets', 'Terrain and drainage models', 'Crop variability reports', 'Multi-temporal comparison maps'],
    benefits: [
      'Early detection of crop stress and disease',
      'Accurate field measurement for input planning',
      'Timely data for faster agronomic decisions',
      'Reduced manual scouting effort',
    ],
    faqs: [
      {
        question: 'What types of crop analysis are possible with drones?',
        answer: 'Standard RGB cameras can assess general crop condition and identify visual anomalies. Multispectral sensors enable vegetation index analysis for more detailed health assessment. Sensor selection depends on your specific requirements.',
      },
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    shortDescription:
      'Showcase properties and developments with compelling aerial photography, site surveys and virtual perspectives that attract buyers and investors.',
    heroDescription:
      'Aerial content transforms property marketing with perspectives that ground photography cannot achieve. From site surveys to cinematic property videos, see real estate from its best angle.',
    icon: 'Home',
    challenges: [
      'Ground-level photos fail to convey location context and scale',
      'Pre-development site assessment needs accurate terrain data',
      'Buyers and investors expect professional visual presentation',
      'Large developments need comprehensive visual coverage',
    ],
    relevantServices: ['Creative Aerial Content', 'Drone Surveying & Mapping', 'UAV Data Processing'],
    applications: [
      'Property marketing photography and video',
      'Pre-development topographic survey',
      'Construction progress for investor updates',
      '360-degree site panoramas',
      'Neighbourhood and amenity context shots',
      'Land subdivision planning support',
    ],
    deliverables: ['Marketing-grade aerial photos', 'Cinematic property videos', 'Site survey data', '360° panoramas', 'Virtual tour assets', 'Construction progress media'],
    benefits: [
      'Higher engagement in property listings',
      'Accurate site data for planning applications',
      'Professional investor communication materials',
      'Comprehensive visual development records',
    ],
    faqs: [
      {
        question: 'Can you fly in urban residential areas?',
        answer: 'Urban flight operations are subject to local regulations and airspace rules. We assess feasibility for each location and obtain necessary permissions before operating.',
      },
    ],
  },
  {
    slug: 'oil-and-gas',
    title: 'Oil & Gas',
    shortDescription:
      'Monitor pipelines, inspect facilities and survey sites with aerial operations that reduce personnel exposure and improve data coverage.',
    heroDescription:
      'The oil and gas sector demands rigorous safety, environmental compliance and operational efficiency. Aerial technology helps meet these requirements with less risk and better data.',
    icon: 'Flame',
    challenges: [
      'Pipeline routes cross remote and difficult terrain',
      'Facility inspections in hazardous zones risk personnel safety',
      'Regulatory compliance requires comprehensive documentation',
      'Leak detection and environmental monitoring need broad coverage',
    ],
    relevantServices: ['Aerial Inspection & Analysis', 'Drone Surveying & Mapping', 'UAV Data Processing'],
    applications: [
      'Pipeline corridor inspection and monitoring',
      'Facility and equipment inspection',
      'Flare stack and elevated structure assessment',
      'Environmental baseline surveys',
      'Spill and leak detection support',
      'Construction and integrity monitoring',
    ],
    deliverables: ['Pipeline condition reports', 'Facility inspection records', 'Thermal survey findings', 'Corridor mapping datasets', 'Environmental monitoring overlays'],
    benefits: [
      'Reduced personnel exposure to hazardous environments',
      'Faster pipeline corridor coverage',
      'Systematic inspection documentation',
      'Support for regulatory compliance requirements',
    ],
    faqs: [
      {
        question: 'Can drones operate in hazardous zones?',
        answer: 'Operating in classified hazardous areas requires specific equipment ratings and operational procedures. We assess site requirements and applicable standards during project planning.',
      },
    ],
  },
];
