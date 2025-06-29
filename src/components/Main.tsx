import { FadeIn } from '@/shared/animations';
import { ArrowDown } from 'lucide-react';
import React from 'react';

import Typewriter from 'typewriter-effect';
import Section2 from './main/Section2';
import Section3 from './main/Section3';

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

        <div className='space-y-6 flex flex-col min-h-screen w-[80%] mt-6 max-w-2xl justify-center relative'>
          <Section2 />
        </div>

        <div className='space-y-6 flex flex-col min-h-screen w-[80%] max-w-2xl justify-center relative'>
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default Main;
