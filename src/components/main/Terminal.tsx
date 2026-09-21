import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

import { useI18n, type TranslationKey } from '@/shared/i18n';

type LineType = 'input' | 'output' | 'system' | 'success' | 'error';

interface Line {
  type: LineType;
  text: string;
}

interface TerminalProps {
  open: boolean;
  onClose: () => void;
}

const stack = [
  'TypeScript',
  'NestJS',
  'Next.js',
  'React',
  'PHP',
  'Laravel',
  'Symfony',
  'PostgreSQL',
  'Redis',
  'Docker'
];

const projectKeys: TranslationKey[] = [
  's3.p1.title',
  's3.p2.title',
  's3.p3.title',
  's3.p4.title'
];

const commandDefs: { cmd: string; descKey: TranslationKey }[] = [
  { cmd: 'whoami', descKey: 'term.descWhoami' },
  { cmd: 'stack', descKey: 'term.descStack' },
  { cmd: 'projects', descKey: 'term.descProjects' },
  { cmd: 'contact', descKey: 'term.descContact' },
  { cmd: 'clear', descKey: 'term.descClear' },
  { cmd: 'help', descKey: 'term.descHelp' }
];

const lineClasses: Record<LineType, string> = {
  input: 'text-strong',
  output: 'text-content',
  system: 'text-brand italic',
  success: 'text-brand2',
  error: 'text-red-400'
};

const Terminal = ({ open, onClose }: TerminalProps) => {
  const { t } = useI18n();
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  const execute = (cmd: string): Line[] => {
    switch (cmd) {
      case 'help':
        return [
          { type: 'output', text: t('term.helpTitle') },
          ...commandDefs.map(def => ({
            type: 'output' as const,
            text: `  ${def.cmd.padEnd(9)} — ${t(def.descKey)}`
          }))
        ];
      case 'whoami':
        return [{ type: 'success', text: t('term.whoami') }];
      case 'stack':
        return [
          { type: 'output', text: t('term.stackTitle') },
          { type: 'output', text: `  ${stack.join('  ·  ')}` }
        ];
      case 'projects':
        return [
          { type: 'output', text: t('term.projectsTitle') },
          ...projectKeys.map((key, i) => ({
            type: 'output' as const,
            text: `  ${i + 1}. ${t(key)}`
          }))
        ];
      case 'contact':
        return [
          { type: 'output', text: t('term.contactTitle') },
          { type: 'output', text: `  ${t('term.contactText')}` }
        ];
      default:
        return [
          {
            type: 'error',
            text: `${cmd}: ${t('term.notFound')}. ${t('term.descHelp')}: help`
          }
        ];
    }
  };

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setInput('');
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }
    setHistory(prev => [...prev, { type: 'input', text: raw }, ...execute(cmd)]);
  };

  if (!open) return null;

  return (
    <div
      className='fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        onClick={e => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
        className='flex h-[70vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-base shadow-2xl'
      >
        <div className='flex items-center gap-2 border-b border-line bg-surface/60 px-5 py-3'>
          <span className='h-3 w-3 rounded-full bg-red-500/80' />
          <span className='h-3 w-3 rounded-full bg-yellow-500/80' />
          <span className='h-3 w-3 rounded-full bg-green-500/80' />
          <span className='ml-2 font-mono text-xs text-muted'>
            txzy@portfolio — terminal
          </span>
          <button
            onClick={onClose}
            aria-label={t('term.close')}
            className='ml-auto rounded-lg p-1 text-muted transition-colors hover:bg-elevated hover:text-strong'
          >
            <X className='h-4 w-4' />
          </button>
        </div>

        <div
          ref={bodyRef}
          className='flex-1 space-y-1 overflow-y-auto p-5 font-mono text-sm leading-relaxed'
        >
          <div className={lineClasses.system}>{t('term.welcome')}</div>
          {history.map((line, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap ${lineClasses[line.type]}`}
            >
              {line.type === 'input' ? (
                <>
                  <span className='text-emerald-400'>$ </span>
                  {line.text}
                </>
              ) : (
                line.text
              )}
            </div>
          ))}
          <div className='flex items-center gap-2'>
            <span className='text-emerald-400'>$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') run(input);
              }}
              spellCheck={false}
              autoComplete='off'
              placeholder={t('term.placeholder')}
              className='flex-1 bg-transparent text-strong outline-none placeholder:text-muted'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
