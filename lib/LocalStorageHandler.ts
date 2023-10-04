// save value to local storage
const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export { saveToLocalStorage, getFromLocalStorage };
