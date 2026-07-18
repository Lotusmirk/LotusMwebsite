export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  icon: string; // Lucide icon name
  capabilities: string[];
  deliverables: string[];
  problems: string[];
  workflow: { step: string; description: string }[];
  applicableIndustries: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'drone-surveying-and-mapping',
    title: 'Drone Surveying & Mapping',
    shortDescription:
      'Capture high-resolution geospatial data faster and more safely than traditional ground surveys. Our drone-based surveying delivers centimetre-accurate outputs for planning, design and compliance.',
    heroDescription:
      'From topographic surveys to volumetric analysis, Lotusmirk provides precise aerial surveying that reduces field time and accelerates project decisions.',
    icon: 'Map',
    capabilities: [
      'GIS and topographic surveys',
      'Land boundary and cadastral surveys',
      'LiDAR-ready aerial capture',
      'Stockpile volumetric analysis',
      'Contour generation',
      'Construction progress monitoring',
      'Corridor mapping for roads and pipelines',
    ],
    deliverables: [
      'Orthomosaic maps',
      'Digital Elevation Models (DEM)',
      'Contour maps',
      'Volumetric reports',
      'GIS-ready datasets',
      'Progress comparison overlays',
    ],
    problems: [
      'Traditional ground surveys are slow and labour-intensive',
      'Difficult terrain limits access for survey teams',
      'Infrequent data capture delays decision-making',
      'Manual measurements introduce human error',
      'Large sites require costly equipment mobilisation',
    ],
    workflow: [
      { step: 'Site Assessment', description: 'Review the project area, output requirements and any access or airspace considerations.' },
      { step: 'Flight Planning', description: 'Design an optimised flight plan covering the target area with appropriate overlap and altitude settings.' },
      { step: 'Data Capture', description: 'Deploy survey-grade drones to capture high-resolution imagery and sensor data systematically.' },
      { step: 'Processing & Delivery', description: 'Process raw data into accurate, geo-referenced deliverables ready for your engineering or GIS workflows.' },
    ],
    applicableIndustries: ['Infrastructure & Construction', 'Mining', 'Agriculture', 'Real Estate', 'Transportation', 'Oil & Gas'],
    faqs: [
      {
        question: 'What accuracy can drone surveys achieve?',
        answer: 'Accuracy depends on equipment, ground control points and flight parameters. Typical drone surveys can achieve centimetre-level accuracy when properly planned and executed. We will discuss accuracy requirements specific to your project.',
      },
      {
        question: 'How long does a typical drone survey take?',
        answer: 'Field time varies by site size and complexity. Many sites that would take days with traditional methods can be captured in hours. Processing time depends on the deliverables required.',
      },
      {
        question: 'Do you provide ground control point surveys?',
        answer: 'Yes, we can establish ground control networks to ensure spatial accuracy. We can also work with your existing survey control.',
      },
    ],
  },
  {
    slug: 'aerial-inspection-and-analysis',
    title: 'Aerial Inspection & Analysis',
    shortDescription:
      'Inspect critical infrastructure and industrial assets safely from the air. Reduce downtime, avoid hazardous access and capture detailed visual and thermal data for informed maintenance decisions.',
    heroDescription:
      'Lotusmirk combines visual and thermal aerial inspection to identify defects, damage and anomalies across energy, transport and industrial assets — without scaffolding or shutdowns.',
    icon: 'ScanSearch',
    capabilities: [
      'Visual close-range inspection',
      'Thermal / infrared imaging',
      'Power line and transmission tower inspection',
      'Solar panel defect detection',
      'Wind turbine blade inspection',
      'Bridge and viaduct assessment',
      'Railway corridor monitoring',
      'Industrial facility inspection',
    ],
    deliverables: [
      'Annotated inspection reports',
      'Thermal analysis maps',
      'Defect catalogues with geo-location',
      'High-resolution imagery archives',
      'Comparative condition reports',
      'Maintenance priority recommendations',
    ],
    problems: [
      'Manual inspections require dangerous heights or confined spaces',
      'Scaffolding and rope access are expensive and time-consuming',
      'Asset downtime during inspection reduces productivity',
      'Infrequent inspections miss developing faults',
      'Lack of visual records makes tracking deterioration difficult',
    ],
    workflow: [
      { step: 'Asset Review', description: 'Understand the asset type, known concerns, inspection history and required outputs.' },
      { step: 'Mission Design', description: 'Plan flight paths, sensor selection and capture parameters tailored to the inspection objectives.' },
      { step: 'Aerial Inspection', description: 'Capture detailed visual and thermal data with appropriate drones and sensor payloads.' },
      { step: 'Analysis & Reporting', description: 'Analyse imagery, identify anomalies and deliver structured inspection reports with actionable findings.' },
    ],
    applicableIndustries: ['Renewable Energy', 'Utilities', 'Transportation', 'Infrastructure & Construction', 'Oil & Gas'],
    faqs: [
      {
        question: 'Can drones inspect energised power lines?',
        answer: 'Drones can inspect power infrastructure while maintaining safe operating distances. Specific protocols depend on voltage levels, local regulations and site conditions.',
      },
      {
        question: 'What sensors are used for inspections?',
        answer: 'We select sensors based on the inspection objective — high-resolution RGB cameras for visual defects, thermal cameras for heat anomalies, and specialised payloads where required. Sensor details can be discussed during project planning.',
      },
    ],
  },
  {
    slug: 'uav-data-processing',
    title: 'UAV Data Processing',
    shortDescription:
      'Transform raw aerial imagery into decision-ready geospatial outputs. Our processing pipeline delivers orthomosaics, point clouds, terrain models and 3D reconstructions with precision and speed.',
    heroDescription:
      'Raw drone data becomes valuable when it is processed with precision. Lotusmirk converts aerial captures into accurate, analysis-ready geospatial products that integrate with your existing workflows.',
    icon: 'Cpu',
    capabilities: [
      'Orthomosaic generation',
      'Dense point cloud creation',
      'Digital Elevation Model (DEM) processing',
      'Digital Terrain Model (DTM) extraction',
      'Digital Surface Model (DSM) creation',
      'Contour line generation',
      '3D mesh and model reconstruction',
      'Multi-temporal change detection',
    ],
    deliverables: [
      'Geo-referenced orthomosaics',
      'Classified point clouds',
      'DEM / DTM / DSM rasters',
      'Contour datasets',
      '3D textured models',
      'Volume calculation reports',
      'Change detection overlays',
    ],
    problems: [
      'In-house processing requires expensive software licences and hardware',
      'Untrained processing introduces errors and reduces data value',
      'Large datasets overwhelm standard computing resources',
      'Inconsistent processing methods prevent reliable comparisons over time',
    ],
    workflow: [
      { step: 'Data Ingestion', description: 'Receive and validate raw aerial imagery, flight logs and ground control data.' },
      { step: 'Quality Check', description: 'Verify image quality, overlap coverage and positional accuracy before processing.' },
      { step: 'Photogrammetric Processing', description: 'Run structured photogrammetry pipelines to generate the required geospatial outputs.' },
      { step: 'Quality Assurance & Delivery', description: 'Validate outputs against accuracy standards and deliver in your preferred formats and coordinate systems.' },
    ],
    applicableIndustries: ['Mining', 'Infrastructure & Construction', 'Agriculture', 'Real Estate', 'Transportation'],
    faqs: [
      {
        question: 'What file formats do you deliver?',
        answer: 'We can deliver in most standard geospatial formats including GeoTIFF, LAS/LAZ, DXF, SHP and KML. We will confirm the best formats for your workflow during project planning.',
      },
      {
        question: 'Can you process data captured by other operators?',
        answer: 'Yes, we can process third-party aerial data provided it meets quality and overlap requirements. We will review the data before confirming deliverables.',
      },
    ],
  },
  {
    slug: 'creative-aerial-content',
    title: 'Creative Aerial Content',
    shortDescription:
      'Elevate your visual storytelling with cinematic aerial photography and video. From construction progress documentation to corporate films, capture perspectives that set your brand apart.',
    heroDescription:
      'Lotusmirk produces stunning aerial visuals that communicate scale, progress and professionalism — for marketing, documentation and stakeholder communication.',
    icon: 'Camera',
    capabilities: [
      'Corporate and promotional aerial films',
      'Construction progress documentation',
      'Real-estate marketing imagery',
      'Event coverage from above',
      'Time-lapse aerial sequences',
      '360-degree panoramic captures',
      'Social media content creation',
    ],
    deliverables: [
      'Edited aerial video (4K/HD)',
      'High-resolution photography',
      'Time-lapse compilations',
      '360° panoramas',
      'Drone-assisted virtual tours',
      'Raw footage archives',
    ],
    problems: [
      'Ground-level photography cannot convey project scale',
      'Helicopter shoots are expensive and logistically complex',
      'Inconsistent documentation makes progress tracking difficult',
      'Generic stock footage lacks authenticity',
    ],
    workflow: [
      { step: 'Creative Brief', description: 'Discuss your objectives, brand guidelines, intended audience and usage requirements.' },
      { step: 'Location Planning', description: 'Scout the location, plan flight paths for the best angles and identify optimal lighting conditions.' },
      { step: 'Aerial Shoot', description: 'Capture cinematic footage and high-resolution stills using professional-grade camera drones.' },
      { step: 'Post-Production & Delivery', description: 'Edit, colour-grade and deliver final media in the formats and resolutions you need.' },
    ],
    applicableIndustries: ['Real Estate', 'Infrastructure & Construction', 'Renewable Energy', 'Agriculture'],
    faqs: [
      {
        question: 'What resolution do you shoot in?',
        answer: 'We typically capture in 4K or higher resolution. Specific camera and lens selection depends on the project requirements and will be discussed during the creative brief.',
      },
      {
        question: 'Can you fly indoors for events?',
        answer: 'Indoor flights require specific equipment and safety measures. We will assess feasibility based on the venue, event type and applicable regulations.',
      },
    ],
  },
];
