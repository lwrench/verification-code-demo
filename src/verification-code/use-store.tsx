import {   useRef } from 'react';
import { Store } from './store';

export function useStore() {
  const storeRef = useRef<Store | null>(null);

  if (!storeRef.current) {
    console.log("init");
    storeRef.current = new Store();
  }

  return [storeRef.current]
  
}