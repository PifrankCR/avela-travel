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

// The glob deliberately covers assets/images/villas only. Villa Ocaso's five
// photos were moved to assets/images/unpublished-ocaso/ on 2026-11-08 so the
// build stops emitting them: they are watermarked "Vacation Nosara", and an
// eager glob emits every file it matches even when no page renders it, which
// left them fetchable under /_astro/. Moving them back is step one of
// republishing the villa.
