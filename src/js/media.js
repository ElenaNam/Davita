const mediaQuerySm = window.matchMedia("(min-width: 575px)");
const mediaQueryMd = window.matchMedia("(min-width: 767px)");
const mediaQueryLg = window.matchMedia("(min-width: 991px)");
const mediaQueryXl = window.matchMedia("(min-width: 1200px)");
const mediaQueryXxl = window.matchMedia("(min-width: 1399px)");

export const valueInst = () => {
    let itemsInst = 6;
    let itemsPerRowInst=3;
    const arrInst = [];
  if (mediaQuerySm.matches) {
      itemsInst = 8
      itemsPerRowInst = 4
    }
  if (mediaQueryMd.matches) {
      itemsInst = 12
      itemsPerRowInst = 6;
    }
  if (mediaQueryLg.matches) {
      itemsInst = 12
      itemsPerRowInst = 6;
    }
  if (mediaQueryXl.matches) {
      itemsInst = 10
      itemsPerRowInst = 10;
    }
  if (mediaQueryXxl.matches) {
      itemsInst = 12
      itemsPerRowInst = 12;
    }
  arrInst.push(itemsInst)
  arrInst.push(itemsPerRowInst);
  return arrInst; 
};
