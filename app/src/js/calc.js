// Set formats for results
const setFormatNumber = (dataFormat) => +dataFormat;
const setFormatNumberStyle = (dataFormat) => +dataFormat.toFixed(2);

/*-*/
const getYearResult = (monthlyRentNew) => monthlyRentNew * 12;

const getMonthlyResult = (monthlyRentNew, annualRentIncrease) => {
  const result = (monthlyRentNew * annualRentIncrease) / 100;
  return result + monthlyRentNew;
};
/*-*/

/*-*/
const getTaxesInsuranceBuy = (annualTax, annualInsurance, yearsBefore) => {
  const result = (annualTax + annualInsurance) * yearsBefore;
  return setFormatNumber(result);
};
/*-*/

/*-*/
const getAnnualTax = (annualTax, switchTaxes, amountResult) => {
  if (switchTaxes === '$') {
    return setFormatNumber(+annualTax);
  }
  const result = amountResult * (annualTax / 100);
  return setFormatNumber(result);
};

const getAnnualInsurance = (annualInsurance, switchInsurance, amountResult) => {
  if (switchInsurance === '$') {
    return setFormatNumber(+annualInsurance);
  }
  const result = amountResult * (annualInsurance / 100);
  return setFormatNumber(result);
};

const getAnnualTaxRate = (yourTaxRate, switchTaxRate) => {
  if (switchTaxRate === '$') {
    return setFormatNumber(+yourTaxRate);
  }
  const result = yourTaxRate / 100;
  return setFormatNumber(result);
};

const getMaintenanceBuyResult = (annualAppreciation, yearsBefore) => {
  const result = annualAppreciation * yearsBefore;
  return setFormatNumber(result);
};
/*-*/

const getInterestRateMonthly = (interestRate) => {
  const result = interestRate / 100 / 12;
  return +result;
};

const getResMonthlyPI = (amountResult, interestRateMonthlyResult, paymentsMonthResult) => {
  if (interestRateMonthlyResult !== 0) {
    const result =
      (amountResult * interestRateMonthlyResult * (1 + interestRateMonthlyResult) ** paymentsMonthResult) /
      ((1 + interestRateMonthlyResult) ** paymentsMonthResult - 1);

    return result;
  }
  return 0;
};

const getInterestNew = (amountResultNew, interestRateResult) => {
  if (interestRateResult !== 0) {
    const result = (amountResultNew * interestRateResult) / 12;
    return setFormatNumber(result);
  }
  return 0;
};

const getResMonthlyInterest = (amountResult, interestRateResult) => {
  const result = (amountResult * interestRateResult) / 12;
  return setFormatNumber(result);
};

const getInterestRate = (interestRate) => {
  const result = interestRate / 100;
  return +result;
};

const getMonthlyPMI = (annualPMIResult, switchPMI, loanValueRatioResult, interestRateResult) => {
  if (interestRateResult !== 0 && loanValueRatioResult > 80) {
    if (switchPMI === '$') {
      return +annualPMIResult / 12;
    }
    return +annualPMIResult / 12;
  }
  return 0;
};

const getAnnualPMI = (annualPmi, switchPMI, amountResult) => {
  if (switchPMI === '$') {
    return setFormatNumber(+annualPmi);
  }
  const result = amountResult * (annualPmi / 100);
  return setFormatNumber(result);
};

/*-*/
const getValueRatio = (amountResult, homeValue) => {
  const result = (amountResult * 100) / homeValue;
  return setFormatNumber(result);
};

const getMonthlyTax = (annualTaxResult, switchTaxes) => {
  if (switchTaxes === '$') {
    return setFormatNumber(annualTaxResult / 12);
  }
  return setFormatNumber(annualTaxResult / 12);
};

const getMonthlyInsurance = (annualInsuranceResult, switchInsurance) => {
  if (switchInsurance === '$') {
    return setFormatNumber(annualInsuranceResult / 12);
  }
  return setFormatNumber(annualInsuranceResult / 12);
};

const getMonthPMI = (
  loanValueRatioResult,
  amountResult,
  homeValue,
  monthlyPIResult,
  monthlyInterestResult,
  monthlyPMIResult,
  paymentsMonthResult,
  interestRateResult,
) => {
  if (interestRateResult !== 0) {
    let countMonth = 0;
    let loanValueResNew = loanValueRatioResult;
    let amountResultNew = amountResult;

    while (loanValueResNew > 80) {
      countMonth += 1;
      const interestRateMonthlyResultNew = getInterestNew(amountResultNew, interestRateResult);
      const interest = interestRateMonthlyResultNew ?? 0;
      amountResultNew -= monthlyPIResult - interest;
      loanValueResNew = (amountResultNew * 100) / homeValue;
      loanValueResNew = Math.floor(loanValueResNew * 10) / 10;
    }

    return countMonth;
  }
  return 0;
};

