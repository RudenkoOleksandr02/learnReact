export type dialogsType = {
    id: number
    name: string
}
export type messageType = {
    id: number
    message: string
}

export type postsType = {
    id: number
    message: string
    likesCount: string | number
}
export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type photosType = {
    small: string | null
    large: string | null
}
export type profileType = {
    [key: string]: any
    userId: string | number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
}