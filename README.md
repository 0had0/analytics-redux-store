# analytics-redux-store
Analytics Redux Store - Gather time duration between UI events ( maybe to estimate best delay time to use in a loading screen, waiting dialog, ... )

## Names
Define mesure names, like: `"TIME_TO_IDENTIFY_LOCATION"`, ..

## Actions
- createStartAction: `createStartAction("TIME_TO_IDENTIFY_LOCATION")` will return an Action object `{type: "ESTIMATION_TIME_TO_IDENTIFY_LOCATION_START"}`
- createStopAction & createResetAction ...

## Reducer
Duration is the diffrence between time `createStartAction("TIME_TO_IDENTIFY_LOCATION")` & `createStopAction("TIME_TO_IDENTIFY_LOCATION")` are fired.
Each time a duration is calculated it will be stored in the "${name}_VALUES" ( `"TIME_TO_IDENTIFY_LOCATION_VALUES"` ) array

## Selectors
We have access to the last calculated duration by `createValueSelector("TIME_TO_IDENTIFY_LOCATION")`, the array of mesures `createValueSelector("TIME_TO_IDENTIFY_LOCATION_VALUES")`, or the average value by `createAVGSelector("TIME_TO_IDENTIFY_LOCATION")`

## Dependencies
- [day.js](https://day.js.org/)
- [reselect](https://www.npmjs.com/package/reselect)
