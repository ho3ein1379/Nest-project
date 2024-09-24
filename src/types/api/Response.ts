export interface ApiResponseTypeSingle<T> {
    data: EntityType<T>
    meta: MetaType
}

export interface ApiResponseType<T> {
    data: EntityType<T>[]
    meta: MetaType
}

export interface EntityType<T> {
    id: number
    attributes: T
}

export interface PopulateType<T> {
    data: Array<EntityType<T>>
}

export interface MetaType {
    pagination: PaginationType
}

export interface PaginationType {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
