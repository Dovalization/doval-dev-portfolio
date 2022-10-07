import { Document } from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";

export interface IProjectFields {
  title: string;
  description: Document;
  stack: string[];
  logo: Asset;
  banner: Asset;
  liveUrl: string;
}

export interface ITestimonialFields {
  authorName: string;
  authorTitle: string;
  testimonialText: string;
  authorAvatar: Asset;
}

export interface IHomepageFields {
  pageName: string;
  heroTitle: string;
  heroTaglines: string[];
  projects: Entry<IProjectFields>[];
  testimonialsSectionTitle: Document;
  testimonialsSectionSubtitle: string;
  testimonials: Entry<ITestimonialFields>[];
  aboutText: Document;
  cvFile: Asset;
  contactSectionTitle: Document;
  contactSectionText: Document;
  phoneNumber: string;
  contactEmail: string;
  locationName: string;
  locationWikiLink: string;
}
