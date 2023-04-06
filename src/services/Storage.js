export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};

export const getLocalStogae = (key) => {
  return localStorage.getItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
