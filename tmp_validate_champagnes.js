const fs = require('fs');
const base = 'c:/Users/faule/OneDrive/Desktop/TOMATE UN VINITO/Vinito';

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function normalizeImageKey(value) {
  return normalizeText(String(value || '')
    .split('/')
    .pop()
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/copy/gi, '')
    .replace(/copia/gi, '')
    .replace(/granenemigo/gi, 'gran enemigo')
    .replace(/nicolascatena/gi, 'nicolas catena')
    .replace(/corderopiellobo/gi, 'cordero piel lobo')
    .replace(/jack\s*daniel'?s?/gi, 'j d')
    .replace(/dvcateana/gi, 'd v catena')
    .replace(/dvcatena/gi, 'd v catena')
    .replace(/alapar/gi, 'a la par')
    .replace(/lagrima/gi, 'lagrima')
    .replace(/cabsau/gi, 'cabernet sauvignon')
    .replace(/cabsauv/gi, 'cabernet sauvignon')
    .replace(/\bcbsau\b/gi, 'cabernet sauvignon')
    .replace(/\bcbs\b/gi, 'cabernet sauvignon')
    .replace(/\bcbf\b/gi, 'cabernet franc')
    .replace(/\bcs\b/gi, 'cabernet sauvignon')
    .replace(/\bmb\b/gi, 'malbec')
    .replace(/[-_.]/g, ' ')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .replace(/\s+/g, ' '));
}

const mappings = [
  ['Baron B Brut Nature', 'BaronB-BrutNature.png'],
  ['Baron B Extra Brut', 'BaronB-ExtraBrut.png'],
  ['Baron B Rose', 'BaronB-Rose.png'],
  ['Casa Boher Brut Nature', 'CasaBoherBrutNature.png'],
  ['Casa Boher Extra Brut', 'CasaBoherExtraBrut.png'],
  ['Casa Boher Rose', 'CasaBoherRose.webp'],
  ['Luigi Bosca Brut', 'LuigiBoscaBrut.png'],
  ['Luigi Bosca Extra Brut', 'LuigiBoscaExtraBrut.png'],
];

for (const [name, file] of mappings) {
  const key = normalizeImageKey('img/' + file);
  if (key !== normalizeText(name)) {
    throw new Error(`Mismatch: ${name} => ${key}`);
  }
  if (!fs.existsSync(`${base}/img/${file}`)) {
    throw new Error(`Missing image: ${file}`);
  }
}

console.log('OK - 8 champagnes with valid image mappings and files exist.');
