import React from 'react';
import {shallow} from 'enzyme';

import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders the feedback', () => {
        const feedback = "Make a guess";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});