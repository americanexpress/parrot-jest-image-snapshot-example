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

import fetch from 'node-fetch';

const setParrotScenario = async (scenario, parrotServerUrl) => {
  const requestBody = JSON.stringify({
    scenario,
  });
  const response = await fetch(`${parrotServerUrl}/parrot/scenario`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: requestBody,
  });
  if (!response.ok) { throw Error(`HTTP error ${response.status} for post to ${parrotServerUrl}/parrot/scenario with request body ${requestBody}`); }
  return response;
};

export default setParrotScenario;