export interface CloudinaryResource {
    resources:   Resource[];
    next_cursor: string;
}

export interface Resource {
    asset_id:   string;
    public_id:  string;
    format:     string;
    version:    number;
    url:        string;
    secure_url: string;
}