const getResMonthlyPayment = (
  amountResult,
  interestRateMonthlyResult,
  paymentsMonthResult,
  monthlyTaxResult,
  monthlyInsuranceResult,
  monthlyPMIResult,
) => {
  if (interestRateMonthlyResult !== 0) {
    const calcDetailsForMonthly = monthlyTaxResult + monthlyInsuranceResult + monthlyPMIResult;
    const result =
      (amountResult * interestRateMonthlyResult * (1 + interestRateMonthlyResult) ** paymentsMonthResult) /
        ((1 + interestRateMonthlyResult) ** paymentsMonthResult - 1) +
      calcDetailsForMonthly;
    return +result.toFixed(3);
  }

  return 0;
};
/*-*/

/*-*/
const getPMIBuy = (annualPMIResult, monthPMIResult) => {
  const result = (annualPMIResult / 12) * monthPMIResult;
  return setFormatNumber(result);
};
/*-*/

/*-*/
const getDifferencePmi = (monthsTotal, monthPMIResult, monthlyPMIResult) => {
  const result = (monthsTotal - monthPMIResult) * monthlyPMIResult;
  return setFormatNumber(result);
};
/*-*/

/*-*/
const getTotalRent = (yearsBefore, monthlyRent, annualRentIncrease) => {
  let countMonth = 0;
  let lastYear = 0;
  let monthlyRentNew = monthlyRent;
  let yearResult = getYearResult(monthlyRentNew);

  while (countMonth < yearsBefore) {
    countMonth += 1;
    yearResult = getYearResult(monthlyRentNew);
    monthlyRentNew = getMonthlyResult(monthlyRentNew, annualRentIncrease);
    lastYear = yearResult + lastYear;
  }

  return setFormatNumber(lastYear);
};

const getTotalBuy = (monthlyPMIResult, monthlyPaymentResult, annualMaintenance, monthsTotal, differenceWithoutPmi) => {
  const totalMonthly = +monthlyPaymentResult + +annualMaintenance / 12;
  const result = totalMonthly * monthsTotal - differenceWithoutPmi;
  return setFormatNumber(result);
};
/*-*/

/*-*/
const getAverageMonthlyRent = (totalPaymentsRentResult, monthsTotal) => {
  if (totalPaymentsRentResult !== 0) {
    return setFormatNumber(totalPaymentsRentResult / monthsTotal);
  }
  return setFormatNumber(0);
};

const getAverageMonthlyBuy = (totalPaymentsBuyResult, monthsTotal) => {
  if (totalPaymentsBuyResult !== 0) {
    return setFormatNumber(totalPaymentsBuyResult / monthsTotal);
  }
  return setFormatNumber(0);
};
/*-*/

/*-*/
const getMonthlyRentSavings = (averageMonthlyRentResult, averageMonthlyBuyResult) => {
  if (averageMonthlyRentResult !== 0) {
    const result = Math.abs(averageMonthlyRentResult - averageMonthlyBuyResult);
    return setFormatNumber(result);
  }
  return setFormatNumber(0);
};
/*-*/

/*-*/
const getTaxRentSavings = (amountResult, points, yourTaxRateResult, annualTaxResult, yearsBefore) => {
  const pointsPercent = points / 100;
  const taxResult = annualTaxResult * yourTaxRateResult * yearsBefore;
  const pointsResult = amountResult * yourTaxRateResult * pointsPercent;
  const result = Math.abs(pointsResult + taxResult);

  return setFormatNumber(result);
};
/*-*/

/*-*/
const getTotalRentSavings = (totalPaymentsBuyResult, totalPaymentsRentResult, taxSavingsBuyResult) => {
  const totalBuyResult = totalPaymentsBuyResult - taxSavingsBuyResult;
  const result = totalBuyResult - totalPaymentsRentResult;

  return +result.toFixed(3);
};
/*-*/

/*-*/

const getNewValue = (homeValueNew, annualAppreciationNew) => setFormatNumber(homeValueNew * annualAppreciationNew);
const getHouseAppreciationValue = (homeValue, yearsBefore, annualAppreciation) => {
  if (homeValue !== 0) {
    let newValue = 0;
    const annualAppreciationNew = annualAppreciation / 100;
    let homeValueNew = homeValue;
    let counter = 0;
    while (counter < yearsBefore) {
      counter += 1;
      newValue = getNewValue(homeValueNew, annualAppreciationNew);
      homeValueNew += newValue;
    }
    return setFormatNumber(homeValueNew);
  }
  return setFormatNumber(0);
};
/*-*/

