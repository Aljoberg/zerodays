interface ImageObject {
    url: string;
    id: number;
    likes: number;
    dislikes: number;
    difference: number;
}
interface ImageObjectProps {
    image: ImageObject;
    onVote: Function;
    id: number;
}
interface ImagesPageProps {
    initialImages: ImageObject[];
}
export type {
    ImageObject,
    ImageObjectProps,
    ImagesPageProps
}