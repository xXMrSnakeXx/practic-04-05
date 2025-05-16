import { createSelector } from '@reduxjs/toolkit';

export const selectBaseCurrency = state => state.currency.baseCurrency;
export const selectIsLoading = state => state.currency.isLoading;
export const selectIsErrror = state => state.currency.isError;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
export const selectRates = state => state.currency.rates;
export const selectFilter = state => state.filter

export const selectFilteredRates = createSelector(
  [selectRates, selectBaseCurrency, selectFilter],

  (rates, baseCurrency, filter) => {
    return rates
      .filter(([key]) => key !== baseCurrency && key.toLowerCase().includes(filter.toLowerCase()))
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));
  },
);
