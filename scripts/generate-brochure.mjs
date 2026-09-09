import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const lines = [
  { text: 'ARISTOCRAFT', size: 22, y: 760 },
  { text: 'Premium MDF, HDHMR, Acrylic and Designer Shutters Since 1993', size: 11, y: 732 },
  { text: 'Primary contact', size: 14, y: 690 },
  { text: 'V Praveen Raj', size: 12, y: 668 },
  { text: 'Founder, Chairman & Chief Executive Officer', size: 10, y: 650 },
  { text: 'Mobile / WhatsApp  +91 9845045186', size: 10, y: 628 },
  { text: 'Business email  fraundc@gmail.com', size: 10, y: 612 },
  { text: 'Personal email  vpraveenraj64@gmail.com', size: 10, y: 596 },
  { text: 'Works', size: 14, y: 560 },
  { text: 'Fraun Designer Coatings', size: 11, y: 538 },
  { text: 'Shed No. 1, Patel Shamanna Layout', size: 10, y: 520 },
  { text: 'Railway Parallel Road, Horamavu Village Post', size: 10, y: 504 },
  { text: 'Bangalore - 560043, India', size: 10, y: 488 },
  { text: 'Maps  https://maps.app.goo.gl/w3SnsBK4sfQvystRA', size: 9, y: 470 },
  { text: 'Product lines', size: 14, y: 430 },
  { text: 'MDF  |  HDHMR  |  Acrylic  |  Glass  |  CNC  |  Louvre  |  Rattan', size: 10, y: 410 },
  { text: 'PU finishing on MDF and HDHMR, including CNC-routed 3D shutter panels.', size: 10, y: 394 },
  { text: 'Manufacturing process', size: 14, y: 356 },
  { text: 'Customer Design -> Material Procurement -> CNC Machining -> Surface Preparation', size: 10, y: 336 },
  { text: 'Painting -> Quality Control -> Packaging -> Delivery', size: 10, y: 320 },
  { text: 'Established August 1993. Three decades of surface finishing excellence.', size: 10, y: 80 },
]

function escapePdf(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

const stream = lines
  .map((line) => `BT /F1 ${line.size} Tf 48 ${line.y} Td (${escapePdf(line.text)}) Tj ET`)
  .join('\n')

const bodyParts = [
  '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n',
  '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n',
  '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj\n',
  `4 0 obj << /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream\nendobj\n`,
  '5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj\n',
]

let pdf = '%PDF-1.4\n'
const offsets = [0]
for (const part of bodyParts) {
  offsets.push(Buffer.byteLength(pdf))
  pdf += part
}

const xrefStart = Buffer.byteLength(pdf)
let xref = 'xref\n0 6\n0000000000 65535 f \n'
for (let i = 1; i <= 5; i += 1) {
  xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
pdf += xref
pdf += `trailer << /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`

const out = join(dirname(fileURLToPath(import.meta.url)), '../public/aristocraft-brochure.pdf')
writeFileSync(out, pdf)
console.log('Wrote', out)
