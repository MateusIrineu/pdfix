/**
 * Hook personalizado para gerenciar o estado e lógica do pagamento
 */

import { useState, useEffect } from 'react';
import { processarPagamento, simularPagamento, obterPlanos } from './services';

export function usePayment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [pixGerado, setPixGerado] = useState(false);
  const [qrCodePix, setQrCodePix] = useState('');
  const [codigoPix, setCodigoPix] = useState('');
  const valorPagamento = 29.90; // Valor fixo do pagamento

  /**
   * Gera código PIX
   */
  const handleGerarPix = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Simular geração de código PIX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Gerar código PIX fictício
      const codigoPixGerado = `00020126580014br.gov.bcb.pix0136${Math.random().toString(36).substring(2, 15)}52040000530398654${valorPagamento.toFixed(2)}5802BR5925PDFix Curriculos LTDA6009Sao Paulo62070503***63041D3D`;
      
      setCodigoPix(codigoPixGerado);
      setQrCodePix(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(codigoPixGerado)}`);
      setPixGerado(true);
      setSuccess('Código PIX gerado com sucesso! Copie e cole no seu app de pagamento.');
      
    } catch (err) {
      setError(err.message || 'Erro ao gerar código PIX');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Copia código PIX
   */
  const handleCopiarPix = () => {
    navigator.clipboard.writeText(codigoPix);
    setSuccess('Código PIX copiado para a área de transferência!');
  };

  /**
   * Confirma o pagamento PIX
   */
  const handleConfirmarPagamento = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Simular verificação de pagamento
      await simularPagamento();
      
      setSuccess('Pagamento confirmado com sucesso!');
      setEtapa('confirmacao');
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        window.location.href = '/curriculo';
      }, 2000);
      
    } catch (err) {
      setError(err.message || 'Erro ao confirmar pagamento');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Limpa mensagens
   */
  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  return {
    // Estados
    loading,
    error,
    success,
    pixGerado,
    qrCodePix,
    codigoPix,
    valorPagamento,
    
    // Handlers
    handleGerarPix,
    handleCopiarPix,
    handleConfirmarPagamento,
    clearMessages,
  };
}