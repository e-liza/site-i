export default (object: { [key: string]: unknown }) => {
  const clonedObj = { ...object };
  Object.entries(clonedObj).forEach(([key, value]) => {
    if (typeof value === 'string' && value === '') {
      delete clonedObj[key];
    }
  });
  return clonedObj;
};
