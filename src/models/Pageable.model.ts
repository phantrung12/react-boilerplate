export interface Pageable<T> {
  items?: T[];
  pageIndex?: number;
  pageSize?: number;
  totalItems?: number;
  totalPages?: number;
}
