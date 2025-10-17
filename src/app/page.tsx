"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up shot of a person coding on a laptop, focusing on the hands and screen." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/6774432/pexels-photo-6774432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Three colleagues brainstorming with laptops in a well-lit office." },
  { "id": "feature-1-image", "url": "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A clean, contemporary workspace featuring a desktop with analytics on the screen and plants for a fresh look." },
  { "id": "feature-2-image", "url": "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A cybersecurity expert inspecting lines of code on multiple monitors in a dimly lit office." },
  { "id": "feature-3-image", "url": "https://images.pexels.com/photos/34325493/pexels-photo-34325493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Electric power line entangled with vegetation against a bright blue sky background." },
  { "id": "team-member-1", "url": "https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Businesswoman presenting data on a large digital screen in a modern office setting." },
  { "id": "team-member-2", "url": "https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Focused woman in a red hoodie using a laptop in a dimly lit room with technology brands displayed." },
  { "id": "team-member-3", "url": "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a male doctor in scrubs with crossed arms and stethoscope on white background." },
  { "id": "client-logos", "url": "https://images.pexels.com/photos/16218527/pexels-photo-16218527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Low angle view of a Starbucks café sign with a palm tree against cloudy sky." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarStyleMinimal brandName="Webild" />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Build Your Future with Us"
            description="Leveraging technology for innovative solutions."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            alt={assetMap.find(a => a.id === "hero-image")?.alt ?? "Modern IT office workspace"}
            buttons={[
              { text: "Contact Us", href: "contact" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We build products that empower teams to create exceptional digital experiences"
            buttons={[
              { text: "Our Values", href: "values" }
            ]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            title="Our Features"
            description="Discover what makes us different"
            features={[
              {
                id: "01",
                title: "Advanced Analytics",
                description: "Track performance with detailed insights",
                imageSrc: assetMap.find(a => a.id === "feature-1-image")?.url ?? "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "feature-1-image")?.alt ?? "Business analytics data"
              },
              {
                id: "02",
                title: "Enhanced Security",
                description: "Protection for what matters most",
                imageSrc: assetMap.find(a => a.id === "feature-2-image")?.url ?? "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "feature-2-image")?.alt ?? "Security technology concept"
              },
              {
                id: "03",
                title: "Cloud Flexibility",
                description: "Innovative solutions for the modern age",
                imageSrc: assetMap.find(a => a.id === "feature-3-image")?.url ?? "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "feature-3-image")?.alt ?? "Cloud infrastructure"
              }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            title="Meet Our Team"
            description="The people behind our success"
            members={[
              {
                id: "1",
                name: "Sophie P.",
                role: "Digital Nomad",
                imageSrc: assetMap.find(a => a.id === "team-member-1")?.url ?? "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "team-member-1")?.alt ?? "Professional team leader portrait"
              },
              {
                id: "2",
                name: "John D.",
                role: "Software Engineer",
                imageSrc: assetMap.find(a => a.id === "team-member-2")?.url ?? "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "team-member-2")?.alt ?? "Software engineer portrait"
              },
              {
                id: "3",
                name: "Emily J.",
                role: "IT Specialist",
                imageSrc: assetMap.find(a => a.id === "team-member-3")?.url ?? "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "team-member-3")?.alt ?? "IT specialist portrait"
              }
            ]}
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            title="Trusted by Industry Leaders"
            description="Join thousands of companies that trust our platform"
            logos={new Array(6).fill(assetMap.find(a => a.id === "client-logos")?.url ?? "/public/images/placeholder.webp")}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay updated"
            description="Subscribe to our newsletter for weekly updates and exclusive content."
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            alt={assetMap.find(a => a.id === "about-image")?.alt ?? "IT company team meeting"}
            mediaPosition="right"
            onSubmit={() => {}}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Company",
                items: [
                  { label: "About", href: "about" },
                  { label: "Team", href: "team" }
                ]
              },
              {
                title: "Resources",
                items: [
                  { label: "Blog", href: "blog" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            copyrightText="© 2025 | Webild"
            onPrivacyClick={() => {}}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}