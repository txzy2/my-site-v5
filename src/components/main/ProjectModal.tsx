import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GithubIcon, X } from 'lucide-react';

import type { Project } from '@/shared/data/projects';
import { useI18n } from '@/shared/i18n';
import { ImageSlider, type ImageSliderHandle } from '@/shared/ui';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useI18n();
  const sliderRef = useRef<ImageSliderHandle>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') sliderRef.current?.next();
      if (event.key === 'ArrowLeft') sliderRef.current?.prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className='fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            role='dialog'
            aria-modal='true'
            aria-label={t(project.titleKey)}
            className='relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-base shadow-2xl'
          >
            <button
              type='button'
              onClick={onClose}
              aria-label={t('s3.close')}
              className='absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60'
            >
              <X className='h-4 w-4' />
            </button>

            <div className='flex-1 overflow-y-auto'>
              <ImageSlider
                ref={sliderRef}
                images={project.images}
                alt={t(project.titleKey)}
                className='border-b border-line'
              />

              <div className='p-6'>
                <div className='mb-3 flex items-center gap-3'>
                  <div className={`rounded-lg border p-2 ${project.iconBox}`}>
                    <project.icon className={`h-5 w-5 ${project.iconColor}`} />
                  </div>
                  <h3 className={`text-lg font-semibold ${project.titleColor}`}>
                    {t(project.titleKey)}
                  </h3>
                </div>

                <p className='mb-3 text-sm leading-relaxed text-content'>
                  {t(project.detailsKey)}
                </p>
                <p className={`mb-4 text-[13px] ${project.accent}`}>
                  {t(project.highlightKey)}
                </p>

                <div className='mb-5 flex flex-wrap gap-1.5'>
                  {project.tech.map(tech => {
                    const label = typeof tech === 'string' ? tech : t(tech.key);
                    return (
                      <span
                        key={label}
                        className={`rounded-full border bg-elevated/80 px-2.5 py-1 text-[11px] ${project.chip}`}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex w-fit items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-xs text-content transition-colors hover:border-muted hover:text-strong'
                  >
                    <GithubIcon className='h-3.5 w-3.5' />
                    {t('s3.source')}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
