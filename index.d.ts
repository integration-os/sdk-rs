/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface IntegrationOsOptions {
  serverUrl: string;
}
export interface UnifiedOptions {
  responsePassthrough?: boolean;
  passthroughHeaders?: Record<string, string>;
  passthroughQuery?: Record<string, string>;
}
export interface DeleteOptions {
  modifyToken?: string;
}
export interface Count {
  count: number;
}
export interface Pagination {
  limit?: number;
  pageSize: number;
}
export interface ListFilter {
  createdAfter?: string;
  createdBefore?: string;
  updatedAfter?: string;
  updatedBefore?: string;
  limit?: number;
  cursor?: string;
}
export class Response<Type> {
  unified?: Type;
  passthrough?: any;
  meta: object;
}
export class ListResponse<Type> {
  unified: Array<Type>;
  passthrough?: any;
  pagination: Pagination;
  meta: object;
}
export class UnifiedApi<Type> {
  constructor();
  create(
    object: Type,
    options?: UnifiedOptions | undefined | null
  ): Promise<Response<Type>>;
  list(
    filter?: ListFilter | undefined | null,
    options?: UnifiedOptions | undefined | null
  ): Promise<ListResponse<Type>>;
  get(
    id: string,
    options?: UnifiedOptions | undefined | null
  ): Promise<Response<Type>>;
  update(
    id: string,
    object: Type,
    options?: UnifiedOptions | undefined | null
  ): Promise<Response<Type>>;
  count(options?: UnifiedOptions | undefined | null): Promise<Response<Count>>;
  delete(
    id: string,
    deleteOptions?: DeleteOptions | undefined | null,
    options?: UnifiedOptions | undefined | null
  ): Promise<Response<Type>>;
}
export class IntegrationOS {
  constructor(
    accessKey: string,
    options?: IntegrationOsOptions | undefined | null
  );
  customers(connectionKey: string): UnifiedApi<Customer>;
}

/// Common models
export type Customers = {
  id?: string | undefined;
  title?: string | undefined;
  fullName?: string | undefined;
  firstName?: string | undefined;
  middleName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  phoneNumber?: string | undefined;
  dateOfBirth?: Date | undefined;
  addresses?: Array<Addresses> | undefined;
  defaultAddress?: Addresses | undefined;
  company?: string | undefined;
  companyId?: string | undefined;
  currency?: Currency | undefined;
  notes?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  status?: CustomerStatus | undefined;
  customerSegment?: string | undefined;
  customerType?: CustomerType | undefined;
  loyaltyProgramMembership?: string | undefined;
  preferredContactMethod?: CommunicationMethod | undefined;
  tags?: Array<string> | undefined;
  metadata?: string | undefined;
  socialProfiles?: Array<SocialProfiles> | undefined;
  source?: string | undefined;
  modifyToken?: string | undefined;
};

export type Addresses = {
  id?: string | undefined;
  contactId?: string | undefined;
  accountId?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  name?: string | undefined;
  companyName?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  street?: string | undefined;
  addressLine2?: string | undefined;
  city?: string | undefined;
  province?: string | undefined;
  region?: string | undefined;
  postalCode?: string | undefined;
  postalCodeExtension?: string | undefined;
  country?: string | undefined;
  countryCode?: string | undefined;
  type?: ContactAddressType | undefined;
  geoLocation?: GeoCoordinates | undefined;
  customFields?: Array<CustomAttributes> | undefined;
  subdivisionCode?: string | undefined;
};

export enum ContactAddressType {
  Home = "home",
  Work = "work",
  Other = "other",
  Personal = "personal",
  Business = "business",
  Billing = "billing",
  Shipping = "shipping",
  Temporary = "temporary",
}

export type GeoCoordinates = {
  latitude?: number | undefined;
  longitude?: number | undefined;
  altitude?: number | undefined;
  accuracy?: number | undefined;
  altitudeAccuracy?: number | undefined;
  heading?: number | undefined;
  speed?: number | undefined;
  timestamp?: Date | undefined;
};

export type CustomAttributes = {
  id?: string | undefined;
  fieldName?: string | undefined;
  fieldValue?: string | undefined;
  fieldType?: DataType | undefined;
};

export enum DataType {
  String = "string",
  Number = "number",
  Boolean = "boolean",
  Date = "date",
  Json = "json",
  Array = "array",
  Object = "object",
  Null = "null",
  Undefined = "undefined",
  Binary = "binary",
}

