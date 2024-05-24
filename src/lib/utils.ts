import { ReadonlyURLSearchParams } from "next/navigation";

const queryBuilder = (query: Object): string => {
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
}: CreatePageUrlProps): string => {
  const params = new URLSearchParams(searchParams);
  const termsEntry = Object.entries(terms);

  // params.values();
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

const isGuid = (input: string) => {
  const guidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return guidRegex.test(input);
};

export { createPageUrl, queryBuilder, test__delayTime, isGuid };
