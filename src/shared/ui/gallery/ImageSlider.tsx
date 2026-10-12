import { forwardRef, useImperativeHandle, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ImageSliderHandle {
  next: () => void;
  prev: () => void;
}

interface ImageSliderProps {
  images: string[];
  alt?: string;
  className?: string;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 })
};

const ImageSlider = forwardRef<ImageSliderHandle, ImageSliderProps>(
  ({ images, alt = '', className = '' }, ref) => {
    const [[index, dir], setState] = useState<[number, number]>([0, 1]);

    const go = (delta: number) =>
      setState(([current]) => [
        (current + delta + images.length) % images.length,
        delta
      ]);

    const goTo = (target: number) =>
      setState(([current]) => [target, target > current ? 1 : -1]);

    useImperativeHandle(ref, () => ({
      next: () => go(1),
      prev: () => go(-1)
    }));

    if (!images.length) return null;

    return (
      <div
        className={`group/slider relative aspect-video w-full overflow-hidden bg-elevated ${className}`}
      >
        <AnimatePresence initial={false} custom={dir} mode='popLayout'>
          <motion.img
            key={index}
            src={images[index]}
            alt={alt}
            custom={dir}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className='absolute inset-0 h-full w-full object-cover'
            loading='lazy'
            draggable={false}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />

            <button
              type='button'
              onClick={e => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label='Предыдущее изображение'
              className='absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur transition-all hover:bg-black/60 focus-visible:opacity-100 group-hover/slider:opacity-100'
            >
              <ChevronLeft className='h-4 w-4' />
            </button>
            <button
              type='button'
              onClick={e => {
                e.stopPropagation();
                go(1);
              }}
              aria-label='Следующее изображение'
              className='absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur transition-all hover:bg-black/60 focus-visible:opacity-100 group-hover/slider:opacity-100'
            >
              <ChevronRight className='h-4 w-4' />
            </button>

            <span className='absolute right-3 top-3 z-10 rounded-full bg-black/50 px-2 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur'>
              {index + 1} / {images.length}
            </span>

            <div className='absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5'>
              {images.map((image, i) => (
                <button
                  key={image}
                  type='button'
                  onClick={e => {
                    e.stopPropagation();
                    goTo(i);
                  }}
                  aria-label={`Изображение ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? 'w-5 bg-white'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
);

ImageSlider.displayName = 'ImageSlider';

export default ImageSlider;
