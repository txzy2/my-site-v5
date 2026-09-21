import { useEffect, useState } from 'react';
import { ArrowUp, Languages, Moon, SquareTerminal, Sun } from 'lucide-react';

import Terminal from '@/components/main/Terminal';
import { useI18n, type Language } from '@/shared/i18n';
import { useTheme, type Theme } from '@/shared/theme';

const languages: { code: Language; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' }
];

const themes: { code: Theme; labelKey: 'theme.light' | 'theme.dark' }[] = [
  { code: 'dark', labelKey: 'theme.dark' },
  { code: 'light', labelKey: 'theme.light' }
];

const FloatingButtons = () => {
  const { t, lang, setLang } = useI18n();
  const { theme, setTheme } = useTheme();
  const [showTop, setShowTop] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className='pointer-events-none fixed inset-x-4 bottom-5 z-50 flex items-center justify-between sm:inset-x-6'>
        <button
          onClick={() => setTerminalOpen(true)}
          aria-label={t('term.open')}
          className='pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-muted backdrop-blur transition-colors hover:border-brand hover:text-brand'
        >
          <SquareTerminal className='h-4 w-4' />
        </button>

        <div className='pointer-events-auto flex flex-row items-center gap-3'>
          <div className='flex flex-row items-center gap-1 rounded-full border border-line bg-surface/80 p-1 backdrop-blur'>
            {themes.map(item => {
              const Icon = item.code === 'dark' ? Moon : Sun;
              return (
                <button
                  key={item.code}
                  onClick={() => setTheme(item.code)}
                  aria-label={t(item.labelKey)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    theme === item.code
                      ? 'bg-gradient-to-r from-brand/30 to-brand2/30 text-strong'
                      : 'text-muted hover:text-content'
                  }`}
                >
                  <Icon className='h-3.5 w-3.5' />
                  <span className='hidden sm:inline'>{t(item.labelKey)}</span>
                </button>
              );
            })}
          </div>

          <div className='flex flex-row items-center gap-1 rounded-full border border-line bg-surface/80 p-1 backdrop-blur'>
            <Languages className='ml-1 h-4 w-4 text-muted' />
            {languages.map(item => (
              <button
                key={item.code}
                onClick={() => setLang(item.code)}
                aria-label={`Switch language to ${item.label}`}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  lang === item.code
                    ? 'bg-gradient-to-r from-brand/30 to-brand2/30 text-strong'
                    : 'text-muted hover:text-content'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label='Scroll to top'
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-muted backdrop-blur transition-all hover:border-brand2 hover:text-brand2 ${
              showTop
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            }`}
          >
            <ArrowUp className='h-4 w-4' />
          </button>
        </div>
      </div>

      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
};

export default FloatingButtons;
