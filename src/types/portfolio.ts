export type DecapCrewMember = {
  name?: string;
  role?: string;
};

export type DecapGalleryItem = {
  title?: string;
  type?: string;
  role?: string;
  date?: number;
  location?: string;
  crew?: DecapCrewMember[];
  description?: string;
  photo?: DecapPhotoItem[];
};

export type DecapPhotoItem = {
  image?: string;
  caption?: string;
};

export type GalleryCrewMember = {
  name: string;
  role: string;
};

export type GalleryItem = {
  title: string;
  type: string;
  role: string;
  date: number | null;
  location: string;
  crew: GalleryCrewMember[];
  description: string;
  photos: GalleryPhotoItem[];
  src: string;
};

export type GalleryPhotoItem = {
  image: string;
  caption: string;
};

export type GalleryImageProps = {
  src: string;
  caption: string;
};
