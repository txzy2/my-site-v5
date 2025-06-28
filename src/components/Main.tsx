import {FadeIn} from '@/shared/animations';
import {ArrowDown} from 'lucide-react';
import React from 'react';

import Typewriter from 'typewriter-effect';

const Main: React.FC = () => {
  return (
    <div className='text-[14px] relative overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='h-screen flex flex-col justify-center items-center gap-4 relative'>
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
          className='space-y-6 flex flex-col h-[95vh] w-[80%] max-w-2xl justify-center relative'
        >
          {/* Декоративные линии */}
          <div className='absolute -left-10 top-0 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent'></div>

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
        </div>
      </div>
    </div>
  );
};

export default Main;
