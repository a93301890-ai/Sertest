"use client";

import { useEffect, useState } from "react";

type Prices = {
  bitcoin?: { usd: number; usd_24h_change?: number };
  ethereum?: { usd: number; usd_24h_change?: number };
  tether?: { usd: number; usd_24h_change?: number };
};

export default function CryptoPrices() {
  const [prices, setPrices] = useState<Prices | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/crypto", { cache: "no-store" });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        setPrices(data);
      } catch (e: any) {
        setError(e?.message || "Ошибка загрузки");
      }
    }

    load();
  }, []);

  if (error) {
    return <p className="text-red-500">Ошибка: {error}</p>;
  }

  if (!prices) {
    return <p className="text-white">Загрузка курсов...</p>;
  }

  return (
    <section className="bg-gray-900 text-white p-6 rounded-lg mt-8">
      <h2 className="text-xl font-bold mb-4">Актуальные курсы криптовалют</h2>
      <ul className="space-y-4">
        <li>
          <strong>BTC:</strong> ${prices.bitcoin?.usd?.toFixed(2)} (
          {formatChange(prices.bitcoin?.usd_24h_change)})
        </li>
        <li>
          <strong>ETH:</strong> ${prices.ethereum?.usd?.toFixed(2)} (
          {formatChange(prices.ethereum?.usd_24h_change)})
        </li>
        <li>
          <strong>USDT:</strong> ${prices.tether?.usd?.toFixed(2)} (
          {formatChange(prices.tether?.usd_24h_change)})
        </li>
      </ul>
    </section>
  );
}

function formatChange(val?: number) {
  if (val === undefined) return "";
  const sign = val >= 0 ? "+" : "";
  return `${sign}${val.toFixed(2)}% за 24ч`;
}
