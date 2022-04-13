const createAction: Function =
  (type: 'START' | 'STOP' | 'RESET'): Function =>
  (name: String): Action => ({
    type: `ESTIMATE_${name}_${type}`,
  });

export default {
  createStartAction: createAction('START'),
  createStopAction: createAction('STOP'),
  createResetAction: createAction('RESET'),
};
