// =============================================
// Google Sheets Reader (CSV público)
// =============================================

/**
 * Lee una Google Sheet publicada como CSV y la convierte
 * en un array de objetos con las columnas como keys.
 *
 * La hoja DEBE estar publicada en la web:
 *   Archivo → Compartir → Publicar en la web → CSV
 *
 * Columnas esperadas:
 *   nombre | descripcion | photo_url | precio | tiene_stock | categoria
 */

async function fetchWinesFromSheet() {
  const url = `https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(CONFIG.SHEET_NAME)}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const csv = await response.text();
  return parseCSV(csv);
}

function parseCSV(csv) {
  const lines = csv.split('\n').filter(line => line.trim());
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]).map(h =>
    h.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  );

  const wines = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (!values.length) continue;

    const row = {};
    headers.forEach((header, idx) => {
      row[header] = (values[idx] || '').trim();
    });

    // Normalizar datos
    wines.push({
      id: i,
      nombre: row['nombre'] || 'Sin nombre',
      descripcion: row['descripcion'] || '',
      photo_url: row['photo_url'] || '',
      precio: parseFloat(row['precio']) || 0,
      tiene_stock: (row['tiene_stock'] || '').toUpperCase() === 'SI',
      categoria: row['categoria'] || 'Otros',
    });
  }

  return wines;
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (inQuotes) {
      if (char === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
  }

  result.push(current);
  return result;
}
