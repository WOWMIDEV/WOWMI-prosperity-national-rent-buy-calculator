// Set formats only for results
const setFixedNumber = (dataFormat) => +dataFormat.toFixed(2);

// default global const
const MONTH_IN_YEAR = 12;
const LOAN_POSITIVE = 80;
const PERCENT_BASE = 100;

/*-*/
const getYearResult = (monthlyRentNew) => monthlyRentNew * MONTH_IN_YEAR;

const getMonthlyResult = (monthlyRentNew, annualRentIncrease) => {
  const result = (monthlyRentNew * annualRentIncrease) / PERCENT_BASE;
  return result + monthlyRentNew;
};
/*-*/

/*-*/
const getTaxesInsuranceBuy = (annualTax, annualInsurance, yearsBefore) => {
  const result = (annualTax + annualInsurance) * yearsBefore;
  return +result;
};
/*-*/

/*-*/
const getAnnualTax = (annualTax, switchTaxes, amountResult) => {
  if (switchTaxes === '$') {
    return +annualTax;
  }
  const result = amountResult * (annualTax / PERCENT_BASE);
  return +result;
};

const getAnnualInsurance = (annualInsurance, switchInsurance, amountResult) => {
  if (switchInsurance === '$') {
    return +annualInsurance;
  }
  const result = amountResult * (annualInsurance / PERCENT_BASE);
  return +result;
};

const getAnnualTaxRate = (yourTaxRate, switchTaxRate) => {
  if (switchTaxRate === '$') {
    return +yourTaxRate;
  }
  const result = yourTaxRate / PERCENT_BASE;
  return +result;
};

const getMaintenanceBuyResult = (annualAppreciation, yearsBefore) => {
  const result = annualAppreciation * yearsBefore;
  return +result;
};
/*-*/

const getInterestRateMonthly = (interestRate) => {
  const result = interestRate / PERCENT_BASE / MONTH_IN_YEAR;
  return +result;
};

const getResMonthlyPI = (amountResult, interestRateMonthlyResult, paymentsMonthResult) => {
  if (interestRateMonthlyResult !== 0) {
    const result = (amountResult * interestRateMonthlyResult * (1 + interestRateMonthlyResult) ** paymentsMonthResult)
      / ((1 + interestRateMonthlyResult) ** paymentsMonthResult - 1);

    return +result;
  }
  return 0;
};

const getInterestNew = (amountResultNew, interestRateResult) => {
  if (interestRateResult !== 0) {
    const result = (amountResultNew * interestRateResult) / MONTH_IN_YEAR;
    return +result;
  }
  return 0;
};

const getResMonthlyInterest = (amountResult, interestRateResult) => {
  const result = (amountResult * interestRateResult) / MONTH_IN_YEAR;
  return +result;
};

const getInterestRate = (interestRate) => {
  const result = interestRate / PERCENT_BASE;
  return +result;
};

const getMonthlyPMI = (annualPMIResult, switchPMI, loanValueRatioResult, interestRateResult) => {
  if (interestRateResult !== 0 && loanValueRatioResult > LOAN_POSITIVE) {
    return +annualPMIResult / MONTH_IN_YEAR;
  }
  return 0;
};

const getAnnualPMI = (annualPmi, switchPMI, amountResult) => {
  if (switchPMI === '$') {
    return +annualPmi;
  }
  const result = amountResult * (annualPmi / PERCENT_BASE);
  return +result;
};

/*-*/
const getValueRatio = (amountResult, homeValue) => {
  const result = (amountResult * PERCENT_BASE) / homeValue;
  return +result;
};

const getMonthlyTax = (annualTaxResult) => +annualTaxResult / MONTH_IN_YEAR;

const getMonthlyInsurance = (annualInsuranceResult) => +annualInsuranceResult / MONTH_IN_YEAR;

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

    while (loanValueResNew > LOAN_POSITIVE) {
      countMonth += 1;
      const interestRateMonthlyResultNew = getInterestNew(amountResultNew, interestRateResult);
      const interest = interestRateMonthlyResultNew ?? 0;
      amountResultNew -= monthlyPIResult - interest;
      loanValueResNew = (amountResultNew * PERCENT_BASE) / homeValue;
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
    const result = (amountResult * interestRateMonthlyResult * (1 + interestRateMonthlyResult) ** paymentsMonthResult)
        / ((1 + interestRateMonthlyResult) ** paymentsMonthResult - 1)
      + calcDetailsForMonthly;
    return +result.toFixed(3);
  }

  return 0;
};
/*-*/

