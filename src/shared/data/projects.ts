import type { ComponentType } from 'react';
import { BarChart3, Globe, MessageCircle, ScrollText } from 'lucide-react';

import type { TranslationKey } from '@/shared/i18n';

export interface Project {
  slug: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  detailsKey: TranslationKey;
  highlightKey: TranslationKey;
  icon: ComponentType<{ className?: string }>;
  images: string[];
  tech: (string | { key: TranslationKey })[];
  link: string;
  border: string;
  glow: string;
  iconBox: string;
  iconColor: string;
  titleColor: string;
  accent: string;
  chip: string;
}

export const projects: Project[] = [
  {
    slug: 'my-site-v5',
    titleKey: 's3.p1.title',
    descKey: 's3.p1.desc',
    detailsKey: 's3.p1.details',
    highlightKey: 's3.p1.highlight',
    icon: Globe,
    images: [
      'https://picsum.photos/seed/my-site-1/1200/675',
      'https://picsum.photos/seed/my-site-2/1200/675',
      'https://picsum.photos/seed/my-site-3/1200/675'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/txzy2/my-site-v5',
    border: 'hover:border-brand/40',
    glow: 'bg-brand/5',
    iconBox: 'bg-brand/5 border-brand/20',
    iconColor: 'text-brand/80',
    titleColor: 'text-brand/90',
    accent: 'text-brand/60',
    chip: 'text-brand/70 border-brand/15'
  },
  {
    slug: 'laravel-logger',
    titleKey: 's3.p2.title',
    descKey: 's3.p2.desc',
    detailsKey: 's3.p2.details',
    highlightKey: 's3.p2.highlight',
    icon: ScrollText,
    images: [
      'https://picsum.photos/seed/logger-1/1200/675',
      'https://picsum.photos/seed/logger-2/1200/675',
      'https://picsum.photos/seed/logger-3/1200/675'
    ],
    tech: ['Laravel', 'Docker', 'PostgreSQL', 'Telegram API'],
    link: '',
    border: 'hover:border-brand2/40',
    glow: 'bg-brand2/5',
    iconBox: 'bg-brand2/5 border-brand2/20',
    iconColor: 'text-brand2/80',
    titleColor: 'text-brand2/90',
    accent: 'text-brand2/60',
    chip: 'text-brand2/70 border-brand2/15'
  },
  {
    slug: 'stockhub',
    titleKey: 's3.p3.title',
    descKey: 's3.p3.desc',
    detailsKey: 's3.p3.details',
    highlightKey: 's3.p3.highlight',
    icon: MessageCircle,
    images: [
      'https://picsum.photos/seed/stockhub-1/1200/675',
      'https://picsum.photos/seed/stockhub-2/1200/675',
      'https://picsum.photos/seed/stockhub-3/1200/675'
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
    link: 'https://github.com/txzy2/stockhub.v2',
    border: 'hover:border-brand/40',
    glow: 'bg-brand/5',
    iconBox: 'bg-brand/5 border-brand/20',
    iconColor: 'text-brand/80',
    titleColor: 'text-brand/90',
    accent: 'text-brand/60',
    chip: 'text-brand/70 border-brand/15'
  },
  {
    slug: 'hookah-crm',
    titleKey: 's3.p4.title',
    descKey: 's3.p4.desc',
    detailsKey: 's3.p4.details',
    highlightKey: 's3.p4.highlight',
    icon: BarChart3,
    images: [
      'https://picsum.photos/seed/hookah-1/1200/675',
      'https://picsum.photos/seed/hookah-2/1200/675',
      'https://picsum.photos/seed/hookah-3/1200/675'
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'Redis',
      { key: 's3.queue' },
      'PostgreSQL'
    ],
    link: '',
    border: 'hover:border-brand2/40',
    glow: 'bg-brand2/5',
    iconBox: 'bg-brand2/5 border-brand2/20',
    iconColor: 'text-brand2/80',
    titleColor: 'text-brand2/90',
    accent: 'text-brand2/60',
    chip: 'text-brand2/70 border-brand2/15'
  }
];
