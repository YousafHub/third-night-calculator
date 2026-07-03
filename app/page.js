import Link from "next/link";
import CalculatorWrapper from "@/components/CalculatorWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-green-100">
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* ✅ HEADER with Calculator at Top */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2">
            Last Third of Night Calculator
          </h1>
          <p className="text-lg text-emerald-700">
            Find the exact time of the last third of the night for Tahajjud prayer
          </p>
        </div>

        {/* ✅ CALCULATOR - At the top for immediate use */}
        <div className="flex justify-center mb-8">
          <CalculatorWrapper />
        </div>

        {/* ✅ SEO CONTENT - Below the calculator */}
        
        {/* How to Use Section */}
        <div className="bg-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200 mb-8">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
            How to Use This Islamic Tool
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-emerald-800">
            <li>Enter your local <strong>Maghrib</strong> prayer time</li>
            <li>Enter your local <strong>Fajr</strong> prayer time</li>
            <li>Click <strong>Calculate</strong> to find the last third of the night</li>
          </ol>
          <p className="mt-3 text-sm text-emerald-600">
            ⏰ The last third of the night is the most blessed time for Tahajjud prayer.
          </p>
        </div>

        {/* Importance Section */}
        <section className="prose prose-emerald max-w-none mb-8">
          <h2 className="text-2xl font-semibold text-emerald-900">
            Why Is the Last Third of the Night Important?
          </h2>
          <p className="text-emerald-800">
            The Prophet Muhammad (peace be upon him) said:
          </p>
          <blockquote className="border-l-4 border-emerald-600 pl-4 my-4 text-emerald-800 italic">
            &quot;Our Lord, Blessed and Exalted is He, descends to the lowest heaven 
            during the last third of the night and says: Who is calling upon Me 
            that I may answer him? Who is asking of Me that I may give him? 
            Who is seeking My forgiveness that I may forgive him?&quot;
          </blockquote>
          <p className="text-emerald-800">
            This makes the <strong>last third of the night</strong> the most virtuous time 
            for <strong>Tahajjud prayer</strong> and dua.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200 mb-8">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-emerald-900">
                What is the last third of the night?
              </h3>
              <p className="text-emerald-800">
                The last third of the night is the final portion of the night before 
                Fajr begins. It is calculated by dividing the time between Maghrib 
                and Fajr into three equal parts.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-emerald-900">
                When should I pray Tahajjud?
              </h3>
              <p className="text-emerald-800">
                Tahajjud can be prayed anytime after Isha until Fajr, but the best 
                time is in the <strong>last third of the night</strong>.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-emerald-900">
                How do you calculate the last third of the night?
              </h3>
              <p className="text-emerald-800">
                Subtract Maghrib time from Fajr time, divide by 3, then add that 
                amount to Maghrib time. This gives you the start of the last third.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom SEO Content */}
        <div className="text-center mt-8 text-sm text-emerald-600 border-t border-emerald-200 pt-6">
          <p>
            Use this <strong>Islamic prayer time calculator</strong> to find the 
            <strong> Tahajjud time</strong> for your location. Simply enter your 
            <strong> Maghrib</strong> and <strong>Fajr</strong> times.
          </p>
          <p className="mt-2">
            Perfect for Muslims who want to wake up for Tahajjud prayer during the 
            <strong> last third of the night</strong>.
          </p>
        </div>
      </article>

      {/* About link */}
      <Link
        href="/about"
        className="fixed top-4 right-4 text-sm font-medium text-emerald-700 hover:text-emerald-900 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all z-50"
      >
        What is this? →
      </Link>
    </main>
  );
}