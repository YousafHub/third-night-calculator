'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load the calculator
const Calculator = dynamic(
  () => import('@/components/Calculator'),
  { 
    ssr: false,
    loading: () => <CalculatorSkeleton />
  }
);

function CalculatorSkeleton() {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute -inset-1 rounded-3xl bg-emerald-300/30 blur-2xl" />
      <div className="relative rounded-3xl border border-emerald-200 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-emerald-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-emerald-100 rounded w-1/2 mx-auto"></div>
          <div className="h-12 bg-emerald-100 rounded"></div>
          <div className="h-12 bg-emerald-100 rounded"></div>
          <div className="h-12 bg-emerald-600 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default function CalculatorWrapper() {
  return (
    <Suspense fallback={<CalculatorSkeleton />}>
      <Calculator />
    </Suspense>
  );
}