import type { Schema, Struct } from '@strapi/strapi';

export interface MultimediaCallingCard extends Struct.ComponentSchema {
  collectionName: 'components_multimedia_calling_cards';
  info: {
    displayName: 'calling_card';
  };
  attributes: {
    card_graphic: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    date_given: Schema.Attribute.Date;
    greeting: Schema.Attribute.RichText;
    title: Schema.Attribute.RichText;
  };
}

export interface MultimediaHeaderMedia extends Struct.ComponentSchema {
  collectionName: 'components_multimedia_header_medias';
  info: {
    displayName: 'header_media';
  };
  attributes: {
    hero_carousel: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    hero_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    hero_video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SeoSeoInformation extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seo_information';
  };
  attributes: {
    language_code: Schema.Attribute.String;
    meta_description: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    og_site_name: Schema.Attribute.String;
    page_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'multimedia.calling-card': MultimediaCallingCard;
      'multimedia.header-media': MultimediaHeaderMedia;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
