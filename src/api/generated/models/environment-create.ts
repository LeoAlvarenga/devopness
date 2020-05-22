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



/**
 * 
 * @export
 * @interface EnvironmentCreate
 */
export interface EnvironmentCreate {
    /**
     * The environment\'s name
     * @type {string}
     * @memberof EnvironmentCreate
     */
    name: string;
    /**
     * The type of the deployment being triggred
     * @type {string}
     * @memberof EnvironmentCreate
     */
    type: EnvironmentCreateTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum EnvironmentCreateTypeEnum {
    Testing = 'testing',
    Staging = 'staging',
    Production = 'production'
}