/*-*/
const getLoanBalance = (amountResult, monthlyPIResult, paymentsMonthResult, interestRateResult, monthTotal) => {
  if (interestRateResult !== 0) {
    let countMonth = 0;
    let amountResultNew = amountResult;

    while (countMonth < monthTotal) {
      countMonth += 1;
      const interestRateMonthlyResultNew = (amountResultNew * interestRateResult) / 12;
      const interest = interestRateMonthlyResultNew ?? 0;

      amountResultNew -= monthlyPIResult - interest;
    }

    return setFormatNumber(amountResultNew);
  }
  return 0;
};
/*-*/

/*-*/
const getProceedsMinusCosts = (houseAppreciationValueResult, sellingCost) => {
  if (sellingCost !== 0) {
    const percentCost = sellingCost / 100;
    const hoseCostDifference = houseAppreciationValueResult * percentCost;
    const result = houseAppreciationValueResult - hoseCostDifference;

    return setFormatNumber(result);
  }
  return 0;
};
/*-*/

/*-*/
const getEquityAppreciation = (proceedsMinusCostsResult, loanBalanceResult) => {
  if (loanBalanceResult !== 0) {
    const result = Math.abs(proceedsMinusCostsResult - loanBalanceResult);

    return setFormatNumber(result);
  }
  return 0;
};
/*-*/

/*-*/
const getHomePurchaseBenefits = (equityAppreciationResult, totalRentSavingsResult) => {
  if (totalRentSavingsResult !== 0) {
    const result = equityAppreciationResult - totalRentSavingsResult;
    return setFormatNumber(result);
  }
  return 0;
};
/*-*/

