import React from 'react';

import {isValidBanknotes, AvailableBanknotes} from './utils';

describe('The banknotes in string are valid if:', () => {
  test(`The banknote is: '10'`, () => {
    var RIGHT_TESTED_STR = '10';
    var WRONG_TESTED_STR = '101';

    expect(isValidBanknotes(RIGHT_TESTED_STR)).toBe(true);
    expect(isValidBanknotes(WRONG_TESTED_STR)).toBe(false);
  });

  test(`The banknote is: '50'`, () => {
    var RIGHT_TESTED_STR = '50';
    var WRONG_TESTED_STR = '505';

    expect(isValidBanknotes(RIGHT_TESTED_STR)).toBe(true);
    expect(isValidBanknotes(WRONG_TESTED_STR)).toBe(false);
  });

  test(`The banknote is: '100'`, () => {
    var RIGHT_TESTED_STR = '101';
    var WRONG_TESTED_STR = '100';

    expect(isValidBanknotes(RIGHT_TESTED_STR)).toBe(true);
    expect(isValidBanknotes(WRONG_TESTED_STR)).toBe(false);
  });

});
