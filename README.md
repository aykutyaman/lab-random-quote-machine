## Random Quote Machine
This is an exercise project.
The main goal is to achive a testable, composable, side-effect free front end app with react and redux

[Deployed app](http://lab-random-quote-machine.surge.sh/)

## Development
```
$ yarn start
```

## Testing
```
$ yarn test
```

## Deploy
```
$ yarn build
$ cd build
$ surge
```

## Requirements
- on first load, quote machine displays a random quote
- every quote has an author and text element
- quote machine fetchs a new quote when "New Quote" button is clicked
- a user shares a quote on Twitter by clicking "Tweet Quote" button
- quote is centered vertically and horizontaly

## Technical Decisions
- create react app (bootstrapping easly front end app with react)
- css flexbox (centering quote box)
- wing css (beatiful card, typography and button etc. - minimalist)
- React with pure functional components (purity)
- axios (for data fetching from network)
- higher order components with recompose (components single responsability principle and purity)
- lifecyle(componentDidMount) HOC from recompose (for component purity, composition)
- redux/connect (for state management, maintaining component purity)
- redux-saga (for purifying redux actions from network side effects)
- Jest and Enzyme (for testing pure component)
- API calls to forismatic (quotes source)

## Test plan
- Action creators
- Async action creators (sagas)
- Reducers
- Components
- Connected components

## Tasks
- [x] Understand requirements
- [x] Choose technologies
- [x] Brainstorm test plan
- [x] Hello world app setup
- [x] Build a static version in React
- [x] Identify ui state
- [x] Manage state with React
- [x] Add New Quote button
- [x] Manage state with redux
- [x] Manage events with redux
- [x] fetch quote from network with redux-saga
- [x] Move initial quote fetching from component to container with recompose
- [x] Styling
- [x] Tests
- [x] Code clean up
- [x] Deploy
- [x] README
