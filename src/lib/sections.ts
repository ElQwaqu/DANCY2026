import { wedding } from '../data/wedding';
import type { SectionConfig, SectionId } from '../data/types';

/** Section background; the page alternates these. */
export type Tone = 'ivory' | 'cream';

/** Props every section component accepts. */
export interface SectionProps {
  tone?: Tone;
}

export interface EnabledSection extends SectionConfig {
  id: SectionId;
}

/** Sections switched on in wedding.ts, in page order. Used by the menu and the page. */
export function enabledSections(): EnabledSection[] {
  return (Object.entries(wedding.sections) as [SectionId, SectionConfig][])
    .filter(([, config]) => config.enabled)
    .map(([id, config]) => ({ id, ...config }));
}
