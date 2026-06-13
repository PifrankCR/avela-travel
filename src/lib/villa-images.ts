// Resolves the public-style '/images/villas/...' paths stored in the villa
// data files to imported image assets, so the villa pages can run them
// through astro:assets without rewriting every data entry.
import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/villas/**/*.{jpg,jpeg,webp,png}',
  { eager: true }
);

export function villaImage(publicSrc: string): ImageMetadata {
  const key = publicSrc.replace('/images/villas/', '../assets/images/villas/');
  const mod = modules[key];
  if (!mod) throw new Error(`Villa image not found in src/assets: ${publicSrc}`);
  return mod.default;
}
