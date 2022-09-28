import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, ApiDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useApiDispatch = () => useDispatch<ApiDispatch>();
export const useApiSelector: TypedUseSelectorHook<RootState> = useSelector;
