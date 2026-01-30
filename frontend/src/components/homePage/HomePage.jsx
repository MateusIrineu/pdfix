'use client';

import React from "react";
import Link from "next/link";
import { MdOutlineTimer } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { GoDownload } from "react-icons/go";

export default function HomePage() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto"
          style={{ color: "var(--color-text)" }}
        >
          Crie currículos que{" "}
          <span className="text-violet-600">impressionam</span> recrutadores
        </h1>
        <p
          className="mt-6 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-light)" }}
        >
          Chega de enviar currículos por e-mail ou papel. Com o PDFix, você gera
          documentos profissionais prontos para download e compartilhamento.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            className="bg-violet-600 hover:bg-violet-700 text-white dark:!text-white font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition-all"
            href="/curriculo"
            style={{ color: '#ffffff' }}
          >
            Criar Currículo Grátis →
          </Link>
          <Link
            className="text-zinc-700 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-violet-400 self-center transition-colors"
            href="/login"
          >
            Já tenho conta
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2
          className="text-3xl font-bold text-center mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Por que escolher o PDFix?
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-8"
          style={{ color: "var(--color-text-light)" }}
        >
          Desenvolvido para profissionais que querem criar currículos
          profissionais sem perder tempo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            style={{ backgroundColor: "var(--color-bg-card)" }}
          >
            <div className="w-12 h-12 bg-violet-500 rounded-md flex items-center justify-center text-3xl text-white mb-4">
              <MdOutlineTimer />
            </div>
            <div
              className="font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Menos de 2 minutos
            </div>
            <div
              className="text-sm mt-2"
              style={{ color: "var(--color-text-light)" }}
            >
              Crie currículos profissionais rapidamente, sem complicação.
            </div>
          </div>
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            style={{ backgroundColor: "var(--color-bg-card)" }}
          >
            <div className="w-12 h-12 bg-violet-500 rounded-md flex items-center justify-center text-3xl text-white mb-4">
              <FiSmartphone />
            </div>
            <div
              className="font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              100% Mobile
            </div>
            <div
              className="text-sm mt-2"
              style={{ color: "var(--color-text-light)" }}
            >
              Funciona perfeitamente no celular, ideal para usar em campo.
            </div>
          </div>
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            style={{ backgroundColor: "var(--color-bg-card)" }}
          >
            <div className="w-12 h-12 bg-violet-500 rounded-md flex items-center justify-center text-3xl text-white mb-4">
              <GoDownload />
            </div>
            <div
              className="font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Download Fácil
            </div>
            <div
              className="text-sm mt-2"
              style={{ color: "var(--color-text-light)" }}
            >
              Download em PDF e compartilhamento fácil.
            </div>
          </div>
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            style={{ backgroundColor: "var(--color-bg-card)" }}
          >
            <div className="w-12 h-12 bg-violet-500 rounded-md flex items-center justify-center text-3xl text-white mb-4">
              <GoEye />
            </div>
            <div
              className="font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Visual Profissional
            </div>
            <div
              className="text-sm mt-2"
              style={{ color: "var(--color-text-light)" }}
            >
              PDFs elegantes que transmitem credibilidade aos seus clientes.
            </div>
          </div>
        </div>
      </section>

      {/* How it works / Steps */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--color-bg-light)" }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            Como funciona
          </h3>
          <p className="mb-8" style={{ color: "var(--color-text-light)" }}>
            Em 4 passos simples você tem um currículo profissional pronto para
            compartilhar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              ["01", "Preencha", "Dados pessoais, educação e experiências"],
              ["02", "Visualize", "Preview do currículo"],
              ["03", "Ajuste", "Formate e escolha template"],
              ["04", "Envie", "Baixe e compartilhe"],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold shadow-md">
                  {num}
                </div>
                <div
                  className="font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {title}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--color-text-light)" }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purple CTA */}
      <section className="bg-gradient-to-r from-violet-600 to-violet-500 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl text-white font-extrabold">
            Comece agora e impressione recrutadores
          </div>
          <div className="mt-20">
            <Link
              className="bg-white text-violet-600 dark:!text-violet-600 px-6 py-3 rounded-full shadow font-bold hover:bg-violet-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
              href="/curriculo"
              style={{ color: '#8b5cf6' }}
            >
              Criar Meu Primeiro Currículo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
