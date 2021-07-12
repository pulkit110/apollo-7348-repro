import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render } from '@testing-library/react';
import Home, { RATES_QUERY } from '../pages';
import wait from '../test/wait';

const MOCKS: MockedResponse[] = [{
  request: { query: RATES_QUERY },
  result: { data: { rates: [{ currency: 'CHF', rate: '1' }] } }
}];

describe('Index Page', () => {
  it('renders rates', async () => {
    const { getByText } = render(
      <MockedProvider mocks={MOCKS}>
        <Home />
      </MockedProvider>
    );

    await wait();

    expect(getByText('USD - CHF')).not.toBeNull();
  });
});
