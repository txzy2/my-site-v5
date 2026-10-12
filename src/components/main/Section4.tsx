import m2labLogo from '@/assets/companies/m2lab.svg';
import otrLogo from '@/assets/companies/otr.png';
import { FadeIn } from '@/shared/animations';
import { useI18n, type TranslationKey } from '@/shared/i18n';

const experience: {
  periodKey: TranslationKey;
  roleKey: TranslationKey;
  companyKey?: TranslationKey;
  url?: string;
  logo?: string;
  descKey: TranslationKey;
  tech: string[];
}[] = [
  {
    periodKey: 's4.e1.period',
    roleKey: 's4.e1.role',
    companyKey: 's4.e1.company',
    url: 'https://m2lab.ru/',
    logo: m2labLogo,
    descKey: 's4.e1.desc',
    tech: ['Symfony', 'PHP']
  },
  {
    periodKey: 's4.e2.period',
    roleKey: 's4.e2.role',
    companyKey: 's4.e2.company',
    url: 'https://otr-soft.ru/company/',
    logo: otrLogo,
    descKey: 's4.e2.desc',
    tech: ['Laravel', 'PHP', 'MySQL']
  },
  {
    periodKey: 's4.e3.period',
    roleKey: 's4.e3.role',
    descKey: 's4.e3.desc',
    tech: ['Angular', 'TypeScript']
  }
];

const Section4 = () => {
  const { t } = useI18n();

  return (
    <>
      <div className='relative' id='section4'>
        <h3 className='text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2 inline-block'>
          /experience
        </h3>
        <p className='text-sm text-muted mt-1 pl-1'>{t('s4.subtitle')}</p>
      </div>

      <FadeIn delay={0.2}>
        <ol className='relative ml-2 border-l border-line'>
          {experience.map((item, i) => {
            const accent = i % 2 === 0 ? 'text-brand/80' : 'text-brand2/80';
            return (
              <li
                key={item.roleKey}
                className='group relative pb-12 pl-8 last:pb-0'
              >
                <span
                  className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 bg-base transition-colors ${
                    i % 2 === 0
                      ? 'border-brand/60 group-hover:border-brand'
                      : 'border-brand2/60 group-hover:border-brand2'
                  }`}
                />
                <span className='font-mono text-xs text-muted'>
                  {t(item.periodKey)}
                </span>
                <h4 className='mt-1 text-lg font-semibold text-strong'>
                  {t(item.roleKey)}
                </h4>

                {item.companyKey && (
                  <p
                    className={`mt-1 flex items-center gap-2 text-[13px] font-medium ${accent}`}
                  >
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt=''
                        className='h-5 w-5 rounded-[5px] object-contain'
                      />
                    )}
                    {item.url ? (
                      <a
                        href={item.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='transition-colors hover:text-strong'
                      >
                        {t(item.companyKey)}
                      </a>
                    ) : (
                      t(item.companyKey)
                    )}
                  </p>
                )}

                <p className='mt-1 max-w-2xl text-[14px] leading-relaxed text-content'>
                  {t(item.descKey)}
                </p>
                <div className='mt-3 flex flex-wrap gap-1.5'>
                  {item.tech.map(tech => (
                    <span
                      key={tech}
                      className='rounded-full border border-line bg-elevated/60 px-2.5 py-1 text-[11px] text-content transition-colors hover:border-muted'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </FadeIn>
    </>
  );
};

export default Section4;
