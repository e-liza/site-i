type Value = string | number | string[] | File | Record<string, unknown> | undefined;

export type Serializable<T> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [P in keyof T]: Value;
};

const jsonToFormData = (json: Record<string, Value>): Readonly<FormData> => {
  const formData = new FormData();

  Object.entries(json).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      formData.append(key, value.join(',')); // Convert array to comma-separated string
    } else if (value instanceof File) {
      formData.append(key, value);
    } else if (value && typeof value === 'object') {
      formData.append(key, JSON.stringify(value));
    } else if (typeof value === 'string' || typeof value === 'number') {
      formData.append(key, value.toString());
    }
  });

  return formData;
};

export default jsonToFormData;
