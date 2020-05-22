/* eslint-disable */
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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse, apiResponseFromAxiosResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { NetworkRule } from '../../generated/models';
import { NetworkRuleCreate } from '../../generated/models';

/**
 * ProjectsNetworkRulesApiService - Auto-generated
 */
export class ProjectsNetworkRulesApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a network rule to the given project
     * @param {number} projectId The project numeric Id
     * @param {NetworkRuleCreate} networkRuleCreate A JSON object containing backgroud process data
     */
    public async addNetworkRuleToProject(projectId: number, networkRuleCreate: NetworkRuleCreate): Promise<ApiResponse<NetworkRule>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addNetworkRuleToProject');
        }
        if (networkRuleCreate === null || networkRuleCreate === undefined) {
            throw new ArgumentNullException('networkRuleCreate', 'addNetworkRuleToProject');
        }
        const response = await this.post <NetworkRule, NetworkRuleCreate>(`/projects/{project_id}/network-rules`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), networkRuleCreate);
        return apiResponseFromAxiosResponse(response);
    }

    /**
     * 
     * @summary Returns a list of all network rules that applies to a project
     * @param {number} projectId Numeric ID of the project to get network rules from
     */
    public async listProjectNetworkRules(projectId: number): Promise<ApiResponse<Array<NetworkRule>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectNetworkRules');
        }
        const response = await this.get <Array<NetworkRule>>(`/projects/{project_id}/network-rules`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return apiResponseFromAxiosResponse(response);
    }
}
