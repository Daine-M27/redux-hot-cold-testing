import {reducer} from "./reducer";
import {newGame, toggleInfoModal, makeGuess} from "./actions";

//const correctAnswer = 85;

// describe('Reducer', () => {
//     it('Should set initial state', () => {
//         const state = reducer(undefined, {type: '__UNKNOWN'});
//         expect(state).toEqual({
//             guesses: [],
//             feedback: 'Make your guess!',
//             correctAnswer: Math.round(Math.random() * 100),
//             showInfoModal: false
//         })
//     })
// });

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.showInfoModal).toEqual(false);
    })
});