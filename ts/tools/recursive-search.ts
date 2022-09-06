import * as fs from 'fs';
import * as path from 'path';
import * as isDiChecker from './is-di-checker';

export function recursiveSearch(folderPath: string): string[] {
    const readdir = fs.readdirSync(folderPath, 'utf-8');
    let results: string[] = [];
    for(let i = 0; i < readdir.length; i++) 
    {
        let itemFullPath = path.resolve(folderPath, readdir[i]);
        if(fs.statSync(itemFullPath).isDirectory()) {
            results = results.concat(recursiveSearch(itemFullPath))
        } else {
            if (isDiChecker.isFileDiConfig(readdir[i])) {
                results.push(itemFullPath);
            }
        }
    }
    return results;
}