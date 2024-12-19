export interface Home {
    aboutMe:           HomeSection;
    redemptionJourney: HomeSection;
    volunteering:      HomeSection;
}

export interface HomeSection {
    id:         string;
    subtitle:   string;
    title:      string;
    paragraph:  string;
    button:     Button;
    image:      string;
    color?:     boolean;
    direction?: string;
}

export interface Button {
    title: string;
    link:  string;
}

