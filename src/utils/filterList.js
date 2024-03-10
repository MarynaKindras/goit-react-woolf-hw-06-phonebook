export const filterList = (key, list, filterValue) =>
  list.filter(item =>
    item[key].toLowerCase().includes(filterValue.toLowerCase())
  );
