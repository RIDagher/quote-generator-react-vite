// export const getFromStorage = (key) => {
//   const stored = localStorage.getItem(key);
//   return stored ? JSON.parse(stored) : [];
// };

// export const saveToStorage = (key, item) => {
//   const current = getFromStorage(key);
//   const alreadyExists = current.some((q) => q.quote === item.quote);
//   if (!alreadyExists) {
//     const updated = [...current, item];
//     localStorage.setItem(key, JSON.stringify(updated));
//     return true;
//   }
//   return false;
// };

// export const removeFromStorage = (key, itemToRemove) => {
//   const current = getFromStorage(key);
//   const updated = current.filter((q) => q.quote !== itemToRemove.quote);
//   localStorage.setItem(key, JSON.stringify(updated));
// };
