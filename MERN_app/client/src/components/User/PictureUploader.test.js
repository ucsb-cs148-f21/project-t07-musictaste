import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'jest';
import Adapter from 'enzyme-adapter-react-17-updated';
import PictureUploader from './PictureUploader';
import { ExpansionPanelActions } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() })

describe('Playlist', () => {
    it ('should loads playlist image to be clicked', () => {
        const component = shallow(<PictureUploader />);
        const title = component.find("title");
        expect(title.text()).toEqual("test");
    })
})
