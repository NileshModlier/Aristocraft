import { PHOTOS } from './photos'

/**
 * Project photography lives in public/images/.
 * To populate a placeholder, set `images` to one or more files:
 * { src: '/images/your-project.jpg', alt: 'Short description', width: 1600, height: 1200 }
 * Leave `images` empty to keep the on-page photography slots.
 */

export const PROJECT_SECTIONS = [
  {
    id: 'residential-interiors',
    name: 'Residential Interiors',
    eyebrow: 'Homes',
    copy: 'Full elevations for private residences — shutters, panelling and fitted furniture finished as one sequence.',
    projects: [
      {
        id: 'louvre-residence',
        title: 'Louvre shutter residence',
        material: 'MDF / HDHMR',
        finish: 'PU painting, custom shade',
        design: 'Louvre with CNC lattice companion panel',
        images: [
          {
            src: PHOTOS.louvre,
            alt: 'French Louvre Shutters with PU painting by Aristocraft',
            width: 1280,
            height: 960,
          },
        ],
      },
      {
        id: 'rattan-living-elevation',
        title: 'Rattan living elevation',
        material: 'MDF with rattan sandwich insert',
        finish: 'Superior PU lacquer',
        design: 'Rattan-inserted shutters, built-in handles',
        images: [
          {
            src: PHOTOS.rattanPu,
            alt: 'Rattan inserted PU shutters manufactured by Aristocraft',
            width: 1280,
            height: 720,
          },
        ],
      },
      {
        id: 'bedroom-suite-placeholder',
        title: 'Master bedroom suite',
        material: 'HDHMR',
        finish: 'PU matt, colour-matched',
        design: 'Flush + CNC feature panels',
        images: [],
      },
    ],
  },
  {
    id: 'wardrobes',
    name: 'Wardrobes',
    eyebrow: 'Storage',
    copy: 'Wardrobe doors designed, fabricated and coated in-house — from fluted HDHMR to rattan and fabric-lined faces.',
    projects: [
      {
        id: 'fluted-hdhmr-wardrobe',
        title: 'Fluted HDHMR wardrobe',
        material: 'HDHMR',
        finish: 'PU lacquer, high-gloss',
        design: 'CNC-routed fluted arches with dressing niche',
        images: [
          {
            src: PHOTOS.flutedHdhmr,
            alt: 'Fluted HDHMR wardrobe doors with PU lacquer finish',
            width: 1280,
            height: 721,
          },
        ],
      },
      {
        id: 'fabric-lined-wardrobe',
        title: 'Fabric-lined wardrobe doors',
        material: 'MDF',
        finish: 'Premium PU lacquers, specified shade',
        design: 'Fabric-lined door faces, full in-house build',
        images: [
          {
            src: PHOTOS.fabricLined,
            alt: 'Fabric-lined PU finished wardrobe doors by Aristocraft',
            width: 600,
            height: 800,
          },
        ],
      },
      {
        id: 'rattan-wardrobe',
        title: 'Rattan wardrobe doors',
        material: 'MDF with rattan insert',
        finish: 'PU lacquers',
        design: 'Rattan-inserted doors with built-in handle provisions',
        images: [
          {
            src: PHOTOS.rattanWardrobe,
            alt: 'Rattan wardrobe doors with built-in handle provisions',
            width: 600,
            height: 800,
          },
        ],
      },
    ],
  },
  {
    id: 'modular-kitchens',
    name: 'Modular Kitchens',
    eyebrow: 'Kitchens',
    copy: 'OEM and drawing-based kitchen lots — glass, PU, acrylic and HDHMR programmes with labelled elevations.',
    projects: [
      {
        id: 'french-glass-kitchen',
        title: 'French glass kitchen shutters',
        material: 'Extra-clear and fluted glass',
        finish: 'PU lacquer frames, custom shades',
        design: 'CNC-routed arch mullions, mixed glass',
        images: [
          {
            src: PHOTOS.frenchGlass,
            alt: 'French glass kitchen shutters with PU lacquer by Aristocraft',
            width: 1280,
            height: 960,
          },
        ],
      },
      {
        id: 'pu-kitchen-lot-placeholder',
        title: 'Colour-matched PU kitchen lot',
        material: 'HDHMR',
        finish: 'PU high-gloss, RAL / sample match',
        design: 'Handle-less modular elevations',
        images: [],
      },
      {
        id: 'acrylic-kitchen-placeholder',
        title: 'Acrylic kitchen programme',
        material: 'MDF with acrylic face',
        finish: 'High-gloss acrylic, colour-matched edges',
        design: 'Gola-profile, camera-ready kitchen run',
        images: [],
      },
    ],
  },
  {
    id: 'tv-units',
    name: 'TV Units',
    eyebrow: 'Living',
    copy: 'Feature walls and media units with the same CNC, surface-prep and PU discipline as the shutter line.',
    projects: [
      {
        id: 'fluted-tv-wall-placeholder',
        title: 'Fluted TV feature wall',
        material: 'HDHMR',
        finish: 'PU matt / specified sheen',
        design: 'CNC fluted panelling with equipment voids',
        images: [],
      },
      {
        id: 'glass-display-tv-placeholder',
        title: 'Glass display TV unit',
        material: 'Aluminium frame with toughened glass',
        finish: 'PU / powder-coat frame, lacquered glass',
        design: 'Display bays with fluted glass doors',
        images: [],
      },
      {
        id: 'lowboard-placeholder',
        title: 'Lowboard with rattan doors',
        material: 'MDF with rattan sandwich',
        finish: 'PU lacquer',
        design: 'Low media unit, rattan inserts, BIH',
        images: [],
      },
    ],
  },
  {
    id: 'luxury-furniture',
    name: 'Luxury Furniture',
    eyebrow: 'Pieces',
    copy: 'Vanities, tables, wine racks and free-standing furniture — fabricated and finished under one roof.',
    projects: [
      {
        id: 'childrens-bedside',
        title: 'Children’s bedside shelf',
        material: 'MDF',
        finish: 'PU, specified colour',
        design: 'Custom fabricated bedside shelving',
        images: [
          {
            src: PHOTOS.kidShelf,
            alt: 'Custom fabricated children’s bedside shelf finished in PU',
            width: 1280,
            height: 721,
          },
        ],
      },
      {
        id: 'vanity-placeholder',
        title: 'Dressing vanity cabinet',
        material: 'MDF / HDHMR',
        finish: 'High-gloss buffed PU',
        design: 'Vanity with CNC drawer fronts',
        images: [],
      },
      {
        id: 'wine-rack-placeholder',
        title: 'Wine rack and coffee table',
        material: 'MDF',
        finish: 'PU satin',
        design: 'Free-standing furniture pair',
        images: [],
      },
    ],
  },
  {
    id: 'commercial-installations',
    name: 'Commercial Installations',
    eyebrow: 'Trade',
    copy: 'Retail, hospitality and workplace joinery — sequenced crates, labelled elevations, OEM-ready lots.',
    projects: [
      {
        id: 'retail-joinery-placeholder',
        title: 'Boutique retail joinery',
        material: 'MDF & HDHMR',
        finish: 'PU matt, brand colourway',
        design: 'Display elevations and shutter runs',
        images: [],
      },
      {
        id: 'office-pantry-placeholder',
        title: 'Office pantry programme',
        material: 'HDHMR',
        finish: 'PU / laminate-ready faces',
        design: 'Modular pantry with labelled installation packs',
        images: [],
      },
      {
        id: 'hospitality-suite-placeholder',
        title: 'Hospitality suite furniture',
        material: 'MDF, HDHMR and glass',
        finish: 'Specified PU and lacquered glass',
        design: 'Guest-room wardrobes, vanities and TV units',
        images: [],
      },
    ],
  },
]

export const ALL_PROJECTS = PROJECT_SECTIONS.flatMap((section) =>
  section.projects.map((project) => ({ ...project, section: section.name, sectionId: section.id })),
)
