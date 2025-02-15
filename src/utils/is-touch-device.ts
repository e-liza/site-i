export default (): boolean => {
  return !!('ontouchstart' in window || navigator.maxTouchPoints);
};
