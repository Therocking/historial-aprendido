import { findHeroById } from './services/hero.services';

const heroe = findHeroById(3);

console.log(heroe?.name ?? 'Hero not found');