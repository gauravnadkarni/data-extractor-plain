import {URL} from 'url';
import AbstractJiraService from '../abstract-jira-service';
import EnvironmentSettingError from '../../../../exceptions/env-setting-error';

export default class AbstractJiraServiceForV2 extends AbstractJiraService {
    public getRestBaseUrl():URL {
        if(!this.baseUrl) {
            throw new EnvironmentSettingError("Environment variable not defined ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_BASE_URL",500);
        }
        const url:URL = new URL('/rest/api/2',this.baseUrl)
        return url;
    }
}