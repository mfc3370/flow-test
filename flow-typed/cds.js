// @flow
import type {Element, Node} from 'react';
import config from 'b2c-components/common/config';

const {
    forms,
    shopRights,
} = config;

declare type GlobalApiError = {
    error?: true,
};

declare type DefinitionListItem = Array<string | Node | Element<typeof Link>>;

declare type DefinitionListData = Array<DefinitionListItem>;

declare type CDSPhoneNumbers = {
    homeNumber: string,
    officeNumber: string,
    mobileNumber: string,
} & GlobalApiError;

declare type CDSEmailAddress = {
    [key: string]: string,
};

declare type CDSAccountContactEmails = {
    dunning?: string,
    billing?: string,
    crediting?: string,
};

declare type CDSAddress = {
    code?: string,
    contactPerson?: string,
    displayName?: string,
    street?: string,
    streetaddition?: string,
    zip?: string,
    city?: string,
    name?: string,
    reference?: string,
    salutation?: string,
    firstname?: string,
    lastname?: string,
    company?: string,
    mobileNumber?: string,
    homeNumber?: string,
    phoneNumber?: string,
    addressAsString?: string,
    fieldErrors?: Object,
    pickPostAddress?: boolean,
    email?: string,
    empty?: boolean,
};

declare type CDSVariantData= {
    filterName: string,
    presentationValue: string,
};

declare type CDSProduct = {
    img: string,
    imgAlt?: string,
    icon?: string,
    sku: number,
    name: string,
    path?: string,
    productName?: string,
    manufacturerName?: string,
    price?: number,
    stock?: number,
    liveshoppingId?: number,
    available?: boolean,
    variant?: string,
    variantAttributes?: Array<CDSVariantData>,
    additionalInfoList?: DefinitionListData,
    additionalInfo?: string,
    immediatePayment?: boolean,
    isChargedExternally?: boolean,
    dayDealOrder?: boolean,
    nameWithoutManufacturer?: string,
};

declare type CDSPagingParams = {
    page: number,
    totalCount?: number,
    totalNumberOfPages?: number,
    itemsPerPage?: number,
    pageNumber?: number,
    previousPage?: number,
    nextPage?: number,
};

declare type CDSAccountUserType = $Values<typeof shopRights>;

declare type CDSAccountUserAttribute = {
    attribute: 'firstName' | 'lastName' | 'department' | 'job' | 'email' | 'role',
    value: string,
}

declare type CDSAccountUser = {
    accountId: number,
    debitorId: string,
    username: string,
    type: CDSAccountUserType,
    attributes: Array<CDSAccountUserAttribute>,
};

declare type CDSResponseError = {|
    response?: {
        status: number
    },
    name?: string,
    stack?: string,
    message?: string,
|};

declare type CDSFormState = $Values<typeof forms.STATES>;

declare type CDSPackages = {
    consignmentNumber: string,
    trackingLink: string,
    transportMethod: string
};
