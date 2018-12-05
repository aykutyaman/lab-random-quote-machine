## Random Quote Machine
This is an exercise project with the purpose of having to create a testable, composable, side-effect free front end app with react and redux

## Requirements
- clicking new a button a new random quote is displayed
- ever quote will have a body and author
- when new quote arrive background color changes
- user can share a quote on Twitter

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
https://mzl.la/2KmZYyN
- Shallow component testing (Quote Component should render with quote prop body and quote author)
- Testin component callback (Quote Component fires callback passed as prop, when clicked "random quote" button)
- Test redux connected component/container testing
- Test action creator
- Test quote reducer

## Tasks
- [x] Understand requirements
- [x] Choose technologies
- [x] Brainstorm test plan
- [x] Hello world app setup
- [x] Build a static version in React
- [x] Identify ui state
- [x] Manage state with React
- [x] Add New Quote button
- [ ] Manage state with redux
- [ ] Manage events with redux
- [ ] fetch quote from network with redux-saga
- [ ] Move initial quote fetching from component to container with recompose
- [ ] Make board responsive
- [ ] Tests
- [ ] Code clean up
- [ ] README
