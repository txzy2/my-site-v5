import { useState } from 'react';
import { GithubIcon, Maximize2 } from 'lucide-react';

import ProjectModal from '@/components/main/ProjectModal';
import { projects, type Project } from '@/shared/data/projects';
import { useI18n } from '@/shared/i18n';

const Section3 = () => {
  const { t } = useI18n();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className='relative' id='section3'>
        <h3 className='text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2 inline-block'>
          /projects
        </h3>
        <p className='text-sm text-muted mt-1 pl-1'>{t('s3.subtitle')}</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {projects.map(project => {
          const Icon = project.icon;
          return (
            <div
              key={project.titleKey}
              role='button'
              tabIndex={0}
              aria-label={`${t(project.titleKey)} — ${t('s3.open')}`}
              onClick={() => setActive(project)}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActive(project);
                }
              }}
              className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-line ${project.border} bg-surface/40 p-6 transition-all duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60`}
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full ${project.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              ></div>

              <div className='relative flex flex-1 flex-col'>
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

                <div className='mt-auto flex flex-wrap items-center gap-2'>
                  <span
                    className={`inline-flex w-fit items-center gap-2 px-3 py-1.5 text-xs rounded-lg border ${project.chip} transition-colors`}
                  >
                    <Maximize2 className='w-3.5 h-3.5' />
                    {t('s3.open')}
                  </span>

                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={event => event.stopPropagation()}
                      className='inline-flex w-fit items-center gap-2 px-3 py-1.5 text-xs rounded-lg border border-line hover:border-muted hover:text-strong text-content transition-colors'
                    >
                      <GithubIcon className='w-3.5 h-3.5' />
                      {t('s3.source')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
};

export default Section3;
