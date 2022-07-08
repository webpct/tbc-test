export interface PaginationResponse<EntityType> {
  entities: EntityType[];
  pagination: {
    currentPage: number,
    pageSize: number,
    pages: number
  };
}
