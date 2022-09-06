const assert = require('assert');
const path = require('path');
const isDiChecker = require(path.resolve(__dirname, '..', '..', 'js', 'tools', 'is-di-checker'));

it('test check', () => {
    assert.ok(true);
});

it('Test correct di-string 1', () => {
    assert.equal(isDiChecker.isFileDiConfig('D:/some-dir/some-config.di.json'), true);
});

it('Test correct di-string 2', () => {
    assert.equal(isDiChecker.isFileDiConfig('./some-di-config.di.json'), true);
});

it('Test incorrect di-string 1', () => {
    assert.equal(isDiChecker.isFileDiConfig('./some-di-config.json'), false);
});

it('Test incorrect di-string 2', () => {
    assert.equal(isDiChecker.isFileDiConfig('./some-di-config.di.json.json'), false);
});

it('Test incorrect di-string 2', () => {
    assert.equal(isDiChecker.isFileDiConfig('D:/some-other-file.js'), false);
});