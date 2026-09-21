import { FadeIn } from '@/shared/animations';
import { useI18n, type TranslationKey } from '@/shared/i18n';
import {
  ArrowDown,
  Bot,
  Boxes,
  Code2,
  Database,
  Server,
  Sparkles
} from 'lucide-react';
import type { ComponentType } from 'react';

const mainStack = [
  {
    titleKey: 's2.nest.title',
    descKey: 's2.nest.desc',
    icon: Server,
    tech: ['TypeORM', 'Prisma', 'Passport JWT', 'BullMQ', 'Redis'],
    border: 'hover:border-brand/40',
    iconBox: 'bg-brand/5 border-brand/20',
    iconColor: 'text-brand/80',
    titleColor: 'text-brand/90',
    glow: 'bg-brand/5',
    chip: 'text-brand/70 border-brand/15'
  },
  {
    titleKey: 's2.laravel.title',
    descKey: 's2.laravel.desc',
    icon: Code2,
    tech: ['Livewire', 'Sanctum', 'Eloquent ORM', 'Horizon'],
    border: 'hover:border-brand2/40',
    iconBox: 'bg-brand2/5 border-brand2/20',
    iconColor: 'text-brand2/80',
    titleColor: 'text-brand2/90',
    glow: 'bg-brand2/5',
    chip: 'text-brand2/70 border-brand2/15'
  },
  {
    titleKey: 's2.next.title',
    descKey: 's2.next.desc',
    icon: Boxes,
    tech: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'SSR'],
    border: 'hover:border-brand/40',
    iconBox: 'bg-brand/5 border-brand/20',
    iconColor: 'text-brand/80',
    titleColor: 'text-brand/90',
    glow: 'bg-brand/5',
    chip: 'text-brand/70 border-brand/15'
  },
  {
    titleKey: 's2.tg.title',
    descKey: 's2.tg.desc',
    icon: Bot,
    tech: ['FSM', 'Web Apps', 'Payments', 'Webhooks'],
    border: 'hover:border-brand2/40',
    iconBox: 'bg-brand2/5 border-brand2/20',
    iconColor: 'text-brand2/80',
    titleColor: 'text-brand2/90',
    glow: 'bg-brand2/5',
    chip: 'text-brand2/70 border-brand2/15'
  }
] satisfies {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: ComponentType<{ className?: string }>;
  tech: string[];
  border: string;
  iconBox: string;
  iconColor: string;
  titleColor: string;
  glow: string;
  chip: string;
}[];

const toolGroups: {
  labelKey: TranslationKey;
  icon?: ComponentType<{ className?: string }>;
  accent: string;
  items: { name?: string; nameKey?: TranslationKey }[];
}[] = [
  {
    labelKey: 's2.lang',
    icon: Code2,
    accent: 'text-brand/80',
    items: [
      { name: 'TypeScript' },
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'SQL' }
    ]
  },
  {
    labelKey: 's2.data',
    icon: Database,
    accent: 'text-brand2/80',
    items: [
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'MySQL' },
      { name: 'Prisma / TypeORM' }
    ]
  },
  {
    labelKey: 's2.infra',
    icon: Server,
    accent: 'text-emerald-300/80',
    items: [
      { name: 'Docker' },
      { nameKey: 's2.queue' },
      { name: 'CI/CD' },
      { name: 'Nginx' }
    ]
  }
];

const Section2 = () => {
  const { t } = useI18n();

  return (
    <>
      <div className='group relative inline-block' id='section2'>
        <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2'>
          /tech_stack
        </h2>
        <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-brand2 group-hover:w-full transition-all duration-500'></div>
        <p className='text-sm text-muted mt-1'>{t('s2.subtitle')}</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {mainStack.map((item, i) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.titleKey} delay={0.2 + i * 0.15}>
              <div
                className={`group relative h-full overflow-hidden rounded-xl border border-line ${item.border} bg-surface/40 p-5 transition-all duration-500 hover:-translate-y-1`}
              >
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${item.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                ></div>
                <div className='relative'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className={`p-2 rounded-lg border ${item.iconBox}`}>
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className={`font-semibold ${item.titleColor}`}>
                      {t(item.titleKey)}
                    </h3>
                  </div>
                  <p className='text-content text-[13px] leading-relaxed mb-4'>
                    {t(item.descKey)}
                  </p>
                  <div className='flex flex-wrap gap-1.5'>
                    {item.tech.map(tech => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 text-[11px] rounded-full bg-elevated/80 border ${item.chip}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.8}>
        <div className='mt-4'>
          <div className='flex items-center gap-2 mb-4'>
            <Sparkles className='w-4 h-4 text-brand/80' />
            <h3 className='text-sm font-mono text-brand/80'>
              {t('s2.arsenal')}
            </h3>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {toolGroups.map(group => {
              const GroupIcon = group.icon;
              return (
                <div
                  key={group.labelKey}
                  className='rounded-xl border border-line bg-surface/40 p-4 transition-colors hover:border-line'
                >
                  <div className='flex items-center gap-2 mb-3'>
                    {GroupIcon && (
                      <GroupIcon className={`w-4 h-4 ${group.accent}`} />
                    )}
                    <h4 className='text-xs font-semibold text-content'>
                      {t(group.labelKey)}
                    </h4>
                  </div>
                  <div className='flex flex-wrap gap-1.5'>
                    {group.items.map(item => (
                      <span
                        key={item.nameKey ?? item.name}
                        className='px-2.5 py-1 text-[11px] rounded-full bg-elevated/60 border border-line text-content hover:border-muted transition-colors'
                      >
                        {item.nameKey ? t(item.nameKey) : item.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={1}>
        <div className='mt-6 pt-6 border-t border-line relative'>
          <div className='mb-6 p-4 bg-surface/50 rounded-lg border border-line'>
            <h3 className='text-sm font-mono text-brand/80 mb-2'>
              {t('s2.principles')}
            </h3>
            <div className='flex flex-wrap gap-3'>
              <span className='px-3 py-1 text-xs rounded-full bg-elevated text-brand/80 border border-brand/20'>
                SOLID
              </span>
              <span className='px-3 py-1 text-xs rounded-full bg-elevated text-brand2/80 border border-brand2/20'>
                GRASP
              </span>
              <span className='px-3 py-1 text-xs rounded-full bg-elevated text-emerald-300/80 border border-emerald-500/20'>
                DRY
              </span>
            </div>
            <p className='mt-3 text-sm text-muted'>
              {t('s2.principlesPrefix')}
              <span className='text-brand/80'>GRASP</span>
              {t('s2.principlesMid')}
              <span className='text-brand2/80'> SOLID</span>
              {t('s2.principlesSuffix')}
            </p>
          </div>
          <p className='text-muted italic relative pl-6 border-l-2 border-line'>
            <span className='absolute left-0 text-2xl -top-1 text-muted'>
              "
            </span>
            {t('s2.quotePrefix')}
            <span className='text-brand/80'> GRASP</span>
            {t('s2.quoteMid')}
            <span className='text-brand2/80'>SOLID</span>
            {t('s2.quoteSuffix')}
            <span className='absolute right-0 bottom-0 text-2xl text-muted'>
              "
            </span>
            <br />
            <br />
            {t('s2.quoteTail')}
          </p>{' '}
        </div>
      </FadeIn>

      <button
        onClick={() => {
          document.getElementById('section3')?.scrollIntoView({
            behavior: 'smooth'
          });
        }}
        className='m-auto animate-bounce cursor-pointer '
      >
        <ArrowDown className=' text-muted hover:text-strong transition-colors' />
      </button>
    </>
  );
};
export default Section2;
