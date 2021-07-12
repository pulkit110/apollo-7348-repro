import { act } from '@testing-library/react';

export default async function wait(ms = 0): Promise<void> {
  return act(() => new Promise((resolve) => {
    setTimeout(resolve, ms);
  }));
}
