export interface ReadingModes {
    text: boolean;
    image: boolean;
}

export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
}

export interface ListPrice {
    amount: number;
    currencyCode: string;
}

export interface RetailPrice {
    amount: number;
    currencyCode: string;
}

export interface ListPrice2 {
    amountInMicros: number;
    currencyCode: string;
}

export interface RetailPrice2 {
    amountInMicros: number;
    currencyCode: string;
}

export interface Offer {
    finskyOfferType: number;
    listPrice: ListPrice2;
    retailPrice: RetailPrice2;
}

export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: ListPrice;
    retailPrice: RetailPrice;
    buyLink: string;
    offers: Offer[];
}

export interface VolumeInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    readingModes: ReadingModes;
    pageCount: number;
    printedPageCount: number;
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
}

export interface Epub {
    isAvailable: boolean;
}

export interface Pdf {
    isAvailable: boolean;
    downloadLink: string;
}

export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface FullBook {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
}