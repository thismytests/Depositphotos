export const AvailableBanknotes: { [key: string]: string } = {
  '10': '10',
  '50': '50',
  '100': '100'
};

const isExist = (testedValue: string) => {
  for (let availableBanknotesKey in AvailableBanknotes) {
    if (AvailableBanknotes[availableBanknotesKey] === testedValue) {
      return true
    }
  }

  return false;
};

const getArrSum = (arr: Array<number>) => {
  return arr.reduce(function (sum, current) {
    return sum + current;
  }, 0);
};

const orderArrayByDesc = (arr: Array<number>): Array<number> => {
  const copyArr = arr.slice(0);

  copyArr.sort((a, b) => {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
  });

  return copyArr;
};

const convertObjToString = (obj: { [key: string]: number }): string => {
  const SEPARATOR = '/';
  let result = '';

  for (let key in obj) {
    result = result.concat(key + SEPARATOR + obj[key] + ' ')
  }
  return result;
};


export function isValidBanknotes(testedStr: string): boolean {
  const strToArr: Array<string> = testedStr.split(' ');
  let result = true;

  strToArr.map((item, i) => {
    if (!isExist(item)) {
      result =  false
    }
  });

  return result;
}

export function getMoney(banknotes: Array<number>, sum: number): {[key: string]: number} {
  const banknotesSum = getArrSum(banknotes);

  if (banknotesSum > sum) {
    throw new Error('Sum is more then an entered banknotes')
  }

  const orderedDescArr = orderArrayByDesc(banknotes);
  const minBanknote = orderedDescArr[orderedDescArr.length - 1];
  const objResult: { [key: string]: number } = {};

  const sumForLasBanknote = orderedDescArr.reduce((sum, current) => {
    if (current === minBanknote) {
      return sum;
    }

    objResult[current.toString()] = 1;
    return sum - current;
  }, banknotesSum);

  // set count for smaller banknote
  objResult[minBanknote] = (sumForLasBanknote / minBanknote) + 1;

  return objResult;
}
