import React, {ReactNode} from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Опционально: если false, анимация запустится сразу (как раньше)
  triggerOnScroll?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0.5,
  triggerOnScroll = true // По умолчанию работает при скролле
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Если triggerOnScroll=false, анимация запустится сразу
  const shouldAnimate = !triggerOnScroll || inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{opacity: 0, scale: 0.5}}
      animate={shouldAnimate ? {opacity: 1, scale: 1} : {}}
      transition={{
        duration: 1.5,
        delay: shouldAnimate ? delay : 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
