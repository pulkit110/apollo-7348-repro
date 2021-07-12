## Getting Started

This provides a reproduction for https://github.com/apollographql/apollo-client/issues/7348. To run

```bash
$ yarn
$ yarn test
```

If you want to see the output, run

```bash
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Error

`yarn test` produces the following error:

```bash
➜ yarn test
yarn run v1.22.5
$ jest
 FAIL  __tests__/index.test.tsx
  ● Test suite failed to run

    TypeError: graphql.isType is not a function

    > 1 | import { MockedProvider, MockedResponse } from "@apollo/client/testing";
        | ^
      2 | import { render } from '@testing-library/react';
      3 | import Home, { RATES_QUERY } from '../pages';
      4 | import wait from '../test/wait';

      at removeTemporaryGlobals (node_modules/@apollo/client/utilities/globals/graphql.js:4:5)
      at Object.<anonymous> (node_modules/@apollo/client/utilities/globals/index.js:5:1)
      at Object.<anonymous> (node_modules/@apollo/client/testing/testing.cjs.js:6:17)
      at Object.<anonymous> (__tests__/index.test.tsx:1:1)
      at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:333:13)
      at runJest (node_modules/@jest/core/build/runJest.js:387:19)
      at _run10000 (node_modules/@jest/core/build/cli/index.js:408:7)
      at runCLI (node_modules/@jest/core/build/cli/index.js:261:3)
```

This goes away when `core/__mocks__/graphql.ts` file is removed/renamed.

```bash
➜ yarn test
yarn run v1.22.5
$ jest
 PASS  __tests__/index.test.tsx
  Index Page
    ✓ renders rates (61 ms)
```
