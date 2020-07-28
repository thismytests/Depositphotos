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

export function getMoney(banknotes: Array<number>, neededSum: number): { [key: string]: number } {
  const banknotesSum = getArrSum(banknotes);

  if (banknotesSum > neededSum) {
    throw new Error('Sum is more then an entered banknotes')
  }

  let objResult: { [key: string]: number } = {};


  const updatedSum: number = orderArrayByDesc(banknotes)
    .reduce((sum, currentValue, currentIndex, array) => {
      let currentBanknoteCount: number = Math.floor(neededSum / currentValue);
      let currentBanknoteSum = currentBanknoteCount * currentValue;

      const arrWithoutCurrentElement = array.slice(currentIndex);
      // console.log('arrWithoutCurrentElement ', arrWithoutCurrentElement);
      while (currentBanknoteSum > getArrSum(arrWithoutCurrentElement)) {
        // console.log(' array', array);
        // console.log('array.slice(currentIndex)!! ', array.slice(currentIndex));
        // console.log('getArrSum(array.slice(currentIndex)) ', getArrSum(array.slice(currentIndex)));
        currentBanknoteCount = currentBanknoteCount - 1;
        currentBanknoteSum = currentBanknoteCount * currentValue;
      }

      objResult[currentValue] = currentBanknoteCount;
      return neededSum - currentBanknoteSum;

    }, neededSum);


  return objResult;
}
