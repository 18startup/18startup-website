'use client'
import styles from './page.module.css';
import React, { useEffect, useRef, useState } from 'react';

const LazyLoadYTFrame = ({ src, title }: {src: string, title: string}) => {
  const iframeRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div ref={iframeRef} className={styles.frame__box}>
      {isLoaded && (
        <iframe
          width="480"
          height="270"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LazyLoadYTFrame;
