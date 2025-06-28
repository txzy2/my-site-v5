import React from 'react';
import {Loader} from 'lucide-react';

import {FadeIn, Hover} from '@/shared/animations';

interface LoaderProps {
  iconSize?: number;
  className?: string;
  needSpin?: boolean;
  title: {
    need: boolean;
    text?: string;
    size?: number;
  };
  sub?: boolean;
}

/**
 * Props for the Loader component
 * @type {LoaderProps}
 * @property {number} [iconSize=16] - The size of the loader icon.
 * @property {string} [className] - The class name to apply to the loader container.
 * @property {boolean} [needSpin=true] - Whether to show the loader icon.
 * @property {boolean} [title.need=true] - Whether to show the title.
 * @property {string} [title.text='Loading...'] - The text to show in the title.
 * @property {number} [title.size=16] - The size of the title text.
 * @property {boolean} [sub=false] - Whether to show the subtitle.
 * @returns {JSX.Element} The rendered Loader component.
 */
const LoaderComponent: React.FC<LoaderProps> = props => {
  return (
    <div className={props.className || 'flex items-center gap-2'}>
      {
        props.needSpin && (
          <Loader className='animate-spin' size={props.iconSize || 16} />
        )
      }

      <div className='flex items-center gap-1'>
        {props.title.need && (
          <FadeIn delay={1}>
            <h3
              className={`text-[${
                props.title.size ? props.title.size : 16
              }px] `}
            >
              {props.title.text || 'Loading...'}
            </h3>
          </FadeIn>
        )}

        {props.sub && (
          <FadeIn delay={2}>
            <a className='flex items-center' href='#'>
              <Hover scale={1.05}>
                <img src='/logo2.png' alt='logo' width={80} />
              </Hover>
            </a>
          </FadeIn>
        )}
      </div>
    </div>
  );
};

export default LoaderComponent;
