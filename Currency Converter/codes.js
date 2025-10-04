const countryList = {
  AED: "AE", // United Arab Emirates Dirham - United Arab Emirates
  AFN: "AF", // Afghani - Afghanistan
  ALL: "AL", // Lek - Albania
  AMD: "AM", // Dram - Armenia
  ANG: "AN", // Netherlands Antillean Guilder - Netherlands Antilles
  AOA: "AO", // Kwanza - Angola
  ARS: "AR", // Peso - Argentina
  AUD: "AU", // Australian Dollar - Australia
  AZN: "AZ", // Manat - Azerbaijan
  BAM: "BA", // Convertible Mark - Bosnia and Herzegovina
  BBD: "BB", // Barbados Dollar - Barbados
  BDT: "BD", // Taka - Bangladesh
  BGN: "BG", // Lev - Bulgaria
  BHD: "BH", // Bahraini Dinar - Bahrain
  BIF: "BI", // Burundi Franc - Burundi
  BMD: "BM", // Bermudian Dollar - Bermuda
  BND: "BN", // Brunei Dollar - Brunei Darussalam
  BOB: "BO", // Boliviano - Bolivia
  BRL: "BR", // Real - Brazil
  BSD: "BS", // Bahamian Dollar - Bahamas
  BTN: "BT", // Ngultrum - Bhutan
  BWP: "BW", // Pula - Botswana
  BYN: "BY", // Belarusian Ruble - Belarus
  BZD: "BZ", // Belize Dollar - Belize
  CAD: "CA", // Canadian Dollar - Canada
  CHF: "CH", // Swiss Franc - Switzerland
  CLP: "CL", // Chilean Peso - Chile
  CNY: "CN", // Yuan Renminbi - China
  COP: "CO", // Colombian Peso - Colombia
  CRC: "CR", // Costa Rican Colon - Costa Rica
  CUP: "CU", // Cuban Peso - Cuba
  CZK: "CZ", // Czech Koruna - Czech Republic
  DKK: "DK", // Danish Krone - Denmark
  DOP: "DO", // Dominican Peso - Dominican Republic
  DZD: "DZ", // Algerian Dinar - Algeria
  EGP: "EG", // Egyptian Pound - Egypt
  ETB: "ET", // Ethiopian Birr - Ethiopia
  EUR: "EU", // Euro - European Union
  GBP: "GB", // Pound Sterling - United Kingdom
  GEL: "GE", // Lari - Georgia
  GHS: "GH", // Cedi - Ghana
  GMD: "GM", // Dalasi - Gambia
  GNF: "GN", // Guinea Franc - Guinea
  GTQ: "GT", // Quetzal - Guatemala
  GYD: "GY", // Guyana Dollar - Guyana
  HKD: "HK", // Hong Kong Dollar - Hong Kong
  HNL: "HN", // Lempira - Honduras
  HRK: "HR", // Kuna - Croatia
  HTG: "HT", // Gourde - Haiti
  HUF: "HU", // Forint - Hungary
  IDR: "ID", // Rupiah - Indonesia
  ILS: "IL", // New Israeli Sheqel - Israel
  INR: "IN", // Indian Rupee - India
  IQD: "IQ", // Iraqi Dinar - Iraq
  IRR: "IR", // Iranian Rial - Iran
  ISK: "IS", // Iceland Krona - Iceland
  JMD: "JM", // Jamaican Dollar - Jamaica
  JOD: "JO", // Jordanian Dinar - Jordan
  JPY: "JP", // Yen - Japan
  KES: "KE", // Kenyan Shilling - Kenya
  KGS: "KG", // Som - Kyrgyzstan
  KHR: "KH", // Riel - Cambodia
  KPW: "KP", // North Korean Won - North Korea
  KRW: "KR", // South Korean Won - South Korea
  KWD: "KW", // Kuwaiti Dinar - Kuwait
  KZT: "KZ", // Tenge - Kazakhstan
  LAK: "LA", // Kip - Lao PDR
  LBP: "LB", // Lebanese Pound - Lebanon
  LKR: "LK", // Sri Lanka Rupee - Sri Lanka
  LRD: "LR", // Liberian Dollar - Liberia
  LYD: "LY", // Libyan Dinar - Libya
  MAD: "MA", // Moroccan Dirham - Morocco
  MDL: "MD", // Moldovan Leu - Moldova
  MGA: "MG", // Ariary - Madagascar
  MKD: "MK", // Denar - North Macedonia
  MMK: "MM", // Kyat - Myanmar
  MNT: "MN", // Tugrik - Mongolia
  MOP: "MO", // Pataca - Macao
  MUR: "MU", // Mauritius Rupee - Mauritius
  MVR: "MV", // Rufiyaa - Maldives
  MWK: "MW", // Malawi Kwacha - Malawi
  MXN: "MX", // Mexican Peso - Mexico
  MYR: "MY", // Malaysian Ringgit - Malaysia
  MZN: "MZ", // Mozambique Metical - Mozambique
  NAD: "NA", // Namibia Dollar - Namibia
  NGN: "NG", // Naira - Nigeria
  NIO: "NI", // Cordoba Oro - Nicaragua
  NOK: "NO", // Norwegian Krone - Norway
  NPR: "NP", // Nepalese Rupee - Nepal
  NZD: "NZ", // New Zealand Dollar - New Zealand
  OMR: "OM", // Rial Omani - Oman
  PAB: "PA", // Balboa - Panama
  PEN: "PE", // Nuevo Sol - Peru
  PGK: "PG", // Kina - Papua New Guinea
  PHP: "PH", // Philippine Peso - Philippines
  PKR: "PK", // Pakistan Rupee - Pakistan
  PLN: "PL", // Zloty - Poland
  PYG: "PY", // Guarani - Paraguay
  QAR: "QA", // Qatari Rial - Qatar
  RON: "RO", // Romanian Leu - Romania
  RSD: "RS", // Serbian Dinar - Serbia
  RUB: "RU", // Russian Ruble - Russia
  RWF: "RW", // Rwanda Franc - Rwanda
  SAR: "SA", // Saudi Riyal - Saudi Arabia
  SBD: "SB", // Solomon Islands Dollar - Solomon Islands
  SCR: "SC", // Seychelles Rupee - Seychelles
  SDG: "SD", // Sudanese Pound - Sudan
  SEK: "SE", // Swedish Krona - Sweden
  SGD: "SG", // Singapore Dollar - Singapore
  SHP: "SH", // Saint Helena Pound - Saint Helena
  SLL: "SL", // Leone - Sierra Leone
  SOS: "SO", // Somali Shilling - Somalia
  SRD: "SR", // Surinam Dollar - Suriname
  SYP: "SY", // Syrian Pound - Syrian Arab Republic
  SZL: "SZ", // Lilangeni - Eswatini
  THB: "TH", // Baht - Thailand
  TJS: "TJ", // Somoni - Tajikistan
  TMT: "TM", // Turkmenistan New Manat - Turkmenistan
  TND: "TN", // Tunisian Dinar - Tunisia
  TRY: "TR", // Turkish Lira - Turkey
  TTD: "TT", // Trinidad and Tobago Dollar - Trinidad and Tobago
  TWD: "TW", // New Taiwan Dollar - Taiwan
  TZS: "TZ", // Tanzanian Shilling - Tanzania
  UAH: "UA", // Hryvnia - Ukraine
  UGX: "UG", // Uganda Shilling - Uganda
  USD: "US", // US Dollar - United States
  UYU: "UY", // Peso Uruguayo - Uruguay
  UZS: "UZ", // Uzbekistan Sum - Uzbekistan
  VES: "VE", // Bolívar - Venezuela
  VND: "VN", // Dong - Viet Nam
  XAF: "CM", // CFA Franc BEAC - Central African countries
  XCD: "AG", // East Caribbean Dollar - Eastern Caribbean
  XOF: "SN", // CFA Franc BCEAO - West African countries
  ZAR: "ZA", // Rand - South Africa
  ZMW: "ZM", // Zambian Kwacha - Zambia
  ZWL: "ZW"  // Zimbabwe Dollar - Zimbabwe
};