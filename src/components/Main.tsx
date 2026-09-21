import { FadeIn } from '@/shared/animations';
import { useI18n } from '@/shared/i18n';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, GithubIcon } from 'lucide-react';
import React from 'react';

import Typewriter from 'typewriter-effect';
import Section2 from './main/Section2';
import Section3 from './main/Section3';

const Main: React.FC = () => {
  const { t, lang } = useI18n();
  return (
    <div className='text-[14px] relative overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='min-h-screen flex flex-col justify-center items-center gap-4 relative'>
          <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
            <motion.div
              className='absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-brand/20 blur-[100px]'
              animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className='absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-brand2/20 blur-[100px]'
              animate={{ x: [30, -30, 30], y: [20, -20, 20] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className='absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle,theme(colors.gray.500)_1px,transparent_1px)] [background-size:28px_28px]' />
          </div>

          <FadeIn delay={0.2}>
            <div className='rounded-full p-[2px] bg-gradient-to-tr from-brand to-brand2 shadow-lg shadow-brand/20'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-base'>
                <span className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2'>
                  А
                </span>
              </div>
            </div>
          </FadeIn>

          <h1 className='text-2xl font-bold text-content'>
            <Typewriter
              key={`greeting-${lang}`}
              onInit={typewriter => {
                typewriter.typeString(t('hero.greeting')).start();
              }}
              options={{
                delay: 50,
                cursor: '', // полностью убираем курсор
                autoStart: true,
                loop: false, // отключаем повторение
                deleteSpeed: 0, // запрещаем удаление текста
                skipAddStyles: true // для лучшей интеграции с Tailwind
              }}
            />
          </h1>

          <FadeIn delay={0.6}>
            <h2 className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2'>
              <Typewriter
                key={`roles-${lang}`}
                options={{
                  strings: [
                    t('hero.role1'),
                    t('hero.role3'),
                    t('hero.role4')
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 35
                }}
              />
            </h2>
          </FadeIn>

          <FadeIn delay={0.9}>
            <p className='text-[14px] leading-relaxed max-w-lg text-center text-content'>
              {t('hero.aboutPrefix')}
              <span className='text-brand2'>
                {t('hero.aboutHighlight')}
              </span>
              {t('hero.aboutSuffix')}
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className='flex flex-wrap justify-center gap-2 max-w-md'>
              {[
                'TypeScript',
                'PHP',
                'NestJS',
                'Next.js',
                'React',
                'Laravel',
                'Symfony',
                'PostgreSQL',
                'Redis'
              ].map(tech => (
                <span
                  key={tech}
                  className='px-3 py-1 text-xs rounded-full bg-surface/60 border border-line text-content hover:border-brand/50 transition-colors'
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={1.1}>
            <div className='flex items-center gap-3'>
              <button
                onClick={() => {
                  document.getElementById('section3')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className='group inline-flex items-center gap-2 px-4 py-2 text-xs rounded-lg bg-gradient-to-r from-brand/20 to-brand2/20 border border-brand/30 text-strong hover:border-brand hover:text-strong transition-all'
              >
                {t('hero.ctaProjects')}
                <ArrowRight className='w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform' />
              </button>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 text-xs rounded-lg border border-line text-content hover:border-muted hover:text-strong transition-colors'
              >
                <GithubIcon className='w-3.5 h-3.5' />
                GitHub
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={1.3}>
            <div className='grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-surface/40 px-2 py-3'>
              {[
                { value: '3+', label: t('hero.stat1') },
                { value: '15+', label: t('hero.stat2') },
                { value: '10+', label: t('hero.stat3') }
              ].map(stat => (
                <div key={stat.label} className='flex flex-col items-center px-3'>
                  <span className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2'>
                    {stat.value}
                  </span>
                  <span className='text-[11px] text-muted'>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <button
            onClick={() => {
              document.getElementById('section2')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            className='absolute bottom-3 animate-bounce cursor-pointer'
          >
            <ArrowDown className='text-muted hover:text-strong transition-colors' />
          </button>
        </div>

        <div className='space-y-6 flex flex-col min-h-screen w-[90%] mt-6 max-w-4xl justify-center relative'>
          <Section2 />
        </div>

        <div className='space-y-6 flex flex-col min-h-screen w-[90%] max-w-4xl justify-center relative'>
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default Main;
