export const debounce = (func: Function, delay: number = 500) => {
  let timeoutId;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
