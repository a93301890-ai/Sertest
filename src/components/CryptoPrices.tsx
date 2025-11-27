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
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/crypto", { cache: "no-store" });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        if (!cancelled) setPrices(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Ошибка загрузки");
      }
    }

    load();
    const interval = setInterval(load, 60_000); // обновление каждую минуту
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="text-red bg-gray-900 p-6 rounded-lg mt-8">
      <h2 className="text-xl font-bold mb-4">Актуальные курсы криптовалют</h2>

      {error && (
        <p className="text-red-400 mb-4">
          Не удалось загрузить данные: {error}
        </p>
      )}

      {!prices && !error && <p>Загрузка курсов...</p>}

      {prices && (
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <li className="rounded-md bg-gray-800 p-4">
            <p className="text-sm text-gray-300">Bitcoin (BTC)</p>
            <p className="text-2xl font-semibold">${prices.bitcoin?.usd?.toLocaleString()}</p>
            <p className={changeClass(prices.bitcoin?.usd_24h_change)}>
              {formatChange(prices.bitcoin?.usd_24h_change)}
            </p>
          </li>
          <li className="rounded-md bg-gray-800 p-4">
            <p className="text-sm text-gray-300">Ethereum (ETH)</p>
            <p className="text-2xl font-semibold">${prices.ethereum?.usd?.toLocaleString()}</p>
            <p className={changeClass(prices.ethereum?.usd_24h_change)}>
              {formatChange(prices.ethereum?.usd_24h_change)}
            </p>
          </li>
          <li className="rounded-md bg-gray-800 p-4">
            <p className="text-sm text-gray-300">Tether (USDT)</p>
            <p className="text-2xl font-semibold">${prices.tether?.usd?.toLocaleString()}</p>
            <p className={changeClass(prices.tether?.usd_24h_change)}>
              {formatChange(prices.tether?.usd_24h_change)}
            </p>
          </li>
        </ul>
      )}
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
