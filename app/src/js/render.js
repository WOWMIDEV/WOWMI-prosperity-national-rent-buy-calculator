// VIEW
const renderFormatLocale = (resultValue) => resultValue.toLocaleString('en-US', { minimumFractionDigits: 2 });

// render details functions

const renderMonthlyRent = (elements, watchedState) => {
  const { resultMonthlyRent } = elements;
  const { result } = watchedState;
  resultMonthlyRent.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['monthly-rent']);
  });
};
const renderAnnualRentIncrease = (elements, watchedState) => {
  const { resultAnnualRentIncrease } = elements;
  const { result } = watchedState;

  resultAnnualRentIncrease.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['annual-rent-increase']);
  });
};
const renderTotalPaymentsRent = (elements, watchedState) => {
  const { resultTotalPaymentsRent } = elements;
  const { result } = watchedState;

  resultTotalPaymentsRent.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['total-payments-rent']);
  });
};
const renderTotalPaymentsBuy = (elements, watchedState) => {
  const { resultTotalPaymentsBuy } = elements;
  const { result } = watchedState;

  resultTotalPaymentsBuy.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['total-payments-buy']);
  });
};
const renderYearsBefore = (elements, watchedState) => {
  const { resultYearsBefore } = elements;
  const { result } = watchedState;

  resultYearsBefore.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = result['years-before'];
  });
};
const renderAmount = (elements, watchedState) => {
  const { resultAmount } = elements;
  const { result } = watchedState;

  resultAmount.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['amount']);
  });
};
const renderInterestRate = (elements, watchedState) => {
  const { resultInterestRate } = elements;
  const { result } = watchedState;

  resultInterestRate.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['interest-rate']);
  });
};
const renderAnnualMaintenance = (elements, watchedState) => {
  const { resultAnnualMaintenance } = elements;
  const { result } = watchedState;

  resultAnnualMaintenance.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['annual-maintenance']);
  });
};
const renderTaxesInsuranceRent = (elements, watchedState) => {
  const { resultTaxesInsuranceRent } = elements;
  const { result } = watchedState;

  resultTaxesInsuranceRent.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['taxes-insurance-rent']);
  });
};
const renderTaxesInsuranceBuy = (elements, watchedState) => {
  const { resultTaxesInsuranceBuy } = elements;
  const { result } = watchedState;

  resultTaxesInsuranceBuy.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['taxes-insurance-buy']);
  });
};
const renderMaintenanceRent = (elements, watchedState) => {
  const { resultMaintenanceRent } = elements;
  const { result } = watchedState;

  resultMaintenanceRent.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['maintenance-rent']);
  });
};
const renderMaintenanceBuy = (elements, watchedState) => {
  const { resultMaintenanceBuy } = elements;
  const { result } = watchedState;

  resultMaintenanceBuy.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['maintenance-buy']);
  });
};
const renderPmiRent = (elements, watchedState) => {
  const { resultPmiRent } = elements;
  const { result } = watchedState;

  resultPmiRent.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['pmi-rent']);
  });
};
const renderPmiBuy = (elements, watchedState) => {
  const { resultPmiBuy } = elements;
  const { result } = watchedState;

  resultPmiBuy.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['pmi-buy']);
  });
};

const renderAverageMonthlyRent = (elements, watchedState) => {
  const { resultAverageMonthlyRent } = elements;
  const { result } = watchedState;

  resultAverageMonthlyRent.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['average-monthly-rent']);
  });
};
const renderAverageMonthlyBuy = (elements, watchedState) => {
  const { resultAverageMonthlyBuy } = elements;
  const { result } = watchedState;

  resultAverageMonthlyBuy.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['average-monthly-buy']);
  });
};
const renderMonthlyRentSavings = (elements, watchedState) => {
  const { resultMonthlyRentSavings } = elements;
  const { result } = watchedState;

  resultMonthlyRentSavings.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['monthly-rent-savings']);
  });
};
const renderHouseAppreciationValue = (elements, watchedState) => {
  const { resultHouseAppreciationValue } = elements;
  const { result } = watchedState;

  resultHouseAppreciationValue.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['house-appreciation-value']);
  });
};
const renderLoanBalance = (elements, watchedState) => {
  const { resultLoanBalance } = elements;
  const { result } = watchedState;

  resultLoanBalance.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['loan-balance']);
  });
};
const renderProceedsMinusCosts = (elements, watchedState) => {
  const { resultProceedsMinusCosts } = elements;
  const { result } = watchedState;

  resultProceedsMinusCosts.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['proceeds-minus-costs']);
  });
};

