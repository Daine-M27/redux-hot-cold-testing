import {reducer} from "./reducer";
import {newGame, toggleInfoModal, makeGuess} from "./actions";


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

describe('newGame', () => {
    it('Should start a new game', () => {
        const state = reducer(undefined, newGame());
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.showInfoModal).toEqual(false);
    });
});

describe('makeGuess', () => {
    it('Should tell the user Ice Cold', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 80
        };

        state = reducer(state, makeGuess(1));
        expect(state.guesses).toEqual([1]);
        expect(state.feedback).toEqual('You\'re Ice Cold...');
    });

    it('Should tell the user Cold', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 80
        };

        state = reducer(state, makeGuess(50));
        expect(state.guesses).toEqual([50]);
        expect(state.feedback).toEqual('You\'re Cold...');
    });


    it('Should tell the user warm', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 80
        };

        state = reducer(state, makeGuess(70));
        expect(state.guesses).toEqual([70]);
        expect(state.feedback).toEqual('You\'re Warm');
    });

    it('Should tell the user hot', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 80
        };
        state = reducer(state, makeGuess(77));
        expect(state.guesses).toEqual([77]);
        expect(state.feedback).toEqual('You\'re Hot!');
    });

    it('Should tell the user got it', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 80
        };
        state = reducer(state, makeGuess(80));
        expect(state.guesses).toEqual([80]);
        expect(state.feedback).toEqual('You got it!');
    });
});

describe('toggleInfoModal', () => {
    it('Should toggle info modal on', () => {
        let state = {
            showInfoModal: false
        };
        state = reducer(state, toggleInfoModal());
        expect(state.showInfoModal).toEqual(true);
    });

    it('Should toggle info modal off', () => {
        let state = {
            showInfoModal: true
        };
        state = reducer(state, toggleInfoModal());
        expect(state.showInfoModal).toEqual(false);
    });
});
