// website\types\app-config.d.ts

export interface CompanyAddress {
  address: string;
  googleMapLocation?: string;
}

export interface AppConfig {
  _id: string;
  appName: string;
  phoneNumber: string;
  email: string;
  companyAddress: CompanyAddress[];
  facebookLink?: string;
  instagramLink?: string;
  twitterLink?: string;
  youtubeLink?: string;
  whatsAppLink?: string;
  googleAppStoreLink?: string;
  appleAppStoreLink?: string;
}
