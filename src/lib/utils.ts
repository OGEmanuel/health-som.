import { clsx, type ClassValue } from 'clsx';
import type { NavigateFunction } from 'react-router';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeParameter = (
  paramName: string,
  navigate: NavigateFunction,
) => {
  const searchParams = new URLSearchParams(location.search);

  if (searchParams.has(paramName)) {
    searchParams.delete(paramName);

    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  }
};
