export interface EntirePost {
  key: number,
  post: BlogPost
}
export interface BlogPost {
    id: number;
    documentId: string;
    title: string;
    content: string;
    excerpt: string;
    visibility: boolean;
    readingTime: number | null;
    wrote_at: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    featuredImage: FeaturedImage;
    author: Author;
    category: Category;
  }

export interface FeaturedImage {
    id: number;
    documentId: string;
    name: string;
    width: number;
    height: number;
    url: string;
  }
  
export interface Author {
    id: number;
    documentId: string;
    name: string;
    bio: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    bioImage: ImageData; 
  }
  
export interface Category {
    id: number;
    documentId: string;
    Name: string; 
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }

export interface ImageData {
    id: number;
    documentId: string;
    name: string;
    width: number;
    height: number;
    url: string;
}
  
 
  