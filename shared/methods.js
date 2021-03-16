export const SAVE_DATA = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    
};

export const GET_DATA = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const REMOVE_DATA = key => {
  localStorage.removeItem(key);
};
