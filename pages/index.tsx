import { gql, useQuery } from '@apollo/client'

export const RATES_QUERY = gql`
query {
  rates(currency: "USD") {
    currency
    rate
  }
}
`;

type RatesData = { rates: { currency: string, rate: string }[] };

export default function Home() {
  const { data } = useQuery<RatesData, {}>(RATES_QUERY);

  return (
    <div>
      {data?.rates?.map(({ rate, currency }) => (
        <div key={currency}>
          <h2>USD - {currency}</h2>
          <p>{rate}</p>
        </div>
      ))}
    </div>
  )
}
