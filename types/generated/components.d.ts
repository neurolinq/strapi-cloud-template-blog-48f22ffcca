import type { Schema, Struct } from '@strapi/strapi';

export interface AboutpageCareApproach extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_care_approaches';
  info: {
    displayName: 'Care Approach';
  };
  attributes: {
    cards: Schema.Attribute.Component<'aboutpage.care-card', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface AboutpageCareCard extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_care_cards';
  info: {
    displayName: 'Care Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface AboutpageCoreValues extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_core_values';
  info: {
    displayName: 'Core Values';
  };
  attributes: {
    cards: Schema.Attribute.Component<'homepage.care-standard-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface AboutpageOurMission extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_our_missions';
  info: {
    displayName: 'Our Mission';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface AboutpageOurStory extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_our_stories';
  info: {
    displayName: 'Our Story';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.Text;
  };
}

export interface ContactpageCards extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ContactpageContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_contact_details';
  info: {
    displayName: 'Contact Details';
  };
  attributes: {
    cards: Schema.Attribute.Component<'contactpage.social-cards', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ContactpageFaq extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    cards: Schema.Attribute.Component<'contactpage.cards', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ContactpageSocialCards extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_social_cards';
  info: {
    displayName: 'Social Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface FeespageCorporatePricing extends Struct.ComponentSchema {
  collectionName: 'components_feespage_corporate_pricings';
  info: {
    displayName: 'Corporate Pricing';
  };
  attributes: {
    card: Schema.Attribute.Component<'servicepage.medication', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface FeespageFeesCard extends Struct.ComponentSchema {
  collectionName: 'components_feespage_fees_cards';
  info: {
    displayName: 'Fees Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    lists: Schema.Attribute.Component<'servicepage.lists', true>;
    price: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface FeespageOptions extends Struct.ComponentSchema {
  collectionName: 'components_feespage_options';
  info: {
    displayName: 'Options';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.Text;
  };
}

export interface FeespageOurCommitment extends Struct.ComponentSchema {
  collectionName: 'components_feespage_our_commitments';
  info: {
    displayName: 'Our Commitment';
  };
  attributes: {
    cards: Schema.Attribute.Component<'feespage.fees-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface FeespagePricingOptions extends Struct.ComponentSchema {
  collectionName: 'components_feespage_pricing_options';
  info: {
    displayName: 'Pricing Options';
  };
  attributes: {
    cards: Schema.Attribute.Component<'feespage.options', true>;
  };
}

export interface HomepageCareStandard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_care_standards';
  info: {
    displayName: 'Care Standard';
    icon: 'eye';
  };
  attributes: {
    cards: Schema.Attribute.Component<'homepage.care-standard-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageCareStandardCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_care_standard_cards';
  info: {
    displayName: 'Care Standard Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageFounder extends Struct.ComponentSchema {
  collectionName: 'components_homepage_founders';
  info: {
    displayName: 'Founder';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    profile: Schema.Attribute.Component<'homepage.profile', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageHerosection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_herosections';
  info: {
    displayName: 'Herosection';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomepagePathway extends Struct.ComponentSchema {
  collectionName: 'components_homepage_pathways';
  info: {
    displayName: 'Pathway';
  };
  attributes: {
    cards: Schema.Attribute.Component<'homepage.pathway-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomepagePathwayCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_pathway_cards';
  info: {
    displayName: 'Pathway Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageProfile extends Struct.ComponentSchema {
  collectionName: 'components_homepage_profiles';
  info: {
    displayName: 'profile';
  };
  attributes: {
    designation: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.Text;
  };
}

export interface LayoutContact extends Struct.ComponentSchema {
  collectionName: 'components_layout_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contact: Schema.Attribute.Component<'layout.contact', true>;
    copyright: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images'>;
    ourServices: Schema.Attribute.Component<'shared.links', true>;
    privacy: Schema.Attribute.Component<'layout.privacy', false>;
    quicksLinks: Schema.Attribute.Component<'shared.links', true>;
    socials: Schema.Attribute.Component<'layout.contact', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    links: Schema.Attribute.Component<'shared.links', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutPrivacy extends Struct.ComponentSchema {
  collectionName: 'components_layout_privacies';
  info: {
    displayName: 'Privacy';
  };
  attributes: {
    tags: Schema.Attribute.Component<'layout.tags', true>;
    title: Schema.Attribute.Text;
  };
}

export interface LayoutTags extends Struct.ComponentSchema {
  collectionName: 'components_layout_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ServicepageAssessment extends Struct.ComponentSchema {
  collectionName: 'components_servicepage_assessments';
  info: {
    displayName: 'Assessment';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ServicepageLists extends Struct.ComponentSchema {
  collectionName: 'components_servicepage_lists';
  info: {
    displayName: 'Lists';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface ServicepageMedication extends Struct.ComponentSchema {
  collectionName: 'components_servicepage_medications';
  info: {
    displayName: 'Medication';
    icon: 'plus';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    lists: Schema.Attribute.Component<'servicepage.lists', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['yellow', 'white', 'green']>;
    href: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    href: Schema.Attribute.Text;
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aboutpage.care-approach': AboutpageCareApproach;
      'aboutpage.care-card': AboutpageCareCard;
      'aboutpage.core-values': AboutpageCoreValues;
      'aboutpage.our-mission': AboutpageOurMission;
      'aboutpage.our-story': AboutpageOurStory;
      'contactpage.cards': ContactpageCards;
      'contactpage.contact-details': ContactpageContactDetails;
      'contactpage.faq': ContactpageFaq;
      'contactpage.social-cards': ContactpageSocialCards;
      'feespage.corporate-pricing': FeespageCorporatePricing;
      'feespage.fees-card': FeespageFeesCard;
      'feespage.options': FeespageOptions;
      'feespage.our-commitment': FeespageOurCommitment;
      'feespage.pricing-options': FeespagePricingOptions;
      'homepage.care-standard': HomepageCareStandard;
      'homepage.care-standard-card': HomepageCareStandardCard;
      'homepage.founder': HomepageFounder;
      'homepage.herosection': HomepageHerosection;
      'homepage.pathway': HomepagePathway;
      'homepage.pathway-card': HomepagePathwayCard;
      'homepage.profile': HomepageProfile;
      'layout.contact': LayoutContact;
      'layout.cta': LayoutCta;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.privacy': LayoutPrivacy;
      'layout.tags': LayoutTags;
      'servicepage.assessment': ServicepageAssessment;
      'servicepage.lists': ServicepageLists;
      'servicepage.medication': ServicepageMedication;
      'shared.button': SharedButton;
      'shared.hero-section': SharedHeroSection;
      'shared.links': SharedLinks;
    }
  }
}
