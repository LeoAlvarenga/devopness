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
 * @interface SshKey
 */
export interface SshKey {
    /**
     * The Id of the given SSH public key
     * @type {number}
     * @memberof SshKey
     */
    id?: number;
    /**
     * The name entered by the user to uniquely identify the public SSH key
     * @type {string}
     * @memberof SshKey
     */
    name?: string;
    /**
     * The Id of the user to which the SSH key belongs to
     * @type {number}
     * @memberof SshKey
     */
    user_id?: number;
    /**
     * The public SSH key to add to your `devopness` account and associate it to the given project
     * @type {string}
     * @memberof SshKey
     */
    public_key?: string;
    /**
     * The hashed fingerprint of the public key
     * @type {string}
     * @memberof SshKey
     */
    fingerprint?: string;
    /**
     * Current status of deploying to remote servers the current key
     * @type {string}
     * @memberof SshKey
     */
    status?: SshKeyStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SshKeyStatusEnum {
    Pending = 'pending',
    InProgress = 'in-progress',
    Cancelled = 'cancelled',
    Completed = 'completed',
    Failed = 'failed'
}



