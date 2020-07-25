export const AvailableBanknotes: {[key: string]: string} = {
  '10': '10',
  '50': '50',
  '100': '100'
};



export function isValidBanknotes(testedStr: string) {
  const strToArr: Array<string> = testedStr.split('');

  const isExist = (testedValue: string) => {
    for (let availableBanknotesKey in AvailableBanknotes) {
      if(AvailableBanknotes[availableBanknotesKey] === testedValue){
        return true
      }
    }

    return  false;
  };

  strToArr.forEach((item, i) => {
    if(!isExist(item)){
      return false
    }
  });

  return true;
}
