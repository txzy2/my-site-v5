import type { TranslationKey } from '@/shared/i18n';

export interface IHeaderLinks {
  titleKey: TranslationKey;
  link: string;
}

export const list: IHeaderLinks[] = [
  { titleKey: 'nav.home', link: '/' },
  { titleKey: 'nav.projects', link: '#about' },
  { titleKey: 'nav.news', link: '/news' }
];
