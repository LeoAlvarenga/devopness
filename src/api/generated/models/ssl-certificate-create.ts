// tslint:disable
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { EnvironmentLinkItem } from './environment-link-item';

/**
 * 
 * @export
 * @interface SslCertificateCreate
 */
export interface SslCertificateCreate {
    /**
     * The Id of the environment to which the settings apply to
     * @type {number}
     * @memberof SslCertificateCreate
     */
    environment_id: number;
    /**
     * The list of domain names to which the SSL certificate refers to
     * @type {Array<string>}
     * @memberof SslCertificateCreate
     */
    domains: Array<string>;
    /**
     * The entity or certification authority (CA) who issued the certificate
     * @type {string}
     * @memberof SslCertificateCreate
     */
    issuer: SslCertificateCreateIssuerEnum;
    /**
     * The certificate type, indicating its scope
     * @type {string}
     * @memberof SslCertificateCreate
     */
    type: SslCertificateCreateTypeEnum;
    /**
     * The level of validation applied when issuing the certificate. This can be one out of the three validation levels conforming to public key certificates standards: `DV (Domain Validation)`, `OV (Organization validation)` or `EV (Extended Validation)`
     * @type {string}
     * @memberof SslCertificateCreate
     */
    validation_level?: SslCertificateCreateValidationLevelEnum;
    /**
     * The private key provided by the Certification Authority, when the certificate has not being automatically issued through `devopness`
     * @type {string}
     * @memberof SslCertificateCreate
     */
    custom_private_key?: string;
    /**
     * The contents of the certificate provided by the Certification Authority, when the certificate has not being automatically issued through `devopness`
     * @type {string}
     * @memberof SslCertificateCreate
     */
    custom_certificate?: string;
    /**
     * 
     * @type {Array<EnvironmentLinkItem>}
     * @memberof SslCertificateCreate
     */
    environments?: Array<EnvironmentLinkItem>;
}

/**
    * @export
    * @enum {string}
    */
export enum SslCertificateCreateIssuerEnum {
    Custom = 'custom',
    LetsEncrypt = 'lets-encrypt'
}
/**
    * @export
    * @enum {string}
    */
export enum SslCertificateCreateTypeEnum {
    SingleDomain = 'single-domain',
    MultiDomain = 'multi-domain',
    Wildcard = 'wildcard'
}
/**
    * @export
    * @enum {string}
    */
export enum SslCertificateCreateValidationLevelEnum {
    DV = 'DV',
    OV = 'OV',
    EV = 'EV'
}



