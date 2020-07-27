import {
  isValidBanknotes,
  getMoney
} from './utils';

describe('The banknotes in string are valid if:', () => {
  test(`The banknote is: '10'`, () => {
    const RIGHT_TESTED_STR = '10';
    const WRONG_TESTED_STR = '101';

    expect(isValidBanknotes(RIGHT_TESTED_STR)).toBe(true);
    expect(isValidBanknotes(WRONG_TESTED_STR)).toBe(false);
  });

  test(`The banknote is: '50'`, () => {
    const RIGHT_TESTED_STR = '50';
    const WRONG_TESTED_STR = '505';

    expect(isValidBanknotes(RIGHT_TESTED_STR)).toBe(true);
    expect(isValidBanknotes(WRONG_TESTED_STR)).toBe(false);
  });

  test(`The banknote is: '100'`, () => {
    const RIGHT_TESTED_STR = '100';
    const WRONG_TESTED_STR = '101';

    expect(isValidBanknotes(RIGHT_TESTED_STR)).toBe(true);
    expect(isValidBanknotes(WRONG_TESTED_STR)).toBe(false);
  });

});

describe('To get banknotes', () => {
  test(`If sum ot the entered banknotes 
              is more then needed sum will
              be an error`, () => {
    const BANKNOTES = [10, 50, 100];
    const BAD_SUM = 10;
    const GOOD_SUM = 1000;

    expect(() => getMoney(BANKNOTES, BAD_SUM)).toThrow();
    expect(() => getMoney(BANKNOTES, GOOD_SUM)).not.toThrow();
  });

  describe(`LOGIC FOR THREE BANKNOTES
                  @max_bank - bigger banknote,
                  @mid_bank - middle banknote,
                  @sm_bank - smaller banknote
                  sum - sum
                  
                  count @max_bank = 1
                  count @mid_bank = 1
                  count @sm_bank = (sum-(@max_bank + @mid_bank))/@min_bank
                  `, () => {
    test(`Test case #1`, () => {
      const BANKNOTES = [10, 50, 100];
      const GOOD_SUM = 160;

      expect(getMoney(BANKNOTES, GOOD_SUM)).toEqual({10: 1, 50: 1, 100: 1});
    });

    test(`Test case #2`, () => {
      const BANKNOTES = [10, 50, 100];
      const GOOD_SUM = 170;

      expect(getMoney(BANKNOTES, GOOD_SUM)).toEqual({10: 2, 50: 1, 100: 1});
    });
  });

});

