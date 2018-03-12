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

import { toMatchImageSnapshot } from 'jest-image-snapshot';
import setParrotScenario from '../test-utils/set-parrot-scenario';

expect.extend({ toMatchImageSnapshot });
jest.setTimeout(10000);

it('is hot in Phoenix', async () => {
  const page = await browser.newPage();
  await setParrotScenario('is hot in Phoenix', 'http://localhost:3001');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 5000 });
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchImageSnapshot();
})

it('is cool in Phoenix', async () => {
  const page = await browser.newPage();
  await setParrotScenario('is cool in Phoenix', 'http://localhost:3001');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 5000 });
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchImageSnapshot();
});

it('cannot fetch weather data', async () => {
  const page = await browser.newPage();
  await setParrotScenario('cannot fetch weather data', 'http://localhost:3001');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 5000 });
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchImageSnapshot();
});
