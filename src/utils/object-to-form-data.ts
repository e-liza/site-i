type Value = string | number | string[] | File | object | undefined;

export type Serializable<T> = {
  [P in keyof T]: Value;
};

export default (json: { [key: string]: Value }): Readonly<FormData> => {
  const formData = new FormData();
  Object.keys(json).forEach((key) => {
    const value = json[key];
    if (Array.isArray(value)) {
      formData.append(key, value.toString());
    } else if (value instanceof File) {
      formData.append(key, value);
    } else if (typeof value === 'object') {
      formData.append(key, JSON.stringify(value));
    } else if (typeof value === 'string' || typeof value === 'number') {
      formData.append(key, value.toString());
    }
  });
  return formData;
};
