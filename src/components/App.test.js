import React from 'react';
import { shallow } from 'enzyme';
import App from './AppFC';

it('renders without crashing', () => {
  shallow(<App />);
});
