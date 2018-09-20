import React from 'react';
import { shallow, mount } from 'enzyme';

import { AddTrip } from './AddTrip';

describe('<AddTrip />', () => {
    it('Renders without crashing', () => {
        shallow(<AddTrip />);
    });

    it('Renders a form', () => {
        const wrapper = shallow(<AddTrip />);
        expect(wrapper.find('div.padding-top-one.bgimg')).to.have.length(1)
        // expect(wrapper.contains().toEqual(true);
    });



});