export enum Currency {
  Aed = "AED",
  Afn = "AFN",
  All = "ALL",
  Amd = "AMD",
  Ang = "ANG",
  Aoa = "AOA",
  Ars = "ARS",
  Aud = "AUD",
  Awg = "AWG",
  Azn = "AZN",
  Bam = "BAM",
  Bbd = "BBD",
  Bdt = "BDT",
  Bgn = "BGN",
  Bhd = "BHD",
  Bif = "BIF",
  Bmd = "BMD",
  Bnd = "BND",
  Bob = "BOB",
  Brl = "BRL",
  Bsd = "BSD",
  Btn = "BTN",
  Bwp = "BWP",
  Byn = "BYN",
  Bzd = "BZD",
  Cad = "CAD",
  Cdf = "CDF",
  Chf = "CHF",
  Clp = "CLP",
  Cny = "CNY",
  Cop = "COP",
  Crc = "CRC",
  Cuc = "CUC",
  Cup = "CUP",
  Cve = "CVE",
  Czk = "CZK",
  Djf = "DJF",
  Dkk = "DKK",
  Dop = "DOP",
  Dzd = "DZD",
  Egp = "EGP",
  Ern = "ERN",
  Etb = "ETB",
  Eur = "EUR",
  Fjd = "FJD",
  Fkp = "FKP",
  Fok = "FOK",
  Gbp = "GBP",
  Gel = "GEL",
  Ggp = "GGP",
  Ghs = "GHS",
  Gip = "GIP",
  Gmd = "GMD",
  Gnf = "GNF",
  Gtq = "GTQ",
  Gyd = "GYD",
  Hkd = "HKD",
  Hnl = "HNL",
  Hrk = "HRK",
  Htg = "HTG",
  Huf = "HUF",
  Idr = "IDR",
  Ils = "ILS",
  Imp = "IMP",
  Inr = "INR",
  Iqd = "IQD",
  Irr = "IRR",
  Isk = "ISK",
  Jep = "JEP",
  Jmd = "JMD",
  Jod = "JOD",
  Jpy = "JPY",
  Kes = "KES",
  Kgs = "KGS",
  Khr = "KHR",
  Kid = "KID",
  Kmf = "KMF",
  Kpw = "KPW",
  Krw = "KRW",
  Kwd = "KWD",
  Kyd = "KYD",
  Kzt = "KZT",
  Lak = "LAK",
  Lbp = "LBP",
  Lkr = "LKR",
  Lrd = "LRD",
  Lsl = "LSL",
  Lyd = "LYD",
  Mad = "MAD",
  Mdl = "MDL",
  Mga = "MGA",
  Mkd = "MKD",
  Mmk = "MMK",
  Mnt = "MNT",
  Mop = "MOP",
  Mru = "MRU",
  Mur = "MUR",
  Mvr = "MVR",
  Mwk = "MWK",
  Mxn = "MXN",
  Myr = "MYR",
  Mzn = "MZN",
  Nad = "NAD",
  Ngn = "NGN",
  Nio = "NIO",
  Nok = "NOK",
  Npr = "NPR",
  Nzd = "NZD",
  Omr = "OMR",
  Pab = "PAB",
  Pen = "PEN",
  Pgk = "PGK",
  Php = "PHP",
  Pkr = "PKR",
  Pln = "PLN",
  Pyg = "PYG",
  Qar = "QAR",
  Ron = "RON",
  Rsd = "RSD",
  Rub = "RUB",
  Rwf = "RWF",
  Sar = "SAR",
  Sbd = "SBD",
  Scr = "SCR",
  Sdg = "SDG",
  Sek = "SEK",
  Sgd = "SGD",
  Shp = "SHP",
  Sll = "SLL",
  Sos = "SOS",
  Srd = "SRD",
  Ssp = "SSP",
  Stn = "STN",
  Syp = "SYP",
  Szl = "SZL",
  Thb = "THB",
  Tjs = "TJS",
  Tmt = "TMT",
  Tnd = "TND",
  Top = "TOP",
  Try = "TRY",
  Ttd = "TTD",
  Tvd = "TVD",
  Twd = "TWD",
  Tzs = "TZS",
  Uah = "UAH",
  Ugx = "UGX",
  Usd = "USD",
  Uyu = "UYU",
  Uzs = "UZS",
  Ves = "VES",
  Vnd = "VND",
  Vuv = "VUV",
  Wst = "WST",
  Xaf = "XAF",
  Xcd = "XCD",
  Xdr = "XDR",
  Xof = "XOF",
  Xpf = "XPF",
  Yer = "YER",
  Zar = "ZAR",
  Zmw = "ZMW",
  Zwl = "ZWL",
}

export enum CustomerStatus {
  Active = "active",
  Inactive = "inactive",
  Archived = "archived",
  Pending = "pending",
  Suspended = "suspended",
}

export enum CustomerType {
  Retail = "retail",
  Wholesale = "wholesale",
  Online = "online",
  B2b = "b2b",
  B2c = "b2c",
  Corporate = "corporate",
}

export enum CommunicationMethod {
  Email = "email",
  Phone = "phone",
  Text = "text",
  Mail = "mail",
  InPerson = "in-person",
  Sms = "sms",
  PushNotification = "push-notification",
  InstantMessage = "instant-message",
  SocialMedia = "social-media",
  VideoCall = "video-call",
  Other = "other",
}

export type SocialProfiles = {
  type?: SocialPlatform | undefined;
  username?: string | undefined;
  displayName?: string | undefined;
  url?: string | undefined;
  avatarUrl?: string | undefined;
  email?: string | undefined;
  additionalInfo?: Metadata | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  active?: boolean | undefined;
  deleted?: boolean | undefined;
};

export enum SocialPlatform {
  Facebook = "facebook",
  X = "x",
  Twitter = "twitter",
  Linkedin = "linkedin",
  Instagram = "instagram",
  Tiktok = "tiktok",
  Pinterest = "pinterest",
  Youtube = "youtube",
  Snapchat = "snapchat",
  Reddit = "reddit",
  Tumblr = "tumblr",
  OtherSocialPlatform = "other-social-platform",
}

export type Metadata = {
  id?: string | undefined;
  key?: string | undefined;
  value?: string | undefined;
  type?: DataType | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  entityId?: string | undefined;
  entityType?: string | undefined;
};
