/* eslint-disable no-nested-ternary */
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

type State = {
  [key: String]: String,
};

export const initState: State = {};

export default (state: State = initState, action: Action): State => {
  const { type } = action;
  const matches = /^(ESTIMATE)_(.*)_(START|STOP|CLEAR)/.exec(type);

  if (!matches) {
    return state;
  }

  // eslint-disable-next-line no-unused-vars
  const [_ORIGINAL, _ESTIMATE, reqName, reqStatus] = matches;

  let d = -1;

  switch (reqStatus) {
    case 'START':
      d = dayjs();
      break;
    case 'STOP':
      d = dayjs.duration(dayjs().diff(dayjs(state[reqName]))).milliseconds();
      break;
    case 'RESET':
    default:
      d = -1;
  }

  return {
    ...state,
    [`${reqName}_VALUES`]:
      reqStatus === 'STOP'
        ? [...state[`${reqName}_VALUES`], d]
        : Array.isArray(state[`${reqName}_VALUES`])
        ? state[`${reqName}_VALUES`]
        : [],
    [reqName]: d,
  };
};
