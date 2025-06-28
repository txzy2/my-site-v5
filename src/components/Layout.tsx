import React from 'react';
import {Outlet} from 'react-router-dom';

import {FadeIn} from '@/shared/animations';

/**
 * The Layout component serves as the main structure of the application.
 * It initially displays a loading screen with an animated loader for 4 seconds,
 * after which it reveals the main content including a header, outlet for nested routes,
 * and a footer with creator information and a link to the GitHub repository.
 *
 * @returns {JSX.Element} The rendered Layout component.
 */
const Layout: React.FC = () => {
  return (
    <>
      <Outlet />

      <footer className='h-[5vh] text-[13px] flex items-center justify-center relative'>
        <div className='flex items-center justify-center gap-1'>
          created by
          <FadeIn delay={1.5}>
            <span className='font-bold text-orange-400'>txzy </span>
          </FadeIn>
          {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Layout;
