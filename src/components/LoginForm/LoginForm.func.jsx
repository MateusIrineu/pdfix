"use client";

import { useState } from "react";
import { loginWithGoogle } from "./services";

/**
 * Hook customizado para gerenciar o formulário de login
 */
export const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * Realiza login com Google e salva no banco de dados
   */
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await loginWithGoogle();

      if (!result.user) {
        throw new Error("Falha ao fazer login com Google");
      }

      // 1. Salvar dados do Firebase no localStorage
      localStorage.setItem("usuario_id", result.user.uid);
      localStorage.setItem("user_email", result.user.email);
      localStorage.setItem("user_name", result.user.displayName);

      // 2. Obter token do Firebase
      const token = await result.user.getIdToken();

      // 3. Chamar o backend para salvar no banco de dados
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/usuarios/firebase/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.mensagem || "Erro ao salvar usuário no banco",
        );
      }

      const userData = await response.json();
      console.log("✅ Usuário salvo no banco:", userData);

      // Salvar usuario_id do banco se for diferente
      if (userData.usuario?.usuario_id) {
        localStorage.setItem("usuario_db_id", userData.usuario.usuario_id);
      }

      // Redirecionar para página de currículo
      window.location.href = "/curriculo";
    } catch (err) {
      console.error("Erro no login:", err);
      setError(err.message || "Erro ao fazer login com Google");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleGoogleLogin,
  };
};
