import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Hover } from '@/shared/animations';
import { IHeaderLinks, list } from '@/shared/constants/links';

const Header: React.FC = () => {
  const [links, SetLinks] = useState<IHeaderLinks[]>();

  useEffect(() => {
    console.log(list);
    SetLinks(list);
  }, [list]);

  return (
    <div className='w-full h-[10vh] flex items-center justify-center z-10'>
      <div className='flex items-center justify-around w-[100%]'>
        <Hover scale={1.1}>
          <Link className='font-bold' to='/'>
            <img src='/logo2.png' alt='Logo' width={100} />
          </Link>
        </Hover>

        <nav>
          <ul className='flex items-center gap-3 text-[12px]'>
            {links &&
              links.map((i: IHeaderLinks) => (
                <Hover scale={1.05}>
                  <li key={i.title}>
                    <a href={i.link}>{i.title}</a>
                  </li>
                </Hover>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
