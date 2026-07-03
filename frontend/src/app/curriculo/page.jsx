'use client';

import dynamic from 'next/dynamic';

const CurriculoForm = dynamic(
  () => import("../../components/curriculo/CurriculoForm"),
  { ssr: false }
);

export default function CurriculoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] py-12 transition-colors duration-300">
      <CurriculoForm />
    </div>
  );
}