/* -Calc-*/
const calc = (elements, watchedState) => {
  const { form, result } = watchedState;
  const { values, exclude } = form;

  // input values
  const monthlyRent = values['monthly-rent'];
  const annualRentIncrease = values['annual-rent-increase'];
  const annualMaintenance = values['annual-maintenance'];
  const annualAppreciation = values['annual-appreciation'];
  const homeValue = values['home-value'];
  const yearsBefore = values['years-before'];
  const sellingCost = values['selling-cost'];
  const amountResult = values['amount'];
  const interestRate = values['interest-rate'];
  const { term } = values;
  const { points } = values;
  const yourTaxRate = values['your-tax-rate'];
  const annualTax = values['annual-tax'];
  const annualInsurance = values['annual-insurance'];
  const annualPMI = values['annual-pmi'];
  // * switchers
  const switchTaxRate = exclude['switch-tax-rate'];
  const switchTaxes = exclude['switch-taxes'];
  const switchInsurance = exclude['switch-insurance'];
  const switchPMI = exclude['switch-pmi'];

  // results calc
  const monthsTotal = yearsBefore * 12;
  const yourTaxRateResult = getAnnualTaxRate(yourTaxRate, switchTaxRate);
  const annualTaxResult = getAnnualTax(annualTax, switchTaxes, amountResult);
  const annualInsuranceResult = getAnnualInsurance(annualInsurance, switchInsurance, amountResult);
  /* -For month pmi--*/
  const loanValueRatioResult = getValueRatio(amountResult, homeValue);
  const interestRateResult = getInterestRate(interestRate);
  const paymentsMonthResult = +term * 12;
  const interestRateMonthlyResult = getInterestRateMonthly(interestRate);
  const monthlyPIResult = getResMonthlyPI(amountResult, interestRateMonthlyResult, paymentsMonthResult);
  const monthlyInterestResult = getResMonthlyInterest(amountResult, interestRateResult);
  const annualPMIResult = getAnnualPMI(annualPMI, switchPMI, amountResult);
  const monthlyPMIResult = getMonthlyPMI(annualPMIResult, switchPMI, loanValueRatioResult, interestRateResult);
  const monthPMIResult = getMonthPMI(
    loanValueRatioResult,
    amountResult,
    homeValue,
    monthlyPIResult,
    monthlyInterestResult,
    monthlyPMIResult,
    paymentsMonthResult,
    interestRateResult,
    interestRateMonthlyResult,
  );
  const monthlyTaxResult = getMonthlyTax(annualTaxResult, switchTaxes, amountResult);
  const monthlyInsuranceResult = getMonthlyInsurance(annualInsuranceResult, switchInsurance, amountResult);
  const monthlyPaymentResult = getResMonthlyPayment(
    amountResult,
    interestRateMonthlyResult,
    paymentsMonthResult,
    monthlyTaxResult,
    monthlyInsuranceResult,
    monthlyPMIResult,
  );
  const differenceWithoutPmi = getDifferencePmi(monthsTotal, monthPMIResult, monthlyPMIResult);
  /* -For month pmi--*/

  // part 1
  const taxesInsuranceRentResult = setFormatNumber(0);
  const taxesInsuranceBuyResult = getTaxesInsuranceBuy(annualTax, annualInsurance, yearsBefore);
  const PMIRentResult = setFormatNumber(0);
  const PMIBuyResult = getPMIBuy(annualPMIResult, monthPMIResult);
  const maintenanceRentResult = setFormatNumber(0);
  const maintenanceBuyResult = getMaintenanceBuyResult(annualMaintenance, yearsBefore);

  const totalPaymentsRentResult = getTotalRent(yearsBefore, monthlyRent, annualRentIncrease);
  const totalPaymentsBuyResult = getTotalBuy(
    monthlyPMIResult,
    monthlyPaymentResult,
    annualMaintenance,
    monthsTotal,
    differenceWithoutPmi,
  );

  // part 2
  const averageMonthlyRentResult = getAverageMonthlyRent(totalPaymentsRentResult, monthsTotal);
  const averageMonthlyBuyResult = getAverageMonthlyBuy(totalPaymentsBuyResult, monthsTotal);
  const monthlyRentSavingsResult = getMonthlyRentSavings(averageMonthlyRentResult, averageMonthlyBuyResult);
  const taxSavingsRentResult = setFormatNumber(0);
  const taxSavingsBuyResult = getTaxRentSavings(amountResult, points, yourTaxRateResult, annualTaxResult, yearsBefore);
  const totalRentSavingsResult = getTotalRentSavings(
    totalPaymentsBuyResult,
    totalPaymentsRentResult,
    taxSavingsBuyResult,
  );

  // part 3
  const houseAppreciationValueResult = getHouseAppreciationValue(homeValue, yearsBefore, annualAppreciation);
  const proceedsMinusCostsResult = getProceedsMinusCosts(houseAppreciationValueResult, sellingCost);
  const loanBalanceResult = getLoanBalance(
    amountResult,
    monthlyPIResult,
    paymentsMonthResult,
    interestRateResult,
    monthsTotal,
  );
  const equityAppreciationResult = getEquityAppreciation(proceedsMinusCostsResult, loanBalanceResult);
  const homePurchaseBenefitsResult = getHomePurchaseBenefits(equityAppreciationResult, totalRentSavingsResult);

  // values output / details
  result['monthly-rent'] = setFormatNumberStyle(monthlyRent);
  result['annual-rent-increase'] = setFormatNumberStyle(annualRentIncrease);
  result['annual-maintenance'] = setFormatNumberStyle(annualMaintenance);
  result['annual-appreciation'] = setFormatNumberStyle(annualAppreciation);
  result['home-value'] = setFormatNumberStyle(homeValue);
  result['years-before'] = yearsBefore;
  result['selling-cost'] = setFormatNumberStyle(sellingCost);
  result.amount = setFormatNumberStyle(amountResult);
  result['interest-rate'] = setFormatNumberStyle(interestRate);
  result.term = term;
  result.points = setFormatNumberStyle(points);
  result['your-tax-rate'] = setFormatNumberStyle(yourTaxRate);
  result['annual-tax'] = setFormatNumberStyle(annualTaxResult);
  result['annual-insurance'] = setFormatNumberStyle(annualInsuranceResult);
  result['annual-pmi'] = setFormatNumberStyle(annualPMI);
  result['taxes-insurance-rent'] = setFormatNumberStyle(taxesInsuranceRentResult);
  result['taxes-insurance-buy'] = setFormatNumberStyle(taxesInsuranceBuyResult);
  result['pmi-rent'] = setFormatNumberStyle(PMIRentResult);
  result['pmi-buy'] = setFormatNumberStyle(PMIBuyResult);
  result['maintenance-rent'] = setFormatNumberStyle(maintenanceRentResult);
  result['maintenance-buy'] = setFormatNumberStyle(maintenanceBuyResult);
  result['total-payments-rent'] = setFormatNumberStyle(totalPaymentsRentResult);
  result['total-payments-buy'] = setFormatNumberStyle(totalPaymentsBuyResult);
  result['average-monthly-rent'] = setFormatNumberStyle(averageMonthlyRentResult);
  result['average-monthly-buy'] = setFormatNumberStyle(averageMonthlyBuyResult);
  result['monthly-rent-savings'] = setFormatNumberStyle(monthlyRentSavingsResult);
  result['tax-savings-rent'] = setFormatNumberStyle(taxSavingsRentResult);
  result['tax-savings-buy'] = setFormatNumberStyle(taxSavingsBuyResult);
  result['total-rent-savings'] = setFormatNumberStyle(totalRentSavingsResult);
  result['house-appreciation-value'] = setFormatNumberStyle(houseAppreciationValueResult);
  result['proceeds-minus-costs'] = setFormatNumberStyle(proceedsMinusCostsResult);
  result['loan-balance'] = setFormatNumberStyle(loanBalanceResult);
  result['equity-appreciation'] = setFormatNumberStyle(equityAppreciationResult);
  result['home-purchase-benefits'] = setFormatNumberStyle(homePurchaseBenefitsResult);
};

export default calc;
