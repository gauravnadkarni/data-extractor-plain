import IDataFormatter from './i-data-formatter';

export default class CsvFormatter implements IDataFormatter {
    formatData(data: any): string {
        throw new Error('Method not implemented.');
    }
}