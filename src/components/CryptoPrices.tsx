export default function CryptoPrices() {
  return (
    <section className="text-white bg-gray-900 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Актуальные курсы криптовалют</h2>
      <ul>
        <li>Bitcoin (BTC): $91,245.85</li>
        <li>Ethereum (ETH): $3,042.60</li>
        <li>Tether (USDT): $1.00</li>
      </ul>
    </section>
  );
  import { useEffect, useState } from "react";

export default function CryptoPrices() {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    fetch("/api/crypto")
      .then(res => res.json())
      .then(data => setPrices(data));
  }, []);

  if (!prices) return <p>Загрузка курсов...</p>;

  return (
    <section className="text-white bg-gray-900 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Актуальные курсы криптовалют</h2>
      <ul>
        <li>Bitcoin (BTC): ${prices.bitcoin.usd}</li>
        <li>Ethereum (ETH): ${prices.ethereum.usd}</li>
        <li>Tether (USDT): ${prices.tether.usd}</li>
      </ul>
    </section>
  );
}
