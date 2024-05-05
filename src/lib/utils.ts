const queryBuilder = (query: Object) => {
  let queryString = new URLSearchParams(Object.entries(query));
  return queryString.toString();
};

const test__delayTime = async (times?: number) => {
  // delay to test
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(null);
      },
      times ? times : 3000,
    );
  });
};

export { queryBuilder, test__delayTime };
