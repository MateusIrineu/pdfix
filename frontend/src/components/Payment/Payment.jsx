/**
 * Componente de pagamento
 */

'use client';

import { FaQrcode, FaCopy, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';
import { usePayment } from './Payment.func';

export default function Payment() {
  const {
    loading,
    error,
    success,
    pixGerado,
    qrCodePix,
    codigoPix,
    valorPagamento,
    handleGerarPix,
    handleCopiarPix,
    handleConfirmarPagamento,
  } = usePayment();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center text-[#8E51FF] mb-3">
        Pagamento via PIX
      </h1>
      <p className="text-center text-[var(--color-text-light)] dark:text-gray-300 mb-8">
        Gere o código PIX e realize o pagamento para desbloquear o acesso completo
      </p>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-8 shadow-lg">
        {/* Valor do pagamento */}
        <div className="text-center mb-8 pb-6 border-b border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-light)] dark:text-gray-300 mb-2">Valor a pagar:</p>
          <p className="text-5xl font-extrabold text-[#8E51FF]">
            R$ {valorPagamento.toFixed(2).replace('.', ',')}
          </p>
          <p className="text-sm text-[var(--color-text-light)] dark:text-gray-300 mt-2">Pagamento único</p>
        </div>

        <div className="flex items-center gap-2 text-[var(--color-text-light)] dark:text-gray-300 text-sm mb-6 justify-center">
          <FaMoneyBillWave className="text-[#32BCAD]" />
          <span>Pagamento instantâneo e seguro via PIX</span>
        </div>

        {!pixGerado ? (
          <div className="text-center">
            <div className="mb-6">
              <FaQrcode className="text-6xl text-[#8E51FF] mx-auto mb-4" />
              <p className="text-[var(--color-text)] dark:text-gray-200 mb-2">
                Clique no botão abaixo para gerar o código PIX
              </p>
              <p className="text-sm text-[var(--color-text-light)] dark:text-gray-300">
                Após gerar, você poderá copiar o código e colar no seu aplicativo de pagamento
              </p>
            </div>

            <button
              type="button"
              onClick={handleGerarPix}
              disabled={loading}
              className="w-full bg-[#32BCAD] hover:bg-[#2a9d8f] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors duration-300"
            >
              {loading ? 'Gerando PIX...' : 'Gerar Código PIX'}
            </button>
          </div>
        ) : (
          <div>
            <div className="bg-white p-4 rounded-lg mb-4">
              <img 
                src={qrCodePix} 
                alt="QR Code PIX" 
                className="w-full max-w-xs mx-auto"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-[var(--color-text-light)] dark:text-gray-300 block mb-2">
                Código PIX Copia e Cola
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={codigoPix}
                  readOnly
                  className="flex-1 border border-[var(--color-border)] bg-[var(--color-bg-light)] text-[var(--color-text)] rounded-lg p-3 text-xs"
                />
                <button
                  type="button"
                  onClick={handleCopiarPix}
                  className="bg-violet-600 hover:bg-violet-700 text-white px-4 rounded-lg transition-colors"
                >
                  <FaCopy />
                </button>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-semibold mb-2">
                <FaCheckCircle className="inline mr-2" />
                Como pagar:
              </p>
              <ol className="text-sm text-blue-700 dark:text-blue-400 mt-2 space-y-1 list-decimal list-inside">
                <li>Abra o app do seu banco</li>
                <li>Escolha pagar com PIX</li>
                <li>Escaneie o QR Code ou cole o código</li>
                <li>Confirme o pagamento</li>
                <li>Clique em &quot;Confirmar Pagamento&quot; abaixo</li>
              </ol>
            </div>

            <button
              type="button"
              onClick={handleConfirmarPagamento}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors duration-300"
            >
              {loading ? 'Verificando...' : 'Já Paguei - Confirmar Pagamento'}
            </button>

            <p className="text-xs text-[var(--color-text-light)] dark:text-gray-300 text-center mt-4">
              O pagamento pode levar até 2 minutos para ser confirmado
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
