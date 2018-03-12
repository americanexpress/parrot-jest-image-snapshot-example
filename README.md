# Is it hot in Phoenix?

Example app to demonstrate [parrot](https://github.com/americanexpress/parrot) and [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) usage

## Local development
1. Set up your [API key for OpenWeatherMap](https://openweathermap.org/api) and enter it in [`App.js`](./src/App.js)

2. Install and start app!
  ```bash
  npm install
  npm start
  # or
  npm run start:parrot # to start with parrot mocks enabled and not require an API key for OpenWeatherMap
  ```

This will start app at port `3000`.

## Testing
```bash
npm test # runs all tests
# or
npm run test:unit # only runs unit tests
npm run test:browser # only runs browser tests
```

## Contributing
We welcome Your interest in the American Express Open Source Community on Github.
Any Contributor to any Open Source Project managed by the American Express Open
Source Community must accept and sign an Agreement indicating agreement to the
terms below. Except for the rights granted in this Agreement to American Express
and to recipients of software distributed by American Express, You reserve all
right, title, and interest, if any, in and to Your Contributions. Please [fill
out the Agreement](https://cla-assistant.io/americanexpress/parrot-jest-image-snapshot-example).

Please feel free to open pull requests and see [CONTRIBUTING.md](./CONTRIBUTING.md) for commit formatting details.

## License
Any contributions made under this project will be governed by the [Apache License
2.0](./LICENSE.txt).

## Code of Conduct
This project adheres to the [American Express Community Guidelines](./CODE_OF_CONDUCT.md).
By participating, you are expected to honor these guidelines.
