'use client';

import React from 'react';
import Link from 'next/link';

export default function TermosPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-slate-700">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">
          Termos de Uso e Consentimento
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        {/* Introdução */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            1. Aceitação dos Termos
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ao acessar e usar o PDFix, você concorda em estar vinculado aos termos e condições descritos 
            neste documento. Se você não concordar com qualquer parte desses termos, não utilize nosso serviço.
          </p>
        </section>

        {/* Identificação */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            2. Identificação do Controlador de Dados
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Empresa:</strong> PDFix Soluções em Currículo
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>CNPJ:</strong> [A ser preenchido com CNPJ real]
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Endereço:</strong> [A ser preenchido com endereço real]
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Email:</strong> <a href="mailto:pdfix.suporte@gmail.com" className="text-violet-600 hover:underline">pdfix.suporte@gmail.com</a>
            </p>
          </div>
        </section>

        {/* Consentimento Explícito */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            3. Consentimento para Tratamento de Dados Pessoais
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Ao fazer login com sua conta Google e utilizar o PDFix, você dá consentimento explícito para:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li>Coletar e armazenar seu email, nome e foto de perfil do Google</li>
            <li>Processar dados pessoais que você inserir no currículo (nome, telefone, endereço, etc.)</li>
            <li>Armazenar dados profissionais (competências, experiência, formação) em nossos servidores</li>
            <li>Usar esses dados para gerar documentos PDF com seu currículo</li>
            <li>Processar informações de pagamento para liberar funcionalidades premium</li>
            <li>Compartilhar informações necessárias com Google/Firebase para autenticação</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Você pode revogar este consentimento a qualquer momento solicitando a exclusão de sua conta.
          </p>
        </section>

        {/* Responsabilidades */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            4. Responsabilidades do Usuário
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Fornecer informações precisas e verdadeiras</li>
            <li>Manter a confidencialidade de sua conta</li>
            <li>Informar qualquer uso não autorizado de sua conta</li>
            <li>Não usar nosso serviço para fins ilegais ou prejudiciais</li>
            <li>Respeitar os direitos de terceiros</li>
          </ul>
        </section>

        {/* Serviço */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            5. Descrição do Serviço
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            O PDFix oferece:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Geração de currículos profissionais em PDF</li>
            <li>Visualização prévia do documento antes do pagamento</li>
            <li>Processamento de pagamento via PIX</li>
            <li>Download e compartilhamento de currículos</li>
          </ul>
        </section>

        {/* Preço e Pagamento */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            6. Preço, Pagamento e Reembolso
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li>Os preços estão sujeitos a alterações mediante notificação prévia</li>
            <li>O pagamento é processado via PIX no momento do download</li>
            <li>Reembolsos devem ser solicitados dentro de 7 dias da compra</li>
            <li>Para solicitar reembolso, entre em contato: pdfix.suporte@gmail.com</li>
          </ul>
        </section>

        {/* Propriedade Intelectual */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            7. Propriedade Intelectual
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>O PDFix e seu conteúdo são propriedade da PDFix Soluções em Currículo</li>
            <li>Você possui os direitos sobre o conteúdo que você cria e carrega</li>
            <li>Você concede permissão ao PDFix para usar seu conteúdo apenas para fornecer o serviço</li>
            <li>Não copie, reproduza ou distribua o PDFix sem permissão</li>
          </ul>
        </section>

        {/* Limitações */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            8. Limitação de Responsabilidade
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            O PDFix é fornecido sem garantias de qualquer tipo. Não somos responsáveis por:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Perda de dados ou documentos</li>
            <li>Erro na formatação ou conteúdo do currículo</li>
            <li>Interrupção de serviço ou indisponibilidade</li>
            <li>Perda de oportunidades de emprego resultante do uso do serviço</li>
          </ul>
        </section>

        {/* Rescisão */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            9. Rescisão
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Podemos rescindir ou suspender sua conta se você:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Violar estes termos</li>
            <li>Usar o serviço de forma fraudulenta</li>
            <li>Realizar atividades ilegais</li>
            <li>Não respeitar os direitos de terceiros</li>
          </ul>
        </section>

        {/* Conformidade LGPD */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            10. Conformidade com LGPD
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Direitos do Titular:</strong> Conforme LGPD Art. 18, você tem direito a:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Acessar seus dados pessoais</li>
              <li>Retificar (corrigir) dados imprecisos</li>
              <li>Solicitar exclusão de dados</li>
              <li>Portabilidade de dados</li>
              <li>Oposição ao processamento</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Para exercer esses direitos, contact: <a href="mailto:pdfix.suporte@gmail.com" className="text-violet-600 hover:underline">pdfix.suporte@gmail.com</a>
            </p>
          </div>
        </section>

        {/* Segurança */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            11. Segurança de Dados
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Implementamos medidas de segurança técnicas e organizacionais incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Autenticação segura via Firebase</li>
            <li>Criptografia SSL/TLS para dados em trânsito</li>
            <li>Controle de acesso a dados pessoais</li>
            <li>Monitoramento de incidentes de segurança</li>
          </ul>
        </section>

        {/* Lei */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            12. Lei Aplicável
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Estes termos são regidos pelas leis da República Federativa do Brasil, 
            particularmente pela Lei Geral de Proteção de Dados (LGPD).
          </p>
        </section>

        {/* Contato */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            13. Contato
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Para dúvidas sobre estes termos ou sobre privacidade, entre em contato:
          </p>
          <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-2">
            <p className="text-gray-700 dark:text-gray-500">
              Email: <a href="mailto:pdfix.suporte@gmail.com" className="dark:text-gray-100 hover:underline">pdfix.suporte@gmail.com</a>
            </p>
            <p className="text-gray-700 dark:text-gray-500">
              Responderemos em até 10 dias úteis
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-slate-700 pt-8 mt-8">
          <Link 
            href="/" 
            className="inline-block bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
