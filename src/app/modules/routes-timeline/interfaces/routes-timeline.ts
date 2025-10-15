export interface IRoutesTimeline {
    id: number,
    name: string,
    destination: string,
    description?: string,
    distance?: number,
    photos?: string[],
    youtube_link?: string,
    in_progress?: false,
}
