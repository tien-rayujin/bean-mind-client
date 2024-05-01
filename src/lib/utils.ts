const queryBuilder = (query: Object) => {
  let queryString = new URLSearchParams(Object.entries(query));
  return queryString.toString();
};

export { queryBuilder };
