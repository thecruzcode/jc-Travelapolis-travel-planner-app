import { checkInput } from './inputCheck.js';

describe('RegExp: input', function () {
  it('should be a string', function () {
    const urlRGEX = /^[a-zA-Z\s]{0,255}$/;
    const urlTest = 'H0llyW00d';
    expect(urlRGEX.test(urlTest)).toBe(false);
  });
});
