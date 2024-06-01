'use client';
import React, { useEffect, useRef } from 'react'

const useClickoutside = (updateFunction: React.Dispatch<React.SetStateAction<boolean>>) => {

    const ref = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            updateFunction(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line
      }, []);

  return ref;
}

export default useClickoutside;