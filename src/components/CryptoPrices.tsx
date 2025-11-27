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
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <li className="rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">Bitcoin (BTC)</p>
          <p className="text-2xl font-semibold">${prices.bitcoin?.usd?.toFixed(2)}</p>
          <p className={changeClass(prices.bitcoin?.usd_24h_change)}>
            {formatChange(prices.bitcoin?.usd_24h_change)}
          </p>
        </li>
        <li className="rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">Ethereum (ETH)</p>
          <p className="text-2xl font-semibold">${prices.ethereum?.usd?.toFixed(2)}</p>
          <p className={changeClass(prices.ethereum?.usd_24h_change)}>
            {formatChange(prices.ethereum?.usd_24h_change)}
          </p>
        </li>
        <li className="rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">Tether (USDT)</p>
          <p className="text-2xl font-semibold">${prices.tether?.usd?.toFixed(2)}</p>
          <p className={changeClass(prices.tether?.usd_24h_change)}>
            {formatChange(prices.tether?.usd_24h_change)}
          </p>
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

function changeClass(val?: number) {
  if (val === undefined) return "text-gray-300";
  return val >= 0 ? "text-green-400" : "text-red-400";
}
