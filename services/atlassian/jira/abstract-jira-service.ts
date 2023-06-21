import ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS from '../../../constants/atlassian/jira';

export default class AbstractJiraService {
    private _baseUrl:string | null;

    constructor() {
        this._baseUrl = ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_BASE_URL
    }

    public get baseUrl() {
        return this._baseUrl;
    }
}