import { IHomepageProps } from "@pages/index";
import { AboutSection } from "./AboutSection";
import { CasesSection } from "./CasesSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import * as S from "./styles";
import { TestimonialsSection } from "./TestimonialsSection";

// Layouts are responsible for holding different components together
// this can be achieved by creating multiple sections whithin the layout

// Naming convention:
// - LayoutName: "MyLayout"
// - LayoutNameProps: "MyLayoutProps"

// Layout prop types should be the same or extend the page's prop types
// In this case, since we're not extending the page's prop types, we use type instead of interface

type HomeLayoutProps = IHomepageProps;

// For components and layouts, the return type is inferred from the component
// Props should be destructured before being passed to the component, like so:

export const HomeLayout = ({ homepage }: HomeLayoutProps) => {
  return (
    <S.Wrapper>
      <HeroSection
        subtitle={homepage.heroSubtitle}
        title={homepage.heroTitle}
        taglines={homepage.heroTaglines}
      />
      <CasesSection projects={homepage.projects} />
      <TestimonialsSection
        testimonials={homepage.testimonials}
        title={homepage.testimonialsSectionTitle}
        subtitle={homepage.testimonialsSectionSubtitle}
      />
      <AboutSection
        aboutText={homepage.aboutText}
        cvFile={homepage.cvFile}
        profileImage={homepage.profileImage}
      />
      <ContactSection
        title={homepage.contactSectionTitle}
        text={homepage.contactSectionText}
        phoneNumber={homepage.phoneNumber}
        contactEmail={homepage.contactEmail}
        locationName={homepage.locationName}
        locationWikiLink={homepage.locationWikiLink}
      />
    </S.Wrapper>
  );
};
