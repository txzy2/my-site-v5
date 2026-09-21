import { useI18n, type TranslationKey } from '@/shared/i18n';
import {
  BarChart3,
  GithubIcon,
  Globe,
  MessageCircle,
  ScrollText
} from 'lucide-react';
import type { ComponentType } from 'react';

const projects: {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  highlightKey: TranslationKey;
  icon: ComponentType<{ className?: string }>;
  tech: (string | { key: TranslationKey })[];
  link: string;
  border: string;
  glow: string;
  iconBox: string;
  iconColor: string;
  titleColor: string;
  accent: string;
  chip: string;
}[] = [
  {
    titleKey: 's3.p1.title',
    descKey: 's3.p1.desc',
    highlightKey: 's3.p1.highlight',
    icon: Globe,
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
    titleKey: 's3.p2.title',
    descKey: 's3.p2.desc',
    highlightKey: 's3.p2.highlight',
    icon: ScrollText,
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
    titleKey: 's3.p3.title',
    descKey: 's3.p3.desc',
    highlightKey: 's3.p3.highlight',
    icon: MessageCircle,
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
    titleKey: 's3.p4.title',
    descKey: 's3.p4.desc',
    highlightKey: 's3.p4.highlight',
    icon: BarChart3,
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

const Section3 = () => {
  const { t } = useI18n();

  return (
    <>
      <div className='relative' id='section3'>
        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2 inline-block'>
          /projects
        </h3>
        <p className='text-sm text-muted mt-1 pl-1'>{t('s3.subtitle')}</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {projects.map(project => {
          const Icon = project.icon;
          return (
            <div
              key={project.titleKey}
              className={`group relative h-full overflow-hidden rounded-xl border border-line ${project.border} bg-surface/40 p-5 transition-all duration-500 hover:-translate-y-1`}
            >
              <div
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${project.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              ></div>
              <div className='relative flex h-full flex-col'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className={`p-2 rounded-lg border ${project.iconBox}`}>
                    <Icon className={`w-5 h-5 ${project.iconColor}`} />
                  </div>
                  <h3 className={`font-semibold ${project.titleColor}`}>
                    {t(project.titleKey)}
                  </h3>
                </div>

                <p className='text-content text-[13px] leading-relaxed mb-2'>
                  {t(project.descKey)}
                </p>
                <p className={`text-[12px] mb-4 ${project.accent}`}>
                  {t(project.highlightKey)}
                </p>

                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {project.tech.map(tech => {
                    const label =
                      typeof tech === 'string' ? tech : t(tech.key);
                    return (
                      <span
                        key={label}
                        className={`px-2 py-0.5 text-[11px] rounded-full bg-elevated/80 border ${project.chip}`}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>

                {project.link && (
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-auto inline-flex w-fit items-center gap-2 px-3 py-1.5 text-xs rounded-lg border border-line hover:border-muted hover:text-strong text-content transition-colors'
                  >
                    <GithubIcon className='w-3.5 h-3.5' />
                    {t('s3.source')}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Section3;
