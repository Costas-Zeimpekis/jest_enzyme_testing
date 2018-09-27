import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
  // Find textarea and simulate event
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });

  // Force re-render
  wrapped.update();

  // Assert that it has recieved the apporpiet value
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
