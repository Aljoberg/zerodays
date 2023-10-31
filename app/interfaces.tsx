interface ImageObject {
    url: string;
    id: number;
    likes: number;
    dislikes: number;
    difference: number;
}
interface ImageObjectProps {
    image: ImageObject;
}
interface ImagesPageProps {
    initialImages: ImageObject[];
}
export type {
    ImageObject,
    ImageObjectProps,
    ImagesPageProps
}