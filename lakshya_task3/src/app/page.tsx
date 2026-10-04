"use client";

import { useState } from "react";

type Unit = "celsius" | "fahrenheit" | "kelvin";
type Result = { c: string; f: string; k: string };

export default function TemperatureConverter() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState<Unit>("celsius");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    setResult(null);

    if (temp.trim() === "" || !Number.isFinite(Number(temp))) {
      setError("Please enter a valid numeric temperature.");
      return;
    }

    const value = Number(temp);
    let celsius: number;
    let fahrenheit: number;
    let kelvin: number;

    if (unit === "celsius") {
      if (value < -273.15) {
        setError("Temperature cannot be below absolute zero (-273.15 °C).");
        return;
      }
      celsius = value;
      fahrenheit = value * 9 / 5 + 32;
      kelvin = value + 273.15;
    } else if (unit === "fahrenheit") {
      if (value < -459.67) {
        setError("Temperature cannot be below absolute zero (-459.67 °F).");
        return;
      }
      fahrenheit = value;
      celsius = (value - 32) * 5 / 9;
      kelvin = celsius + 273.15;
    } else {
      if (value < 0) {
        setError("Kelvin temperature cannot be negative.");
        return;
      }
      kelvin = value;
      celsius = value - 273.15;
      fahrenheit = celsius * 9 / 5 + 32;
    }

    setResult({
      c: `${celsius.toFixed(2)} °C`,
      f: `${fahrenheit.toFixed(2)} °F`,
      k: `${kelvin.toFixed(2)} K`,
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6 text-slate-900">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-center text-2xl font-bold">Temperature Converter</h1>
        <p className="mb-6 text-center text-sm text-slate-600">OASIS Infobyte Task 3</p>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-semibold" htmlFor="temperature">Temperature Value</label>
          <input id="temperature" type="number" value={temp} onChange={(event) => setTemp(event.target.value)} placeholder="Enter value (e.g. 25)" className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-600 focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold" htmlFor="unit">Input Unit</label>
          <select id="unit" value={unit} onChange={(event) => setUnit(event.target.value as Unit)} className="w-full rounded-xl border border-slate-300 bg-white p-3 focus:border-blue-600 focus:outline-none">
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
            <option value="kelvin">Kelvin (K)</option>
          </select>
        </div>

        <button type="button" onClick={handleConvert} className="mb-4 w-full rounded-xl bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700">Convert</button>
        {error && <p role="alert" className="mb-4 text-center text-sm text-red-600">{error}</p>}

        {result && (
          <div aria-live="polite" className="mt-6 space-y-3 border-t border-slate-200 pt-4">
            {[["Celsius:", result.c], ["Fahrenheit:", result.f], ["Kelvin:", result.k]].map(([label, value]) => <div key={label} className="flex justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"><span className="font-semibold text-slate-600">{label}</span><span className="font-bold text-blue-600">{value}</span></div>)}
          </div>
        )}
      </div>
    </main>
  );
}