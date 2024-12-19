export interface BookReview {
    id:          number;
    documentId:  string;
    author:      string;
    wrote_at:    Date;
    content:     string;
    visibility:  boolean;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}
