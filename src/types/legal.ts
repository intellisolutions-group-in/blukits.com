export type LegalSection = {
  id: string;
  title: string;
  content: string;
  points?: string[];
};

export type LegalPageData = {
  title: string;
  badge: string;
  description: string;
  intro: string;
  sections: LegalSection[];
  relatedPage: {
    title: string;
    href: string;
    description: string;
  };
};
