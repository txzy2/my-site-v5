import { GithubIcon } from 'lucide-react';

const Section3 = () => {
  return (
    <>
      <div className='relative' id='section3'>
        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block'>
          /projects
        </h3>
        <p className='text-sm text-gray-400 mt-1 pl-1'>Избранные реализации</p>
      </div>

      <div>
        <div className='group relative overflow-hidden rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-500'>
          <div className='absolute -right-20 -top-20 w-40 h-40 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-700'></div>
          <div className='p-6 relative'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='p-2 bg-purple-500/10 rounded-lg border border-purple-500/20'>
                <svg
                  className='w-5 h-5 text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-purple-400'>
                Персональный сайт v5
              </h3>
            </div>

            <p className='text-gray-300 mb-6'>
              Современное портфолио с анимациями и интерактивными элементами.
              <span className='block mt-2 text-purple-300/80'>
                Использован стек: ReactJs, Tailwind, Framer Motion
              </span>
            </p>

            <div className='flex items-center justify-between'>
              <a
                href='https://github.com/txzy2/my-site-v5'
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 text-sm rounded-lg border border-gray-700 hover:border-purple-400 hover:text-purple-400 transition-colors flex items-center gap-2'
              >
                <GithubIcon className='w-4 h-4' />
                Исходный код
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Сервис логирования */}
      <div >
        <div className='border border-gray-700 rounded-xl overflow-hidden group hover:border-amber-500 transition-colors'>
          <div className='bg-gradient-to-r from-gray-900 to-gray-800 p-6'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20'>
                <svg
                  className='w-6 h-6 text-amber-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-bold text-amber-400 mb-2'>
                  Laravel Logger Service
                </h3>
                <p className='text-gray-300 mb-4'>
                  Микросервис для централизованного сбора ошибок с фильтрацией и
                  уведомлениями. Применены принципы{' '}
                  <span className='text-amber-300'>SOLID</span> и{' '}
                  <span className='text-blue-300'>GRASP</span> для
                  масштабируемой архитектуры.
                </p>

                <div className='grid grid-cols-2 gap-3 mb-4'>
                  <div>
                    <h4 className='text-xs text-gray-400 mb-1.5'>
                      Основные технологии
                    </h4>
                    <div className='flex flex-wrap gap-1.5'>
                      <span className='px-2 py-1 text-xs rounded bg-gray-800 text-amber-300 border border-amber-900/50'>
                        Laravel
                      </span>
                      <span className='px-2 py-1 text-xs rounded bg-gray-800 text-blue-300 border border-blue-900/50'>
                        Docker
                      </span>
                      <span className='px-2 py-1 text-xs rounded bg-gray-800 text-emerald-300 border border-emerald-900/50'>
                        PostgreSQL
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className='text-xs text-gray-400 mb-1.5'>Функционал</h4>
                    <ul className='text-xs text-gray-400 space-y-1'>
                      <li className='flex items-center gap-1.5'>
                        <span className='w-1.5 h-1.5 rounded-full bg-amber-400/80'></span>{' '}
                        Фильтрация ошибок
                      </li>
                      <li className='flex items-center gap-1.5'>
                        <span className='w-1.5 h-1.5 rounded-full bg-amber-400/80'></span>{' '}
                        Уведомления в Telegram
                      </li>
                      <li className='flex items-center gap-1.5'>
                        <span className='w-1.5 h-1.5 rounded-full bg-amber-400/80'></span>{' '}
                        Хранение логов
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-900/50 px-6 py-3 border-t border-gray-700 flex justify-between items-center'>
            <span className='text-xs text-gray-400'>
              Архитектура: Микросервис
            </span>
            <div className='flex gap-2'>
              <span className='px-2 py-1 text-xs rounded-full bg-gray-800 text-amber-400 border border-amber-900/50'>
                API
              </span>
              <span className='px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-400 border border-gray-700'>
                Backend
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Stockhub Bot */}
      <div>
        <div className='group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-cyan-400 transition-colors p-6'>
          <div className='relative z-10'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20'>
                <svg
                  className='w-5 h-5 text-cyan-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-cyan-400'>Stockhub Bot</h3>
            </div>

            <p className='text-gray-300 mb-6'>
              Telegram бот для продажи кроссовок с использованием React +
              Vite(Web App) и Nest.js бэкендом.
              <span className='block mt-2 text-cyan-300/80'>
                Полноценный e-commerce в мессенджере
              </span>
            </p>

            <div className='flex flex-wrap gap-3 mb-6'>
              <div>
                <h4 className='text-xs text-gray-400 mb-1.5'>Frontend</h4>
                <div className='flex gap-1.5'>
                  <span className='px-2 py-1 text-xs rounded bg-gray-800 text-blue-400 border border-blue-900/50'>
                    React
                  </span>
                  <span className='px-2 py-1 text-xs rounded bg-gray-800 text-sky-300 border border-sky-900/50'>
                    TypeScript
                  </span>
                </div>
              </div>
              <div>
                <h4 className='text-xs text-gray-400 mb-1.5'>Backend</h4>
                <div className='flex gap-1.5'>
                  <span className='px-2 py-1 text-xs rounded bg-gray-800 text-red-300 border border-red-900/50'>
                    NestJS
                  </span>
                  <span className='px-2 py-1 text-xs rounded bg-gray-800 text-emerald-300 border border-emerald-900/50'>
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            <a
              href='https://github.com/txzy2/stockhub.v2'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 text-cyan-400 transition-colors border border-gray-700'
            >
              <GithubIcon className='w-4 h-4' />
              Исходный код
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
