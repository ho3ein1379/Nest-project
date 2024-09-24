export interface AuthResponseType {
    status: number
    jwt: string
    user: UserType
}

export interface UserType {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
}
