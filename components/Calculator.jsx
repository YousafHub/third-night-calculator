"use client";

import { useState, useRef } from "react";
import { calculateLastThirdOfNight } from "@/utils/nightCalculator";
import Result from "./Result";

export default function Calculator() {
  const [maghribTime, setMaghribTime] = useState("");
  const [fajrTime, setFajrTime] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const maghribRef = useRef(null);
  const fajrRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!maghribTime || !fajrTime) {
      setError("Please enter both Maghrib and Fajr times.");
      return;
    }

    setLoading(true);

    try {
      const res = calculateLastThirdOfNight(maghribTime, fajrTime);

      const formattedDate = res.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const hours = res.getHours();
      const minutes = res.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHour = hours % 12 || 12;

      const formattedTime = `${displayHour}:${minutes} ${ampm}`;

      setResult({
        date: formattedDate,
        time: formattedTime,
      });
    } catch {
      setError("Something went wrong. Please check inputs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-lg">

      {/* glow background */}
      <div className="absolute -inset-1 rounded-3xl bg-emerald-300/30 blur-2xl" />

      {/* card */}
      <div className="relative rounded-3xl border border-emerald-200 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">

        <h1 className="text-center text-3xl font-bold text-emerald-900">
          Last Third of Night
        </h1>

        <p className="mt-2 mb-6 text-center text-sm text-emerald-700">
          Calculate Tahajjud time using Maghrib and Fajr
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* MAGHRIB */}
          <div>
            <label className="text-sm font-medium text-emerald-800">
              Maghrib Time
            </label>

            <input
              ref={maghribRef}
              type="time"
              value={maghribTime}
              onChange={(e) => setMaghribTime(e.target.value)}
              onClick={() => maghribRef.current?.showPicker?.()}
              className="mt-1 w-full cursor-pointer rounded-xl border border-emerald-200 bg-white px-4 py-2 text-emerald-900 focus:ring-2 focus:ring-emerald-300"
              required
            />
          </div>

          {/* FAJR */}
          <div>
            <label className="text-sm font-medium text-emerald-800">
              Fajr Time
            </label>

            <input
              ref={fajrRef}
              type="time"
              value={fajrTime}
              onChange={(e) => setFajrTime(e.target.value)}
              onClick={() => fajrRef.current?.showPicker?.()}
              className="mt-1 w-full cursor-pointer rounded-xl border border-emerald-200 bg-white px-4 py-2 text-emerald-900 focus:ring-2 focus:ring-emerald-300"
              required
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 active:scale-[0.98] disabled:bg-gray-400"
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </form>

        {result && (
          <Result date={result.date} time={result.time} />
        )}
      </div>
    </div>
  );
}