/*-*/
const getPMIBuy = (annualPMIResult, monthPMIResult) => {
  const result = (annualPMIResult / MONTH_IN_YEAR) * monthPMIResult;
  return +result;
};
/*-*/

/*-*/
const getDifferencePmi = (monthsTotal, monthPMIResult, monthlyPMIResult) => {
  const result = (monthsTotal - monthPMIResult) * monthlyPMIResult;
  return +result;
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

  return +lastYear;
};

const getTotalBuy = (monthlyPMIResult, monthlyPaymentResult, annualMaintenance, monthsTotal, differenceWithoutPmi) => {
  const totalMonthly = +monthlyPaymentResult + +annualMaintenance / MONTH_IN_YEAR;
  const result = totalMonthly * monthsTotal - differenceWithoutPmi;
  return +result;
};
/*-*/

/*-*/
const getAverageMonthlyRent = (totalPaymentsRentResult, monthsTotal) => {
  if (totalPaymentsRentResult !== 0) {
    return +totalPaymentsRentResult / +monthsTotal;
  }
  return 0;
};

const getAverageMonthlyBuy = (totalPaymentsBuyResult, monthsTotal) => {
  if (totalPaymentsBuyResult !== 0) {
    return +totalPaymentsBuyResult / monthsTotal;
  }
  return 0;
};
/*-*/

/*-*/
const getMonthlyRentSavings = (averageMonthlyRentResult, averageMonthlyBuyResult) => {
  if (averageMonthlyRentResult !== 0) {
    const result = Math.abs(averageMonthlyRentResult - averageMonthlyBuyResult);
    return +result;
  }
  return 0;
};
/*-*/

