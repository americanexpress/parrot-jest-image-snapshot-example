/*
 * Copyright (c) 2018 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { createSerializer } from 'enzyme-to-json';

import App from './App';

import { configure } from 'enzyme';
import { mount } from 'enzyme';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer());

global.fetch = require('jest-fetch-mock');

beforeEach(() => {
  fetch.resetMocks();
});

it('renders a friendly message while loading', async () => {
  const fetchMock = fetch.mockResponse(JSON.stringify({ main: { temp: 101 } }));
  const wrapper = mount(<App />);
  // intentionally not waiting on componentDidMount to resolve as we want 'loading' state

  expect(wrapper).toMatchSnapshot();
});

it('renders a friendly message when there is an error fetching weather API', async () => {
  const fetchMock = fetch.mockReject('Error');
  const wrapper = mount(<App />);
  await expect(wrapper.instance().componentDidMount()).resolves.toBe(undefined);
  wrapper.update();

  expect(wrapper).toMatchSnapshot();
});

it('renders a message about how hot it is if temperature is above 90 degrees', async () => {
  const fetchMock = fetch.mockResponse(JSON.stringify({ main: { temp: 101 } }));
  const wrapper = mount(<App />);
  await expect(wrapper.instance().componentDidMount()).resolves.toBe(undefined);
  wrapper.update();

  expect(wrapper).toMatchSnapshot();
});

it('renders a message about how nice it is if temperature is below 90 degrees', async () => {
  const fetchMock = fetch.mockResponse(JSON.stringify({ main: { temp: 73 } }));
  const wrapper = mount(<App />);
  await expect(wrapper.instance().componentDidMount()).resolves.toBe(undefined);
  wrapper.update();

  expect(wrapper).toMatchSnapshot();
});
