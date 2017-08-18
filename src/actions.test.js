import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from "./actions"

describe ('newGame', () =>{
    it('should return the action', () => {
        const action = newGame();
        expect(action.type).toEqual('NEW_GAME');
        // expect(action.correctAnswer);
    });
});

describe ('makeGuess', () => {
    it('should submit a guess with a value', () => {
        const guess = 50;
        const action = makeGuess(guess);
        expect(action.type).toEqual('MAKE_GUESS');
        expect(action.guess).toEqual(guess);
    });
});

describe ('toggleInfoModal', () => {
    it('should open the info modal', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual('TOGGLE_INFO_MODAL');
    });
});