/*-*/
const getTaxRentSavings = (amountResult, points, yourTaxRateResult, annualTaxResult, yearsBefore) => {
  const pointsPercent = points / PERCENT_BASE;
  const taxResult = annualTaxResult * yourTaxRateResult * yearsBefore;
  const pointsResult = amountResult * yourTaxRateResult * pointsPercent;
  const result = Math.abs(pointsResult + taxResult);

  return +result;
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

const getNewValue = (homeValueNew, annualAppreciationNew) => homeValueNew * annualAppreciationNew;
const getHouseAppreciationValue = (homeValue, yearsBefore, annualAppreciation) => {
  if (homeValue !== 0) {
    let newValue = 0;
    const annualAppreciationNew = annualAppreciation / PERCENT_BASE;
    let homeValueNew = homeValue;
    let counter = 0;
    while (counter < yearsBefore) {
      counter += 1;
      newValue = getNewValue(homeValueNew, annualAppreciationNew);
      homeValueNew += newValue;
    }
    return +homeValueNew;
  }
  return 0;
};
/*-*/

/*-*/
const getLoanBalance = (amountResult, monthlyPIResult, paymentsMonthResult, interestRateResult, monthTotal) => {
  if (interestRateResult !== 0) {
    let countMonth = 0;
    let amountResultNew = amountResult;

    while (countMonth < monthTotal) {
      countMonth += 1;
      const interestRateMonthlyResultNew = (amountResultNew * interestRateResult) / MONTH_IN_YEAR;
      const interest = interestRateMonthlyResultNew ?? 0;

      amountResultNew -= monthlyPIResult - interest;
    }

    return +amountResultNew;
  }
  return 0;
};
/*-*/

/*-*/
const getProceedsMinusCosts = (houseAppreciationValueResult, sellingCost) => {
  if (sellingCost !== 0) {
    const percentCost = sellingCost / PERCENT_BASE;
    const hoseCostDifference = houseAppreciationValueResult * percentCost;
    const result = houseAppreciationValueResult - hoseCostDifference;

    return +result;
  }
  return 0;
};
/*-*/

/*-*/
const getEquityAppreciation = (proceedsMinusCostsResult, loanBalanceResult) => {
  if (loanBalanceResult !== 0) {
    const result = Math.abs(proceedsMinusCostsResult - loanBalanceResult);

    return +result;
  }
  return 0;
};
/*-*/

/*-*/
const getHomePurchaseBenefits = (equityAppreciationResult, totalRentSavingsResult) => {
  if (totalRentSavingsResult !== 0) {
    const result = equityAppreciationResult - totalRentSavingsResult;
    return +result;
  }
  return 0;
};
/*-*/

/* -Calc-*/
const calc = (elements, watchedState) => {
  const { form, result } = watchedState;
  const { values, exclude } = form;

  // input values
  const MONTHLY_RENT = values['monthly-rent'];
  const ANNUAL_RENT_INCREASE = values['annual-rent-increase'];
  const ANNUAL_MAINTENANCE = values['annual-maintenance'];
  const ANNUAL_APPRECIATION = values['annual-appreciation'];
  const HOME_VALUE = values['home-value'];
  const YEARS_BEFORE = values['years-before'];
  const SELLING_COST = values['selling-cost'];
  const AMOUNT_RESULT = values.amount;
  const INTEREST_RATE = values['interest-rate'];
  const YOUR_TAX_RATE = values['your-tax-rate'];
  const ANNUAL_TAX = values['annual-tax'];
  const ANNUAL_INSURANCE = values['annual-insurance'];
  const ANNUAL_PMI = values['annual-pmi'];
  const { term } = values;
  const { points } = values;
  // * switchers
  const SWITCH_TAX_RATE = exclude['switch-tax-rate'];
  const SWITCH_TAXES = exclude['switch-taxes'];
  const SWITCH_INSURANCE = exclude['switch-insurance'];
  const SWITCH_PMI = exclude['switch-pmi'];

  // results calc
  const monthsTotal = +YEARS_BEFORE * MONTH_IN_YEAR;
  const yourTaxRateResult = getAnnualTaxRate(YOUR_TAX_RATE, SWITCH_TAX_RATE);
  const annualTaxResult = getAnnualTax(ANNUAL_TAX, SWITCH_TAXES, AMOUNT_RESULT);
  const annualInsuranceResult = getAnnualInsurance(ANNUAL_INSURANCE, SWITCH_INSURANCE, AMOUNT_RESULT);
  /* -For month pmi--*/
  const loanValueRatioResult = getValueRatio(AMOUNT_RESULT, HOME_VALUE);
  const interestRateResult = getInterestRate(INTEREST_RATE);
  const paymentsMonthResult = +term * MONTH_IN_YEAR;
  const interestRateMonthlyResult = getInterestRateMonthly(INTEREST_RATE);
  const monthlyPIResult = getResMonthlyPI(AMOUNT_RESULT, interestRateMonthlyResult, paymentsMonthResult);
  const monthlyInterestResult = getResMonthlyInterest(AMOUNT_RESULT, interestRateResult);
  const annualPMIResult = getAnnualPMI(ANNUAL_PMI, SWITCH_PMI, AMOUNT_RESULT);
  const monthlyPMIResult = getMonthlyPMI(annualPMIResult, SWITCH_PMI, loanValueRatioResult, interestRateResult);
  const monthPMIResult = getMonthPMI(
    loanValueRatioResult,
    AMOUNT_RESULT,
    HOME_VALUE,
    monthlyPIResult,
    monthlyInterestResult,
    monthlyPMIResult,
    paymentsMonthResult,
    interestRateResult,
    interestRateMonthlyResult,
  );
  const monthlyTaxResult = getMonthlyTax(annualTaxResult, SWITCH_TAXES, AMOUNT_RESULT);
  const monthlyInsuranceResult = getMonthlyInsurance(annualInsuranceResult, SWITCH_INSURANCE, AMOUNT_RESULT);
  const monthlyPaymentResult = getResMonthlyPayment(
    AMOUNT_RESULT,
    interestRateMonthlyResult,
    paymentsMonthResult,
    monthlyTaxResult,
    monthlyInsuranceResult,
    monthlyPMIResult,
  );
  const differenceWithoutPmi = getDifferencePmi(monthsTotal, monthPMIResult, monthlyPMIResult);
  /* -For month pmi--*/

  // part 1
  const taxesInsuranceRentResult = 0;
  const taxesInsuranceBuyResult = getTaxesInsuranceBuy(ANNUAL_TAX, ANNUAL_INSURANCE, YEARS_BEFORE);
  const PMIRentResult = 0;
  const PMIBuyResult = getPMIBuy(annualPMIResult, monthPMIResult);
  const maintenanceRentResult = 0;
  const maintenanceBuyResult = getMaintenanceBuyResult(ANNUAL_MAINTENANCE, YEARS_BEFORE);

  const totalPaymentsRentResult = getTotalRent(YEARS_BEFORE, MONTHLY_RENT, ANNUAL_RENT_INCREASE);
  const totalPaymentsBuyResult = getTotalBuy(
    monthlyPMIResult,
    monthlyPaymentResult,
    ANNUAL_MAINTENANCE,
    monthsTotal,
    differenceWithoutPmi,
  );

  // part 2
  const averageMonthlyRentResult = getAverageMonthlyRent(totalPaymentsRentResult, monthsTotal);
  const averageMonthlyBuyResult = getAverageMonthlyBuy(totalPaymentsBuyResult, monthsTotal);
  const monthlyRentSavingsResult = getMonthlyRentSavings(averageMonthlyRentResult, averageMonthlyBuyResult);
  const taxSavingsRentResult = 0;
  const taxSavingsBuyResult = getTaxRentSavings(AMOUNT_RESULT, points, yourTaxRateResult, annualTaxResult, YEARS_BEFORE);
  const totalRentSavingsResult = getTotalRentSavings(
    totalPaymentsBuyResult,
    totalPaymentsRentResult,
    taxSavingsBuyResult,
  );

  // part 3
  const houseAppreciationValueResult = getHouseAppreciationValue(HOME_VALUE, YEARS_BEFORE, ANNUAL_APPRECIATION);
  const proceedsMinusCostsResult = getProceedsMinusCosts(houseAppreciationValueResult, SELLING_COST);
  const loanBalanceResult = getLoanBalance(
    AMOUNT_RESULT,
    monthlyPIResult,
    paymentsMonthResult,
    interestRateResult,
    monthsTotal,
  );
  const equityAppreciationResult = getEquityAppreciation(proceedsMinusCostsResult, loanBalanceResult);
  const homePurchaseBenefitsResult = getHomePurchaseBenefits(equityAppreciationResult, totalRentSavingsResult);

  // values output / details
  result['monthly-rent'] = setFixedNumber(MONTHLY_RENT);
  result['annual-rent-increase'] = setFixedNumber(ANNUAL_RENT_INCREASE);
  result['annual-maintenance'] = setFixedNumber(ANNUAL_MAINTENANCE);
  result['annual-appreciation'] = setFixedNumber(ANNUAL_APPRECIATION);
  result['home-value'] = setFixedNumber(HOME_VALUE);
  result['years-before'] = YEARS_BEFORE;
  result['selling-cost'] = setFixedNumber(SELLING_COST);
  result.amount = setFixedNumber(AMOUNT_RESULT);
  result['interest-rate'] = setFixedNumber(INTEREST_RATE);
  result.term = term;
  result.points = setFixedNumber(points);
  result['your-tax-rate'] = setFixedNumber(YOUR_TAX_RATE);
  result['annual-tax'] = setFixedNumber(annualTaxResult);
  result['annual-insurance'] = setFixedNumber(annualInsuranceResult);
  result['annual-pmi'] = setFixedNumber(ANNUAL_PMI);
  result['taxes-insurance-rent'] = setFixedNumber(taxesInsuranceRentResult);
  result['taxes-insurance-buy'] = setFixedNumber(taxesInsuranceBuyResult);
  result['pmi-rent'] = setFixedNumber(PMIRentResult);
  result['pmi-buy'] = setFixedNumber(PMIBuyResult);
  result['maintenance-rent'] = setFixedNumber(maintenanceRentResult);
  result['maintenance-buy'] = setFixedNumber(maintenanceBuyResult);
  result['total-payments-rent'] = setFixedNumber(totalPaymentsRentResult);
  result['total-payments-buy'] = setFixedNumber(totalPaymentsBuyResult);
  result['average-monthly-rent'] = setFixedNumber(averageMonthlyRentResult);
  result['average-monthly-buy'] = setFixedNumber(averageMonthlyBuyResult);
  result['monthly-rent-savings'] = setFixedNumber(monthlyRentSavingsResult);
  result['tax-savings-rent'] = setFixedNumber(taxSavingsRentResult);
  result['tax-savings-buy'] = setFixedNumber(taxSavingsBuyResult);
  result['total-rent-savings'] = setFixedNumber(totalRentSavingsResult);
  result['house-appreciation-value'] = setFixedNumber(houseAppreciationValueResult);
  result['proceeds-minus-costs'] = setFixedNumber(proceedsMinusCostsResult);
  result['loan-balance'] = setFixedNumber(loanBalanceResult);
  result['equity-appreciation'] = setFixedNumber(equityAppreciationResult);
  result['home-purchase-benefits'] = setFixedNumber(homePurchaseBenefitsResult);
};

export default calc;
