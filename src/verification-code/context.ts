import { createContext } from 'react';
import { Store } from './store';

export const StoreContext = createContext<Store | null>(null);