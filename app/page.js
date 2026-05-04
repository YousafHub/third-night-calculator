import Link from "next/link";
import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-green-100 p-4 relative">

      {/* About link */}
      <Link
        href="/about"
        className="absolute top-4 right-4 text-sm font-medium text-emerald-700 hover:text-emerald-900"
      >
        What is this?
      </Link>

      <div className="w-full max-w-2xl flex justify-center">
        <Calculator />
      </div>
    </main>
  );
}