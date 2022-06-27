const htmlTemplateForm = () => {
    const calculatorWrp = document.getElementById('calculator-rent-buy');

    if(!calculatorWrp) {
        return false;
    }

    const html = `<div class="calc-wrp">
        <section class="calc-wrp__container">
            <div class="calc-wrp__form-block-wrapper">
                <div class="container">
                    <form id="calculatorRentBuy" name="calculatorRentBuy" method="get" class="calc-wrp__form">
                        <div class="calc-wrp__line">
                            <div class="calc-wrp__inner-line">
                                <div class="calc-wrp__item">
                                    <h3 class="calc-wrp__header">Rent Info</h3>
                                    <label for="monthly-rent" class="calculator-form__label">
                                        Monthly rent, $
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           name="monthly-rent"
                                           placeholder="800.00"
                                           value="800.00"
                                           id="monthly-rent">
                                </div>
                                <div class="calc-wrp__item">
                                    <label for="annual-rent-increase" class="calculator-form__label">
                                        Annual rent increase, %
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           value="4.00"
                                           name="annual-rent-increase"
                                           placeholder="4.00"
                                           id="annual-rent-increase">
                                </div>
                            </div>
                        </div>
                        <div class="calc-wrp__line">
                            <div class="calc-wrp__inner-line">
                                <div class="calc-wrp__item">
                                    <h3 class="calc-wrp__header">Property information</h3>
                                    <label for="home-value" class="calculator-form__label">
                                        Home value, $
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           name="home-value"
                                           placeholder="300000.00"
                                           value="300000.00"
                                           id="home-value">
                                </div>
                                <div class="calc-wrp__item">
                                    <label for="annual-maintenance" class="calculator-form__label">
                                        Annual maintenance, $
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           value="900.00"
                                           name="annual-maintenance"
                                           placeholder="900.00"
                                           id="annual-maintenance">
                                </div>
                                <div class="calc-wrp__item">
                                    <label for="annual-appreciation" class="calculator-form__label">
                                        Annual appreciation, %
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           value="5.00"
                                           name="annual-appreciation"
                                           placeholder="5.00"
                                           id="annual-appreciation">
                                </div>
                                <div class="calc-wrp__item">
                                    <label for="years-before" class="calculator-form__label">
                                        Years before sell, yrs
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="1"
                                           step="1"
                                           value="5"
                                           name="years-before"
                                           placeholder="5"
                                           id="years-before">
                                </div>
                                <div class="calc-wrp__item">
                                    <label for="selling-cost" class="calculator-form__label">
                                        Selling cost, %
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           value="7.00"
                                           name="selling-cost"
                                           placeholder="7.00"
                                           id="selling-cost">
                                </div>
                            </div>
                        </div>

                        <div class="calc-wrp__line">
                            <div class="calc-wrp__inner-line">
                                <div class="calc-wrp__item">
                                    <h3 class="calc-wrp__header">Loan information</h3>
                                    <label for="amount" class="calculator-form__label">
                                        Amount, $
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           name="amount"
                                           placeholder="250000.00"
                                           value="250000.00"
                                           id="amount">
                                </div>
                                <div class="calc-wrp__item">
                                    <label for="interest-rate" class="calculator-form__label">
                                        Interest Rate, %
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           value="4.00"
                                           name="interest-rate"
                                           placeholder="4.00"
                                           id="interest-rate">
                                </div>
                                <div class="calc-wrp__item">
                                    <label for="term" class="calculator-form__label">
                                        Length, yrs
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="1"
                                           value="30"
                                           name="term"
                                           placeholder="30"
                                           id="term">
                                </div>
                                <div class="calc-wrp__item">
                                    <label for="points" class="calculator-form__label">
                                        Points, %
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           min="0"
                                           step="0.1"
                                           value="1.00"
                                           name="points"
                                           placeholder="1.00"
                                           id="points">
                                </div>
                            </div>
                        </div>

                        <div class="calc-wrp__line">
                            <h3 class="calc-wrp__header">Taxes and insurance information</h3>
                            <div class="calc-wrp__inner-line">

                                <div class="calc-wrp__item">
                                    <div class="switcher-parent">
                                        <label class="switcher-label" for="switch-tax-rate-percent">
                                            <input type="radio"
                                                   name="switch-tax-rate"
                                                   data-target="your-tax-rate"
                                                   value="%"
                                                   class="switcher"
                                                   id="switch-tax-rate-percent"
                                                   checked="checked">
                                            <div class="radio-icon">%</div>
                                        </label>
                                    </div>
                                    <label for="your-tax-rate" class="calculator-form__label">
                                        Your Tax Rate
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           name="your-tax-rate"
                                           placeholder="26.00"
                                           value="26.00"
                                           min="0"
                                           step="0.1"
                                           id="your-tax-rate">
                                </div>
                                <div class="calc-wrp__item">
                                    <div class="switcher-parent">
                                        <label class="switcher-label" for="switch-taxes-currency">
                                            <input type="radio"
                                                   name="switch-taxes"
                                                   data-target="annual-tax"
                                                   value="$"
                                                   class="switcher"
                                                   id="switch-taxes-currency"
                                                   checked="checked">
                                            <div class="radio-icon">$</div>
                                        </label>
                                        <label class="switcher-label" for="switch-taxes-percent">
                                            <input type="radio"
                                                   name="switch-taxes"
                                                   data-target="annual-tax"
                                                   value="%"
                                                   class="switcher"
                                                   id="switch-taxes-percent">
                                            <div class="radio-icon">%</div>
                                        </label>
                                    </div>
                                    <label for="annual-tax" class="calculator-form__label">
                                        Annual Taxes
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           name="annual-tax"
                                           min="0"
                                           step="0.1"
                                           placeholder="3000.00"
                                           value="3000.00"
                                           id="annual-tax">
                                </div>

                                <div class="calc-wrp__item">
                                    <div class="switcher-parent">
                                        <label class="switcher-label" for="switch-insurance-currency">
                                            <input type="radio"
                                                   name="switch-insurance"
                                                   data-target="annual-insurance"
                                                   value="$"
                                                   class="switcher"
                                                   id="switch-insurance-currency"
                                                   checked="checked">
                                            <div class="radio-icon">$</div>
                                        </label>
                                        <label class="switcher-label" for="switch-insurance-percent">
                                            <input type="radio"
                                                   name="switch-insurance"
                                                   data-target="annual-insurance"
                                                   value="%"
                                                   class="switcher"
                                                   id="switch-insurance-percent">
                                            <div class="radio-icon">%</div>
                                        </label>
                                    </div>
                                    <label for="annual-insurance" class="calculator-form__label">
                                        Annual insurance
                                    </label>
                                    <div>
                                        <input type="number"
                                               class="calculator-form__input w-input"
                                               value="1500.00"
                                               placeholder="1500.00"
                                               min="0"
                                               step="0.1"
                                               name="annual-insurance"
                                               id="annual-insurance">
                                    </div>
                                </div>

                                <div class="calc-wrp__item">
                                    <div class="switcher-parent">
                                        <label class="switcher-label" for="switch-pmi-currency">
                                            <input type="radio"
                                                   name="switch-pmi"
                                                   data-target="annual-pmi"
                                                   value="$"
                                                   class="switcher"
                                                   id="switch-pmi-currency">
                                            <div class="radio-icon">$</div>
                                        </label>
                                        <label class="switcher-label" for="switch-pmi-percent">
                                            <input type="radio"
                                                   name="switch-pmi"
                                                   data-target="annual-pmi"
                                                   value="%"
                                                   class="switcher"
                                                   id="switch-pmi-percent"
                                                   checked="checked">
                                            <div class="radio-icon">%</div>
                                        </label>
                                    </div>
                                    <label for="annual-pmi" class="calculator-form__label">
                                        Annual PMI
                                    </label>
                                    <input type="number"
                                           class="calculator-form__input w-input"
                                           name="annual-pmi"
                                           placeholder="0.50"
                                           min="0"
                                           step="0.1"
                                           value="0.50"
                                           id="annual-pmi">
                                </div>

                                <div class="calc-wrp__item">
                                    <div class="btn calc-wrp__btn-calc">
                                        <div>Calculate now</div>
                                        <div class="btn-arrow svg-button-arrow">
                                            <div class="svg w-embed">
                                                <svg width="100%" viewBox="0 0 7 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.00749 1.10278L5.52171 5.60353L1 10.1028"
                                                          stroke="currentColor" stroke-width="1.49726"
                                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <input type="submit" value="Submit" data-wait="Please wait..."
                                               class="hero-form__submit">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div data-current="Tab 1" data-easing="ease"
                             data-duration-in="300" data-duration-out="100"
                             class="calculator-form__tabs w-tabs">
                            <div class="calculator-form__tab-menu w-tab-menu" role="tablist">
                                <a data-w-tab="Tab 1"
                                   class="calculator-form__tab-link w-inline-block w-tab-link w--current"
                                   id="w-tabs-0-data-w-tab-0"
                                   href="#w-tabs-0-data-w-pane-0"
                                   role="tab"
                                   aria-controls="w-tabs-0-data-w-pane-0"
                                   aria-selected="true">
                                    <div>Financial analysis</div>
                                </a>
                                <a data-w-tab="Tab 2"
                                   class="calculator-form__tab-link w-inline-block w-tab-link"
                                   tabindex="-1"
                                   id="w-tabs-0-data-w-tab-1"
                                   href="#w-tabs-0-data-w-pane-1"
                                   role="tab"
                                   aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
                                    <div>Plain english help</div>
                                </a>
                            </div>
                            <div class="w-tab-content">
                                <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0"
                                     role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">

                                    <div class="calculator-form__content-wrapper">
                                        <div class="calculator-form__titles-wrapper">
                                            <div class="calculator-form__title name">
                                                <div>Name</div>
                                            </div>
                                            <div class="calculator-form__title before">
                                                <div>Before</div>
                                            </div>
                                            <div class="calculator-form__title after">
                                                <div>After</div>
                                            </div>
                                        </div>
                                        <!--                                    first-->
                                        <div class="calculator-form__content-top">
                                            <!--                                        <ul role="list" class="calculator-form__list w-list-unstyled">-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Taxes and insurance, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Total PMI, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Total maintenance, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                        </ul>-->
                                            <div class="calculator-form__inputs-wrapper">
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Taxes and insurance, $</div>
                                                        </li>
                                                    </ul>

                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">Before</span>
                                                        <div data-calc-result="taxes-insurance-rent">0</div>
                                                    </div>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">After</span>
                                                        <div data-calc-result="taxes-insurance-buy">0</div>
                                                    </div>
                                                </div>
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Total PMI, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">Before</span>
                                                        <div data-calc-result="pmi-rent">0</div>
                                                    </div>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">After</span>
                                                        <div data-calc-result="pmi-buy">0</div>
                                                    </div>
                                                </div>
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Total maintenance, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">Before</span>
                                                        <div data-calc-result="maintenance-rent">0</div>
                                                    </div>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">After</span>
                                                        <div data-calc-result="maintenance-buy">0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="calculator-form__content-top result-block">
                                            <div class="calculator-form__result-title">Total payments</div>
                                            <div class="calculator-form__result-wrapper">
                                                <div class="calculator-form__result total"
                                                     data-calc-result="total-payments-rent">0
                                                </div>
                                                <div class="calculator-form__result total"
                                                     data-calc-result="total-payments-buy">0
                                                </div>
                                            </div>
                                        </div>
                                        <!--                                    second-->
                                        <div class="calculator-form__content-top">
                                            <!--                                        <ul role="list" class="calculator-form__list w-list-unstyled">-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Average Monthly Payment, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Monthly Rent Savings, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Tax Savings, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                        </ul>-->
                                            <div class="calculator-form__inputs-wrapper">
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Average Monthly Payment, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">Before</span>
                                                        <div data-calc-result="average-monthly-rent">0</div>
                                                    </div>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">After</span>
                                                        <div data-calc-result="average-monthly-buy">0</div>
                                                    </div>
                                                </div>
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Monthly Rent Savings, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input full-width">
                                                        <span class="mobile-comment">Total</span>
                                                        <div data-calc-result="monthly-rent-savings">0</div>
                                                    </div>
                                                </div>
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Tax Savings, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">Before</span>
                                                        <div data-calc-result="tax-savings-rent">0</div>
                                                    </div>
                                                    <div class="calculator-form__result-input">
                                                        <span class="mobile-comment">After</span>
                                                        <div data-calc-result="tax-savings-buy">0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="calculator-form__content-top result-block">
                                            <div class="calculator-form__result-title">Total Rent Savings</div>
                                            <div class="calculator-form__result-wrapper full-width">
                                                <div class="calculator-form__result total"
                                                     data-calc-result="total-rent-savings">0
                                                </div>
                                            </div>
                                        </div>
                                        <!--                                    third-->
                                        <div class="calculator-form__content-top">
                                            <!--                                        <ul role="list" class="calculator-form__list w-list-unstyled">-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>House Appreciation Value, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Proceeds Minus Costs, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Loan Balance, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="calculator-form__list-item">-->
                                            <!--                                                <div>Equity Appreciation, $</div>-->
                                            <!--                                            </li>-->
                                            <!--                                        </ul>-->
                                            <div class="calculator-form__inputs-wrapper">
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>House Appreciation Value, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input full-width">
                                                        <span class="mobile-comment">Total</span>
                                                        <div data-calc-result="house-appreciation-value">0</div>
                                                    </div>
                                                </div>
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Proceeds Minus Costs, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input full-width">
                                                        <span class="mobile-comment">Total</span>
                                                        <div data-calc-result="proceeds-minus-costs">0</div>
                                                    </div>
                                                </div>
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Loan Balance, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input full-width">
                                                        <span class="mobile-comment">Total</span>
                                                        <div data-calc-result="loan-balance">0</div>
                                                    </div>
                                                </div>
                                                <div class="calculator-form__inputs-line">
                                                    <ul role="list" class="calculator-form__list w-list-unstyled">
                                                        <li class="calculator-form__list-item">
                                                            <div>Equity Appreciation, $</div>
                                                        </li>
                                                    </ul>
                                                    <div class="calculator-form__result-input full-width">
                                                        <span class="mobile-comment">Total</span>
                                                        <div data-calc-result="equity-appreciation">0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="calculator-form__content-top result-block">
                                            <div class="calculator-form__result-title">Home Purchase Benefits</div>
                                            <div class="calculator-form__result-wrapper full-width">
                                                <div class="calculator-form__result total"
                                                     data-calc-result="home-purchase-benefits">0
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 2" class="w-tab-pane" id="w-tabs-0-data-w-pane-1"
                                     role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                                    <div class="calculator-form__content-wrapper">
                                        <div class="calculator-form__text-result-wrapper">
                                            <div class="text">
                                                <p>Is it financially better to buy a home or to rent? The answer to this
                                                    question depends upon how much the home costs, how much you are
                                                    paying
                                                    for rent, and how much you will have to pay each year in order to
                                                    maintain your home.</p>

                                                <p>If you were to pay <span class="marker currency"
                                                                            data-calc-result="monthly-rent">0</span> per
                                                    month,
                                                    for example, and the average rental payment increase was
                                                    <span class="marker percent"
                                                          data-calc-result="annual-rent-increase">0</span>,
                                                    you would pay <span class="marker currency"
                                                                        data-calc-result="total-payments-rent">0</span>
                                                    in a
                                                    <span class="marker" data-calc-result="years-before">0</span> year
                                                    period toward rent.
                                                    If you purchased a home and borrowed <span class="marker currency"
                                                                                               data-calc-result="amount">0</span>
                                                    with a <span class="marker percent"
                                                                 data-calc-result="interest-rate">0</span> interest
                                                    rate,
                                                    and you paid <span class="marker currency"
                                                                       data-calc-result="annual-maintenance">0</span>
                                                    every year toward its maintenance,
                                                    you would pay <span class="marker currency"
                                                                        data-calc-result="total-payments-buy">0</span>
                                                    in a <span class="marker" data-calc-result="years-before">0</span>
                                                    year period toward mortgage payments
                                                    if your Federal tax rate is <span class="marker percent"
                                                                                      data-calc-result="your-tax-rate">0</span>,
                                                    you pay <span class="marker currency" data-calc-result="annual-tax">0</span>
                                                    in taxes each year and your annual insurance rate is <span
                                                            class="marker currency" data-calc-result="annual-insurance">0</span>.
                                                </p>
                                                <p>
                                                    When you consider your tax benefits and the appreciation of your
                                                    home,
                                                    however, you will actually SAVE money by purchasing a home.
                                                    If your home shows an annual appreciation of <span
                                                        class="marker percent"
                                                        data-calc-result="annual-appreciation">0</span>
                                                    and your selling cost is <span class="marker percent"
                                                                                   data-calc-result="selling-cost">0</span>,
                                                    your house appreciation value will be <span class="marker currency"
                                                                                                data-calc-result="house-appreciation-value">0</span>.
                                                    As a result, your total home purchase benefit will amount to <span
                                                        class="marker currency"
                                                        data-calc-result="home-purchase-benefits">0</span>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>`;

    calculatorWrp.insertAdjacentHTML("afterbegin", html);

    return true;
};

export default htmlTemplateForm;