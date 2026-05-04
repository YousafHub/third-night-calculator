export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-bold text-gray-900">
          About This Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          The <strong>Last Third of Night Calculator</strong> is a simple Islamic tool designed to help Muslims find the most blessed time for Tahajjud prayer.
        </p>

        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-emerald-800">
              What is the Last Third of the Night?
            </h2>
            <p className="mt-2">
              In Islam, the night is divided into three parts starting from Maghrib (sunset) to Fajr (dawn). 
              The last third of the night is considered the most spiritually significant time for prayer and supplication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-800">
              How It Works
            </h2>
            <p className="mt-2">
              This tool takes your local Maghrib and Fajr times and calculates the exact start of the last third of the night using simple mathematical logic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-800">
              Why This Tool Exists
            </h2>
            <p className="mt-2">
              Many people want to pray Tahajjud but struggle to calculate the correct time manually.
              This tool removes that difficulty and provides a fast, accurate result.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-800">
              Disclaimer
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Prayer times may vary slightly depending on your location and calculation method. Please refer to your local mosque timetable for precise times.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}