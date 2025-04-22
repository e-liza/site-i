const isTouchDevice = (): boolean => {
  return !!('ontouchstart' in window || navigator.maxTouchPoints);
};

export default isTouchDevice;
