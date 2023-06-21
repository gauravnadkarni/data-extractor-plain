import IDataFormatter from './i-data-formatter';

export default class JsonFormatter implements IDataFormatter {
    formatData(data: any): string {
        return JSON.stringify(data);
    }
}