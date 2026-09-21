import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Moon, Settings2, SquareTerminal, Sun } from 'lucide-react';

import Terminal from '@/components/main/Terminal';
import { useI18n, type Language } from '@/shared/i18n';
import { useTheme, type Theme } from '@/shared/theme';

const languages: { code: Language; label: string; name: string }[] = [
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'en', label: 'EN', name: 'English' }
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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setSettingsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSettingsOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [settingsOpen]);

  const settingsVisibility = settingsOpen
    ? 'pointer-events-auto translate-x-0 opacity-100'
    : 'pointer-events-none -translate-x-2 opacity-0';

  return (
    <>
      <div className='pointer-events-none fixed inset-x-4 bottom-5 z-50 flex items-end justify-between sm:inset-x-6'>
        <div className='pointer-events-auto flex flex-col items-start gap-3'>
          <div ref={settingsRef} className='relative'>
            <div
              className={`pointer-events-none absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2 transition-all duration-300 ${settingsVisibility}`}
            >
              <div className='relative rounded-2xl bg-gradient-to-b from-line via-line/60 to-line/10 p-px shadow-2xl shadow-black/40'>
                <div className='w-[13rem] rounded-[15px] bg-surface/95 p-2.5 backdrop-blur-xl'>
                  <p className='px-1 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted/80'>
                    {t('settings.theme')}
                  </p>
                  <div className='flex gap-1.5'>
                    {themes.map(item => {
                      const Icon = item.code === 'dark' ? Moon : Sun;
                      const active = theme === item.code;
                      return (
                        <button
                          key={item.code}
                          onClick={() => {
                            setTheme(item.code);
                            setSettingsOpen(false);
                          }}
                          aria-label={t(item.labelKey)}
                          className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-[11px] font-semibold transition-all ${
                            active
                              ? 'border-brand/40 bg-gradient-to-r from-brand/25 to-brand2/25 text-strong'
                              : 'border-line text-muted hover:bg-elevated/70 hover:text-content'
                          }`}
                        >
                          <Icon
                            className={`h-3.5 w-3.5 ${active ? 'text-brand' : ''}`}
                          />
                          <span className='whitespace-nowrap'>
                            {t(item.labelKey)}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className='my-2.5 h-px bg-line/60' />

                  <p className='px-1 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted/80'>
                    {t('settings.language')}
                  </p>
                  <div className='flex gap-1.5'>
                    {languages.map(item => {
                      const active = lang === item.code;
                      return (
                        <button
                          key={item.code}
                          onClick={() => {
                            setLang(item.code);
                            setSettingsOpen(false);
                          }}
                          aria-label={`Switch language to ${item.label}`}
                          className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-[11px] font-semibold transition-all ${
                            active
                              ? 'border-brand2/40 bg-gradient-to-r from-brand/20 to-brand2/25 text-strong'
                              : 'border-line text-muted hover:bg-elevated/70 hover:text-content'
                          }`}
                        >
                          <span
                            className={`text-[10px] font-bold tracking-wide ${
                              active ? 'text-brand2' : ''
                            }`}
                          >
                            {item.label}
                          </span>
                          <span className='whitespace-nowrap'>{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <span className='absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 rounded-[2px] border-b border-l border-line bg-surface/95' />
              </div>
            </div>

            <button
              onClick={() => setSettingsOpen(open => !open)}
              aria-label={t('settings.title')}
              aria-expanded={settingsOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-full border bg-surface/80 text-muted backdrop-blur transition-colors hover:border-brand hover:text-brand ${
                settingsOpen ? 'border-brand text-brand' : 'border-line'
              }`}
            >
              <Settings2 className='h-4 w-4' />
            </button>
          </div>

          <button
            onClick={() => setTerminalOpen(true)}
            aria-label={t('term.open')}
            className='flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-muted backdrop-blur transition-colors hover:border-brand hover:text-brand'
          >
            <SquareTerminal className='h-4 w-4' />
          </button>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label='Scroll to top'
          className={`pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-muted backdrop-blur transition-all hover:border-brand2 hover:text-brand2 ${
            showTop
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          <ArrowUp className='h-4 w-4' />
        </button>
      </div>

      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
};

export default FloatingButtons;
