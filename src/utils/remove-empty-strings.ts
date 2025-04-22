const removeEmptyStrings = (object: Record<string, unknown>): Record<string, unknown> => {
  return Object.fromEntries(
    Object.entries(object).filter(([_, value]) => !(typeof value === 'string' && value === '')),
  );
};

export default removeEmptyStrings;
