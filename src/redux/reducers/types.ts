export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: String|null,
    large: String|null
}
export type UserType = {
    id: number | null,
    name: string | null,
    status?: string | null,
    photos: PhotosType | null,
    followed: boolean | null
}