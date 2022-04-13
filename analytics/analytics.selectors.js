import dayjs from 'dayjs';
import { createSelector } from 'reselect';

const selectAnalytics = (state) => state.analytics;

const createValueSelector = (name) =>
  createSelector([selectAnalytics], (analytics) =>
    dayjs.isDayjs(analytics[name]) ? -1 : analytics[name],
  );

const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

const createAVGSelector = (name) =>
  createSelector([selectAnalytics], (analytics) => {
    if (Array.isArray(analytics[`${name}_VALUES`]) && !!analytics[`${name}_VALUES`].length) {
      return average(analytics[`${name}_VALUES`]);
    }
    return -1;
  });

export default { createValueSelector, createAVGSelector };
