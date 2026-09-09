export function img(name) {
  return `/images/${name}`
}

export const PHOTOS = {
  fabricLined: img('fabric-lined-wardrobe-doors.jpg'),
  flutedHdhmr: img('fluted-hdhmr-wardrobe-doors.jpg'),
  frenchGlass: img('french-glass-shutters.jpg'),
  kidShelf: img('kid-bedside-shelf.jpg'),
  louvre: img('french-louvre-shutters.jpg'),
  rattanWardrobe: img('rattan-wardrobe-doors.jpg'),
  rattanPu: img('rattan-pu-shutters.jpg'),
}

export const IMAGES = {
  hero: PHOTOS.flutedHdhmr,
  workshop: PHOTOS.louvre,
  luxuryKitchen: PHOTOS.frenchGlass,
  darkInterior: PHOTOS.rattanPu,
  wardrobe: PHOTOS.fabricLined,
  factory: PHOTOS.louvre,
  wood: PHOTOS.rattanWardrobe,
  paint: PHOTOS.fabricLined,
  cnc: PHOTOS.flutedHdhmr,
  living: PHOTOS.frenchGlass,
  architecture: PHOTOS.kidShelf,
}
