import { useState, useEffect } from 'react';

const isClient = typeof window === 'object';

const getWindowSize = () => {
  return {
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  };
};

const getDimensions = ref => {
  const width = !ref ? getWindowSize().width : ref.current?.offsetWidth || 0;
  const height = !ref ? getWindowSize().height : ref.current?.offsetHeight || 0;
  return { width, height };
};

export default function useDimensions(ref, deps = []) {
  const [dimensions, setDimensions] = useState(getDimensions(ref));

  const updateDimensions = () => {
    setDimensions(getDimensions(ref));
  };

  useEffect(() => {
    if (!isClient) return;
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    updateDimensions();
  }, deps);

  return dimensions;
}
