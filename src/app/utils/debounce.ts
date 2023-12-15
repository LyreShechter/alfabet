export function debounce(func: Function, delay: number) {
  let timerId: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timerId);

    timerId = setTimeout(function () {
      func(...args);
    }, delay);
  };
}
