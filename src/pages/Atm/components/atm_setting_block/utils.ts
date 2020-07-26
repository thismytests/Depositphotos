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

const orderArrayByACS = (arr: Array<number>): Array<number> => {
  const copyArr = arr.slice(0);

  for (let i = 0, endI = copyArr.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (copyArr[j] > copyArr[j + 1]) {
        [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
};

const convertObjToString = (obj: { [key: string]: number }): string => {
  const SEPARATOR = '/';
  let result = '';

  for (let key in obj) {
    result = result.concat(key + SEPARATOR + obj[key])
  }
  return result;
};


export function isValidBanknotes(testedStr: string): boolean {
  const strToArr: Array<string> = testedStr.split('');

  strToArr.forEach((item, i) => {
    if (!isExist(item)) {
      return false
    }
  });

  return true;
}

export function getMoney(banknotes: Array<number>, sum: number): string {
  const banknotesSum = getArrSum(banknotes);

  if (banknotesSum > sum) {
    throw new Error('Sum is more then an entered banknotes')
  }

  // order array by asc
  const orderedAscArr = orderArrayByACS(banknotes);

  // todo ... ATTENTION!!! THIS WORKS ONLY FOR AvailableBanknotes WITH 3 ELEMENTS
  const min_bank = orderedAscArr[0];
  const mid_bank = orderedAscArr[0];
  const max_bank = orderedAscArr[Math.round(orderedAscArr.length / 2)];

  const countSmBanknote = (sum - (max_bank + mid_bank)) / min_bank;

  const result = {
    [min_bank]: 1,
    [mid_bank]: 1,
    [max_bank]: countSmBanknote
  };

  return convertObjToString(result);
}
