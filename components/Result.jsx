export default function Result({ date, time }) {
  return (
    <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
      <h2 className="text-lg font-semibold text-emerald-900">
        Last Third Starts
      </h2>

      <p className="mt-2 text-xl font-bold text-emerald-800">
        {date}
      </p>

      <p className="mt-1 text-sm text-emerald-700">
        at {time}
      </p>
    </section>
  );
}