import {FadeIn} from '@/shared/animations';
import {ArrowDown} from 'lucide-react';
import React from 'react';

import Typewriter from 'typewriter-effect';

const Main: React.FC = () => {
  return (
    <div className='text-[14px] relative overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='min-h-screen flex flex-col justify-center items-center gap-4 relative'>
          <h1 className='text-2xl font-bold text-gray-300'>
            <Typewriter
              onInit={typewriter => {
                typewriter.typeString('Привет! Меня зовут Антон :)').start();
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
          <FadeIn delay={0.9}>
            <p className='text-[14px] leading-relaxed max-w-lg text-center text-gray-300'>
              Я создаю{' '}
              <span className='text-blue-300'>надежные backend-решения</span>,
              сочетающие производительность и элегантность кода.
            </p>
          </FadeIn>

          <button
            onClick={() => {
              document.getElementById('section2')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            className='absolute bottom-3 animate-bounce cursor-pointer'
          >
            <ArrowDown className='text-gray-400 hover:text-white transition-colors' />
          </button>
        </div>

        <div
          id='section2'
          className='space-y-6 flex flex-col min-h-screen w-[80%] mt-6 max-w-2xl justify-center relative'
        >
          {/* Декоративные линии */}

          <FadeIn delay={0.2}>
            <div className='group relative pl-8 hover:pl-10 transition-all duration-300'>
              <div className='absolute left-0 top-1 h-5 w-5 rounded-full bg-red-400 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all'></div>
              <div className='absolute left-[9px] top-6 h-full w-px bg-red-400'></div>
              <code className='text-[16px] font-semibold text-red-400 mb-2 inline-block bg-gray-900 px-3 py-1 rounded-md border border-gray-700 group-hover:border-red-400 transition-colors'>
                Laravel (PHP)
              </code>
              <p className='pl-4 text-gray-300 mt-2 '>
                Для быстрой разработки веб-приложений с{' '}
                <span className='text-red-300'>чистым кодом</span> и продуманной
                архитектурой. Опыт с{' '}
                <span className='text-red-300'>
                  Livewire, Sanctum, Eloquent ORM
                </span>
                .
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className='group relative pl-8 hover:pl-10 transition-all duration-300'>
              <div className='absolute left-0 top-1 h-5 w-5 rounded-full bg-orange-400 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all'></div>
              <div className='absolute left-[9px] top-6 h-full w-px bg-orange-400'></div>
              <code className='text-[16px] font-semibold text-orange-400 mb-2 inline-block bg-gray-900 px-3 py-1 rounded-md border border-gray-700 group-hover:border-orange-400 transition-colors'>
                Rust
              </code>
              <p className='pl-4 text-gray-300 mt-2'>
                Для задач, где важны{' '}
                <span className='text-orange-300'>
                  производительность и безопасность
                </span>
                . Опыт работы с{' '}
                <span className='text-orange-300'>
                  Tokio, Actix-web, Diesel ORM
                </span>
                .
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className='group relative pl-8 hover:pl-10 transition-all duration-300'>
              <div className='absolute left-0 top-1 h-5 w-5 rounded-full bg-cyan-400 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all'></div>
              <div className='absolute left-[9px] top-6 h-full w-px bg-cyan-400'></div>
              <code className='text-[16px] font-semibold text-cyan-400 mb-2 inline-block bg-gray-900 px-3 py-1 rounded-md border border-gray-700 group-hover:border-cyan-400 transition-colors'>
                Telegram Боты
              </code>
              <p className='pl-4 text-gray-300 mt-2'>
                <span>
                  Сложной <span className='text-cyan-400 '>бизнес-логикой</span>{' '}
                  и FSM
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className='mt-12 pt-8 border-t border-gray-700 relative'>
              <p className='mb-4 text-gray-300'>
                Также имею опыт работы с{' '}
                <code className='text-cyan-400 font-medium bg-gray-900 px-2 py-1 rounded border border-gray-700'>
                  React
                </code>
                , что позволяет мне лучше понимать{' '}
                <span className='text-cyan-300'>полный цикл разработки</span> и
                создавать более согласованные решения.
              </p>
              <div className='mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700'>
                <h3 className='text-sm font-mono text-purple-400 mb-2'>
                  Принципы проектирования:
                </h3>
                <div className='flex flex-wrap gap-3'>
                  <span className='px-3 py-1 text-xs rounded-full bg-gray-800 text-purple-300 border border-purple-900/50'>
                    SOLID
                  </span>
                  <span className='px-3 py-1 text-xs rounded-full bg-gray-800 text-blue-300 border border-blue-900/50'>
                    GRASP
                  </span>
                  <span className='px-3 py-1 text-xs rounded-full bg-gray-800 text-emerald-300 border border-emerald-900/50'>
                    DRY
                  </span>
                </div>
                <p className='mt-3 text-sm text-gray-400'>
                  В работе применяю принципы{' '}
                  <span className='text-purple-300'>GRASP</span> (Low Coupling,
                  High Cohesion) и<span className='text-blue-300'> SOLID</span>{' '}
                  для создания масштабируемых и поддерживаемых архитектур.
                </p>
              </div>
              <p className='text-gray-400 italic relative pl-6 border-l-2 border-gray-600'>
                <span className='absolute left-0 text-2xl -top-1 text-gray-500'>
                  "
                </span>
                Люблю решать сложные архитектурные задачи, применять паттерны
                проектирования и создавать чистый, поддерживаемый код. Особое
                внимание уделяю принципам
                <span className='text-yellow-300'> GRASP</span> и{' '}
                <span className='text-blue-300'>SOLID</span> для построения
                эффективных систем.
                <span className='absolute right-0 bottom-0 text-2xl text-gray-500'>
                  "
                </span>
                <br />
                <br />
                Всегда открыт к интересным проектам и коллаборациям!
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
            <ArrowDown className='mt-10 text-gray-400 hover:text-white transition-colors' />
          </button>
        </div>

        <div
          className='space-y-6 flex flex-col h-screen w-[80%] max-w-2xl justify-center relative'
          id='section3'
        >
          {/* Проект 1 - Карточка с иконкой */}
          <FadeIn delay={0.2}>
            <div className='group relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/10'>
              <div className='flex items-start gap-4'>
                <div className='p-3 bg-gray-800 rounded-lg border border-gray-700 group-hover:bg-green-400/10 group-hover:border-green-400/50 transition-colors'>
                  <svg
                    className='w-6 h-6 text-green-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-green-400 mb-1'>
                    API Gateway
                  </h3>
                  <p className='text-gray-300'>
                    Разработал высоконагруженный шлюз для микросервисной
                    архитектуры.
                    <span className='block mt-2 text-green-300/80'>
                      Использовал: Rust, Actix, Redis Cluster
                    </span>
                  </p>
                </div>
              </div>
              <div className='mt-4 pt-3 border-t border-gray-700 flex flex-wrap gap-2'>
                <span className='px-2.5 py-1 text-xs rounded-full bg-gray-800 text-gray-300'>
                  #low-latency
                </span>
                <span className='px-2.5 py-1 text-xs rounded-full bg-gray-800 text-gray-300'>
                  #highload
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Проект 2 - Timeline стиль */}
          <FadeIn delay={0.3}>
            <div className='relative'>
              <div className='bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-purple-400 transition-colors'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='font-bold text-purple-400'>
                    Real-time Dashboard
                  </h3>
                  <span className='text-xs px-2 py-1 bg-gray-800 rounded text-gray-400'>
                    2023
                  </span>
                </div>
                <p className='text-gray-300 mb-3'>
                  Интерактивная панель для мониторинга данных с WebSocket
                  подключением и сложной визуализацией.
                </p>
                <div className='flex gap-3'>
                  <div className='flex-1'>
                    <h4 className='text-xs text-gray-400 mb-1'>Технологии</h4>
                    <div className='flex flex-wrap gap-1.5'>
                      <span className='px-2 py-0.5 text-xs rounded bg-gray-800 text-blue-300 border border-blue-900/50'>
                        React
                      </span>
                      <span className='px-2 py-0.5 text-xs rounded bg-gray-800 text-amber-300 border border-amber-900/50'>
                        TypeScript
                      </span>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-xs text-gray-400 mb-1'>
                      Инфраструктура
                    </h4>
                    <div className='flex flex-wrap gap-1.5'>
                      <span className='px-2 py-0.5 text-xs rounded bg-gray-800 text-emerald-300 border border-emerald-900/50'>
                        Docker
                      </span>
                      <span className='px-2 py-0.5 text-xs rounded bg-gray-800 text-gray-300 border border-gray-700'>
                        K8s
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Проект 3 - Минималистичная карточка */}
          <FadeIn delay={0.4}>
            <div className='group relative overflow-hidden rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors'>
              <div className='absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-700'></div>
              <div className='relative p-6'>
                <h3 className='text-xl font-bold text-cyan-400 mb-3'>
                  Blockchain Explorer
                </h3>
                <p className='text-gray-300 relative z-10'>
                  Кастомизированный обозреватель блокчейна с поддержкой
                  кастомных смарт-контрактов и аналитикой транзакций.
                </p>
                <div className='mt-6 flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-cyan-400 animate-pulse'></span>
                  <span className='text-sm text-cyan-400'>В продакшене</span>
                </div>
              </div>
              <div className='px-6 py-3 bg-gray-900/50 border-t border-gray-700 flex justify-between items-center'>
                <span className='text-xs text-gray-400'>
                  Пользователей: 15K+
                </span>
                <button className='text-xs px-3 py-1 rounded-full border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-colors'>
                  Подробнее →
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Main;
