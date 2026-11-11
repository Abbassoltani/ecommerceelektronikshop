
import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('./products.json', 'utf8'));
const categoryMap = {
  cpu: 'HARDWARE',
  'fan-cpu': 'HARDWARE',
  mb: 'HARDWARE',
  monitor: 'HARDWARE',
  pc: 'HARDWARE',

  headphone: 'ACCESSORIES',
  keyboard: 'ACCESSORIES',
  mouse: 'ACCESSORIES',

  game: 'SOFTWARE'
};

data.products = data.products.map(product => ({
    ...product,
    mainCategory:categoryMap[product.category]
}));

fs.writeFileSync(
    './products.json',
    JSON.stringify(data, null , 2),
    'utf8'
)

console.log('Main categories add successfuly !');
