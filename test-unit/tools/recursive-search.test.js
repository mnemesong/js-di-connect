const path = require('path');
const assert = require('assert');
const recursiveSearch = require(path.resolve(__dirname, '..', '..', 'js', 'tools', 'recursive-search'));

it('init-test', () => {
    assert.ok(true);
});

it('search-test', () => {
    let searchRes = recursiveSearch.recursiveSearch(path.resolve(__dirname, 'recursive-search-test'));
    assert.deepEqual(searchRes, [
        path.resolve(__dirname, 'recursive-search-test', 'folder2', 'correct-config.di.json'),
        path.resolve(__dirname, 'recursive-search-test', 'folder2', 'folder3', 'config1.di.json'),
        path.resolve(__dirname, 'recursive-search-test', 'folder2', 'folder3', 'config2.di.json'),
        path.resolve(__dirname, 'recursive-search-test', 'some-conf.di.json')
    ]);
})