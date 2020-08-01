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

  copyArr.sort((a, b) => b - a);

  return copyArr;
};

export const convertObjToString = (obj: { [key: string]: number }): string => {
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
      result = false
    }
  });

  return result;
}

export function getMoney(neededSum: number, banknotes: Array<number> ): { [key: string]: number } {
  // if banknotes are not choosed
  // banknotes = Object.values(AvailableBanknotes).map(Number);
  const banknotesSum = getArrSum(banknotes);

  if (banknotesSum > neededSum) {
    throw new Error('Sum is more then an entered banknotes')
  }

  let objResult: { [key: string]: number } = {};

  const updatedSum: number = orderArrayByDesc(banknotes)
    .reduce((sum, currentValue, currentIndex, array) => {
      let currentBanknoteCount: number = Math.floor(neededSum / currentValue);
      let currentBanknoteSum = currentBanknoteCount * currentValue;
      const arrWithoutCurrentElement = array.slice(currentIndex + 1);

      while (getArrSum(arrWithoutCurrentElement) > (sum - currentBanknoteSum)) {
        currentBanknoteCount = currentBanknoteCount - 1;
        currentBanknoteSum = currentBanknoteCount * currentValue;
      }

      objResult[currentValue] = currentBanknoteCount;
      return sum - currentBanknoteSum;

    }, neededSum);


  return objResult;
}