const renderEquityAppreciation = (elements, watchedState) => {
  const { resultEquityAppreciation } = elements;
  const { result } = watchedState;

  resultEquityAppreciation.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['equity-appreciation']);
  });
};
const renderTaxSavingsRent = (elements, watchedState) => {
  const { resultTaxSavingsRent } = elements;
  const { result } = watchedState;

  resultTaxSavingsRent.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['tax-savings-rent']);
  });
};
const renderTaxSavingsBuy = (elements, watchedState) => {
  const { resultTaxSavingsBuy } = elements;
  const { result } = watchedState;

  resultTaxSavingsBuy.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['tax-savings-buy']);
  });
};
const renderTotalRentSavings = (elements, watchedState) => {
  const { resultTotalRentSavings } = elements;
  const { result } = watchedState;

  resultTotalRentSavings.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['total-rent-savings']);
  });
};
const renderHomePurchaseBenefits = (elements, watchedState) => {
  const { resultHomePurchaseBenefits } = elements;
  const { result } = watchedState;

  resultHomePurchaseBenefits.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['home-purchase-benefits']);
  });
};

const renderYourTaxRate = (elements, watchedState) => {
  const { resultYourTaxRate } = elements;
  const { result } = watchedState;

  resultYourTaxRate.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['your-tax-rate']);
  });
};
const renderAnnualTaxResult = (elements, watchedState) => {
  const { resultAnnualTax } = elements;
  const { result } = watchedState;

  resultAnnualTax.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['annual-tax']);
  });
};
const renderAnnualInsuranceResult = (elements, watchedState) => {
  const { resultAnnualInsurance } = elements;
  const { result } = watchedState;

  resultAnnualInsurance.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['annual-insurance']);
  });
};
const renderAnnualAppreciationResult = (elements, watchedState) => {
  const { resultAnnualAppreciation } = elements;
  const { result } = watchedState;

  resultAnnualAppreciation.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['annual-appreciation']);
  });
};
const renderSellingCostResult = (elements, watchedState) => {
  const { resultSellingCost } = elements;
  const { result } = watchedState;

  resultSellingCost.forEach((resultItem) => {
    const elem = resultItem;
    elem.innerHTML = renderFormatLocale(result['selling-cost']);
  });
};


export const render = (elements, watchedState) => {
  // renders results
  renderMonthlyRent(elements, watchedState);
  renderAnnualRentIncrease(elements, watchedState);
  renderTotalPaymentsRent(elements, watchedState);
  renderTotalPaymentsBuy(elements, watchedState);
  renderYearsBefore(elements, watchedState);
  renderAmount(elements, watchedState);
  renderInterestRate(elements, watchedState);
  renderAnnualMaintenance(elements, watchedState);
  renderTaxesInsuranceRent(elements, watchedState);
  renderTaxesInsuranceBuy(elements, watchedState);
  renderMaintenanceRent(elements, watchedState);
  renderMaintenanceBuy(elements, watchedState);
  renderPmiRent(elements, watchedState);
  renderPmiBuy(elements, watchedState);
  renderAverageMonthlyRent(elements, watchedState);
  renderAverageMonthlyBuy(elements, watchedState);
  renderMonthlyRentSavings(elements, watchedState);
  renderHouseAppreciationValue(elements, watchedState);
  renderLoanBalance(elements, watchedState);
  renderProceedsMinusCosts(elements, watchedState);
  renderEquityAppreciation(elements, watchedState);
  renderTaxSavingsRent(elements, watchedState);
  renderTaxSavingsBuy(elements, watchedState);
  renderTotalRentSavings(elements, watchedState);
  renderHomePurchaseBenefits(elements, watchedState);

  renderYourTaxRate(elements, watchedState);
  renderAnnualTaxResult(elements, watchedState);
  renderAnnualInsuranceResult(elements, watchedState);
  renderAnnualAppreciationResult(elements, watchedState);
  renderSellingCostResult(elements, watchedState);


};
