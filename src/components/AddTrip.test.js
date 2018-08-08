import React from 'react';
import { shallow, mount } from 'enzyme';

import { AddTrip } from './AddTrip';

describe('<AddTrip />', () => {
    it('Renders without crashing', () => {
        shallow(<AddTrip />);
    });
});