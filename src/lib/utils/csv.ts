import { createObjectCsvStringifier } from 'csv-writer'
export function toCsvString(records: any[]) {
    if (!records || records.length === 0) return '';
    const header = Object.keys(records[0]).map(k => ({ id: k, title: k }));
    const csvStringifier = createObjectCsvStringifier({ header });
    const headerStr = csvStringifier.getHeaderString();
    const bodyStr = csvStringifier.stringifyRecords(records);
    return headerStr + bodyStr;
}