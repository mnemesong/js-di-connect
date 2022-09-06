export function isFileDiConfig (str: string): boolean {
    return (str.match(/^.*\.di.json$/) !== null);
}