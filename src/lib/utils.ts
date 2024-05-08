import { ReadonlyURLSearchParams } from "next/navigation";

const queryBuilder = (query: Object) => {
  let queryString = new URLSearchParams(Object.entries(query));
  return queryString.toString();
};

interface CreatePageUrlProps {
  terms: Record<string, string>;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
}

const createPageUrl = ({
  terms,
  pathname,
  searchParams,
}: CreatePageUrlProps) => {
  const params = new URLSearchParams(searchParams);
  const termsEntry = Object.entries(terms);

  params.values();
  termsEntry.forEach((entry) => {
    params.set(entry[0], entry[1]);
  });

  return `${pathname}?${params.toString()}`;
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

export { createPageUrl, queryBuilder, test__delayTime };
