type Pagination<T> = {
  items: Array<T>;
  pageIndex: number;
  pageSize?: number;
  totalPage: number;
};

export type { Pagination };
