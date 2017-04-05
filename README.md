# React + Redux implementation of tic-tac-toe game

This project is my experimental playground of [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/docs/introduction/). Demo is found [here](https://shielded-plateau-17212.herokuapp.com/#).

This project is part of my journey to learn React and Angular 2, 
and it also has a [sibling](https://github.com/OmriKaduri/Angular2-tictac) project which implements the same thing exactly at Angular 2.

Currently, it only implements the classic tic-tac-toe game,
without any implementation of algorithm for "Play against the computer" mode.

## Development Server

Run `npm start` for a dev server. Navigator to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Running the tests
Run `npm test` to execute the unit tests via [`react-scripts`](https://www.npmjs.com/package/react-scripts)

## The goals for this project are:
1. Implement a simple minimax algorithm for "Play against the computer" mode. 
2. Add tests.
3. Make it an [ultimate-tic-tac-toe](http://vikeshkhanna.webfactional.com/ultimate/)!

## Cool features
1. You can extend the size of the [Board](https://github.com/OmriKaduri/React-tictac/blob/master/src/components/Board.js), by dispatching [setSideLength](https://github.com/OmriKaduri/React-tictac/blob/master/src/actions/actions.js#L1).
2. That's it. Cool, isn't it? :relieved:

