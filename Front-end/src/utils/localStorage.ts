export const setStoredData = (key: string = "", data = {}): void =>
  localStorage.setItem(key, JSON.stringify(data));

export const getStoredData = (key: string = "key") => {
  const storedData = localStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
};

export const removeStorageData = (key: string = "key"): void =>
  localStorage.removeItem(key);
