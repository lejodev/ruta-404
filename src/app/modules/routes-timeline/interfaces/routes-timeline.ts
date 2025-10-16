import { Photo } from "./photo.interface";

export interface IRoutesTimeline {
    id: number,
    name: string,
    destination: string,
    description?: string,
    distance?: number,
    photos?: Photo[],
    youtube_link?: string,
    in_progress?: false,
}
