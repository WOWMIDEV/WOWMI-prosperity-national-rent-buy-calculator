import onChange from 'on-change';
import calc from './calc';
import { render } from './render';

// controller
// watch switcher changes
const updateExclude = (form, watchedState) => {
  const excludesElements = form.querySelectorAll('.switcher');
  const { exclude } = watchedState.form;

  [...excludesElements].forEach((excludeItem) => {
    if (excludeItem.checked) {
      exclude[excludeItem.name] = excludeItem.value;
    }
  });
};

const updateValues = (elements, watchedState) => {
  const { values } = watchedState.form;
  const { form } = elements;
  const formData = new FormData(form);

  // update values
  [...formData.entries()].forEach(([key, value]) => {
    if (key in values) {
      values[key] = value === '' ? 0 : +value;
    }
  });

  // update exclude list
  updateExclude(form, watchedState);
};

const init = () => {
  // MODEL
  const elements = {
    form: document.forms.calculatorRentBuy,
    // values
    resultMonthlyRent: document.querySelectorAll('[data-calc-result="monthly-rent"]'),
    resultAnnualRentIncrease: document.querySelectorAll('[data-calc-result="annual-rent-increase"]'),
    resultAnnualMaintenance: document.querySelectorAll('[data-calc-result="annual-maintenance"]'),
    resultAnnualAppreciation: document.querySelectorAll('[data-calc-result="annual-appreciation"]'),
    resultHomeValue: document.querySelector('[data-calc-result="home-value"]'),
    resultYearsBefore: document.querySelectorAll('[data-calc-result="years-before"]'),
    resultSellingCost: document.querySelectorAll('[data-calc-result="selling-cost"]'),
    resultAmount: document.querySelectorAll('[data-calc-result="amount"]'),
    resultInterestRate: document.querySelectorAll('[data-calc-result="interest-rate"]'),
    resultTerm: document.querySelectorAll('[data-calc-result="term"]'),
    resultPoints: document.querySelectorAll('[data-calc-result="points"]'),
    resultYourTaxRate: document.querySelectorAll('[data-calc-result="your-tax-rate"]'),
    resultAnnualTax: document.querySelectorAll('[data-calc-result="annual-tax"]'),
    resultAnnualInsurance: document.querySelectorAll('[data-calc-result="annual-insurance"]'),
    resultAnnualPmi: document.querySelectorAll('[data-calc-result="annual-pmi"]'),

    // part 1
    resultTaxesInsuranceRent: document.querySelectorAll('[data-calc-result="taxes-insurance-rent"]'),
    resultTaxesInsuranceBuy: document.querySelectorAll('[data-calc-result="taxes-insurance-buy"]'),
    resultPmiRent: document.querySelectorAll('[data-calc-result="pmi-rent"]'),
    resultPmiBuy: document.querySelectorAll('[data-calc-result="pmi-buy"]'),
    resultMaintenanceRent: document.querySelectorAll('[data-calc-result="maintenance-rent"]'),
    resultMaintenanceBuy: document.querySelectorAll('[data-calc-result="maintenance-buy"]'),
    resultTotalPaymentsRent: document.querySelectorAll('[data-calc-result="total-payments-rent"]'),
    resultTotalPaymentsBuy: document.querySelectorAll('[data-calc-result="total-payments-buy"]'),

    // part 2
    resultAverageMonthlyRent: document.querySelectorAll('[data-calc-result="average-monthly-rent"]'),
    resultAverageMonthlyBuy: document.querySelectorAll('[data-calc-result="average-monthly-buy"]'),
    resultMonthlyRentSavings: document.querySelectorAll('[data-calc-result="monthly-rent-savings"]'),
    resultTaxSavingsRent: document.querySelectorAll('[data-calc-result="tax-savings-rent"]'),
    resultTaxSavingsBuy: document.querySelectorAll('[data-calc-result="tax-savings-buy"]'),
    resultTotalRentSavings: document.querySelectorAll('[data-calc-result="total-rent-savings"]'),

    // part 3
    resultHouseAppreciationValue: document.querySelectorAll('[data-calc-result="house-appreciation-value"]'),
    resultProceedsMinusCosts: document.querySelectorAll('[data-calc-result="proceeds-minus-costs"]'),
    resultLoanBalance: document.querySelectorAll('[data-calc-result="loan-balance"]'),
    resultEquityAppreciation: document.querySelectorAll('[data-calc-result="equity-appreciation"]'),
    resultHomePurchaseBenefits: document.querySelectorAll('[data-calc-result="home-purchase-benefits"]'),
  };

  // MODEL
  const state = {
    form: {
      values: {
        // input values
        'monthly-rent': 0,
        'annual-rent-increase': 0,
        'annual-maintenance': 0,
        'annual-appreciation': 0,
        'home-value': 0,
        'years-before': 0,
        'selling-cost': 0,
        amount: 0,
        'interest-rate': 0,
        term: 0,
        points: 0,
        'your-tax-rate': 0,
        'annual-tax': 0,
        'annual-insurance': 0,
        'annual-pmi': 0,
      },
      exclude: {
        'switch-tax-rate': '%',
        'switch-taxes': '$',
        'switch-insurance': '$',
        'switch-pmi': '%',
      },
    },
    result: {
      // first
      'taxes-insurance-rent': 0,
      'taxes-insurance-buy': 0,
      'pmi-rent': 0,
      'pmi-buy': 0,
      'maintenance-rent': 0,
      'maintenance-buy': 0,
      'total-payments-rent': 0,
      'total-payments-buy': 0,

      'average-monthly-rent': 0,
      'average-monthly-buy': 0,
      'monthly-rent-savings': 0,
      'tax-savings-rent': 0,
      'tax-savings-buy': 0,
      'total-rent-savings': 0,

      'house-appreciation-value': 0,
      'proceeds-minus-costs': 0,
      'loan-balance': 0,
      'equity-appreciation': 0,
      'home-purchase-benefits': 0,
    },
  };

  // MODEL
  const watchedState = onChange(state, () => {
    calc(elements, watchedState);
  });

  // CONTROLLER
  const { form } = elements;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    render(elements, watchedState);
  });

  form.addEventListener('change', () => {
    updateValues(elements, watchedState);
    render(elements, watchedState);
  });

  // FIRST START
  updateValues(elements, watchedState);
  render(elements, watchedState);
};

init();
