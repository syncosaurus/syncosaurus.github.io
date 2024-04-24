import { useRef } from 'react';
import useIsVisible from '@site/src/hooks/useIsVisible'

const FadeInSection = ({ children }) => {
  const sectionRef = useRef();
  const isVisible = useIsVisible(sectionRef);

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity ease-in duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
