import { Hover } from '@/shared/animations';
import { House } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center gap-2'>
      <h2 className='text-2xl'>Sorry, but page is not found :(</h2>
      <Link to={'/'}>
        <Hover scale={1.05} className='flex items-center gap-1 hover:underline'>
          <House size={20} /> <span>Home</span>
        </Hover>
      </Link>
    </div>
  );
};
