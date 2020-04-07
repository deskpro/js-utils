const debounce = (callback, time = 250, immediate = false) => {
  let interval;
  const context = this;
  return (...args) => {
    const later = () => {
      interval = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    };
    const callNow = immediate && !interval;
    clearTimeout(interval);
    interval = setTimeout(later, time);
    if (callNow) {
      callback.apply(context, args);
    }
  };
};
export default debounce;
