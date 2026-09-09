import { PHOTOS } from './photos'

export const PRODUCTS = [
  {
    id: 'mdf-shutters',
    name: 'MDF Shutters',
    eyebrow: 'Core range',
    summary:
      'Precision-cut medium density fibreboard shutters with paint-ready surfaces for kitchens, wardrobes and furniture programmes.',
    description:
      'Our MDF shutter line is built for designers and OEM manufacturers who need consistent thickness, clean CNC profiles and a surface that accepts PU, laminate or foil without telegraphing. Every panel is calibrated, edge-finished and inspected before dispatch.',
    points: [
      'Calibrated boards with tight thickness tolerance',
      'Paint-grade and laminate-ready faces',
      'Custom sizes, grooves, fluting and designer edges',
      'Ideal for wardrobes, TV units and dry-area kitchens',
    ],
    applications: ['Wardrobes', 'TV units', 'Bedroom furniture', 'Office interiors'],
    image: PHOTOS.fabricLined,
    imageAlt: 'Fabric-lined PU finished wardrobe doors manufactured by Aristocraft',
  },
  {
    id: 'hdhmr-shutters',
    name: 'HDHMR Shutters',
    eyebrow: 'Moisture-resistant',
    summary:
      'High-density, high-moisture-resistant shutters specified for kitchens, utility rooms and high-traffic modular programmes.',
    description:
      'HDHMR is the workhorse of Indian modular kitchens. Aristocraft supplies dense, screw-holding shutters that stay stable around sinks, dishwashers and coastal humidity — with the same finishing discipline as our decorative ranges.',
    points: [
      'Superior screw holding for hinges and handles',
      'Moisture and termite-resistant core options',
      'Engineered for modular kitchen OEM volumes',
      'Compatible with PU, acrylic and laminate faces',
    ],
    applications: ['Modular kitchens', 'Utility rooms', 'Coastal projects', 'Hospitality F&B'],
    image: PHOTOS.flutedHdhmr,
    imageAlt: 'Fluted PU lacquer wardrobe doors on custom designed HDHMR panels',
  },
  {
    id: 'acrylic-shutters',
    name: 'Acrylic Shutters',
    eyebrow: 'High gloss',
    summary:
      'Mirror-bright and silk-matte acrylic shutters with colour-matched edges for contemporary kitchens and retail interiors.',
    description:
      'Acrylic faces demand perfect substrate prep and edge work. We bond, trim and polish high-gloss and matte acrylics so reflections stay true and joints stay invisible — the finish architects expect on camera-ready kitchens.',
    points: [
      'High-gloss and matte acrylic systems',
      'Colour-matched ABS / acrylic edge finishing',
      'UV-stable colourways for sunlit elevations',
      'Handle-less and gola-profile compatible',
    ],
    applications: ['Designer kitchens', 'Retail displays', 'Feature walls', 'Vanity units'],
    image: PHOTOS.rattanPu,
    imageAlt: 'Premium PU finished rattan-inserted shutters manufactured by Aristocraft',
  },
  {
    id: 'glass-shutters',
    name: 'Glass Shutters',
    eyebrow: 'Framed & frameless',
    summary:
      'Aluminium-framed and glass-panel shutters in frosted, tinted, fluted and lacquered glass for display and contemporary kitchens.',
    description:
      'Glass shutters need millimetre-accurate framing and safe handling. Aristocraft fabricates slim aluminium profiles with toughened, lacquered or reeded glass — including matching cornice and filler panels for a complete run.',
    points: [
      'Toughened, frosted, tinted and lacquered glass',
      'Slim aluminium frames in anodised and powder coats',
      'Fluted and reeded designer glass options',
      'Display, pantry and upper-cabinet applications',
    ],
    applications: ['Display kitchens', 'Pantry cabinets', 'Bar units', 'Showrooms'],
    image: PHOTOS.frenchGlass,
    imageAlt: 'French glass kitchen shutters with PU lacquer frames by Aristocraft',
  },
  {
    id: 'cornices',
    name: 'Cornices',
    eyebrow: 'Architectural profiles',
    summary:
      'Matching cornices, pelmets and filler profiles finished to the same shutter specification for a complete kitchen or wardrobe elevation.',
    description:
      'A shutter run is only as premium as its top line. We mill and finish cornices, light pelmets and fillers in MDF or HDHMR, then coat them in the same PU or acrylic system so the elevation reads as one piece of architecture.',
    points: [
      'Classic, stepped and contemporary profiles',
      'Finish-matched to shutter batches',
      'LED pelmet and gola-ready sections',
      'Site-cut lengths with labelled packing',
    ],
    applications: ['Kitchen crowns', 'Wardrobe toppers', 'Ceiling transitions', 'Feature pelmets'],
    image: PHOTOS.louvre,
    imageAlt: 'French Louvre Shutters with PU painting and CNC lattice at the Aristocraft works',
  },
  {
    id: 'cnc-designs',
    name: 'CNC Designs',
    eyebrow: 'Routed & fluted',
    summary:
      'In-house CNC machining for fluted, jali, grooved and designer shutter faces from architect drawings or our pattern library.',
    description:
      'Patterned shutters are where manufacturing skill shows. Our CNC cell cuts consistent flutes, geometric jali, shaker recesses and custom designer grooves — then we sand and coat so the profile remains sharp after painting.',
    points: [
      'Fluted, slatted, jali and shaker programmes',
      'Repeatable batch machining from CAD files',
      'Designer collaboration on exclusive profiles',
      'Paint-grade prep after routing',
    ],
    applications: ['Feature shutters', 'Wardrobe fronts', 'Reception desks', 'Boutique interiors'],
    image: PHOTOS.flutedHdhmr,
    imageAlt: 'CNC-routed fluted HDHMR wardrobe doors with PU lacquer finish',
  },
  {
    id: 'pu-paint-finishes',
    name: 'PU Paint Finishes',
    eyebrow: 'Surface coating',
    summary:
      'Industrial polyurethane spraying in high-gloss, satin, matt and metallic systems with colour matching for large project batches.',
    description:
      'Surface coating is an Aristocraft core competence. Dedicated booths, controlled coats and curing deliver PU finishes that hold colour across hundreds of shutters — including crisis colour-matching when a site specification changes mid-project.',
    points: [
      'Multi-coat PU: primer, build, colour, clear',
      'High-gloss, silk, matt and metallic options',
      'Architect RAL / NCS / fan-deck matching',
      'Touch-up kits supplied with project lots',
    ],
    applications: ['Painted kitchens', 'Luxury wardrobes', 'Hotel FF&E', 'Statement furniture'],
    image: PHOTOS.fabricLined,
    imageAlt: 'PU lacquer finished wardrobe doors from the Aristocraft works',
  },
  {
    id: 'custom-projects',
    name: 'Custom Projects',
    eyebrow: 'OEM & bespoke',
    summary:
      'Bespoke manufacturing for architects, developers and kitchen brands — including urgent replacements and specification-critical lots.',
    description:
      'Not every elevation fits a catalogue. We take drawings, samples and site constraints and return a manufacturable shutter package: mixed materials, special radii, oversized panels and sequenced delivery for fit-out programmes.',
    points: [
      'Drawing-to-dispatch project management',
      'Mixed-material elevations under one PO',
      'Crisis and replacement manufacturing',
      'Labelled, sequenced packing for site teams',
    ],
    applications: ['Developer towers', 'Boutique hotels', 'OEM kitchen brands', 'Heritage restorations'],
    image: PHOTOS.kidShelf,
    imageAlt: 'Custom PU-finished bedside shelf fabricated by Aristocraft',
  },
]

export const FEATURED_PRODUCTS = PRODUCTS.filter((item) =>
  ['hdhmr-shutters', 'glass-shutters', 'mdf-shutters', 'custom-projects'].includes(item.id),
)
