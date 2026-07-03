"use client";

import React, { useEffect, useState, useRef } from "react";
import { getFirebaseAuth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Nav() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const menuRef = useRef(null);

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setImageError(false); // Reset erro ao trocar usuário
    });
    return () => unsubscribe();
  }, []);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLogout = async () => {
    const auth = getFirebaseAuth();
    await signOut(auth);
    setUser(null);
    window.location.href = "/"
  };

  const handleDeleteAccount = async () => {
    setDeleteLoading(true);
    setDeleteMessage('');
    try {
      const auth = getFirebaseAuth();
      const user = auth.currentUser;
      if (user) {
        // Obter token Firebase
        const token = await user.getIdToken();
        
        // Chamar API para deletar dados do backend
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/usuarios/delete/account`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Deletar usuário do Firebase
          await user.delete();
          setUser(null);
          setDeleteModal(false);
          window.location.href = "/";
        } else {
          const errorData = await response.json();
          setDeleteMessage(`Erro: ${errorData.mensagem || 'Tente novamente.'}`);
        }
      }
    } catch (error) {
      console.error('Erro ao deletar conta:', error);
      setDeleteMessage('Erro ao deletar conta. Entre em contato: pdfix.suporte@gmail.com');
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-center backdrop-blur-xl backdrop-saturate-150 bg-white/60 dark:bg-slate-900/60 border-b border-white/20 dark:border-white/10"
      >
      <div className="max-w-6xl w-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo2.png"
            alt="PDFix Logo"
            width={200}
            height={56}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            className="font-medium hover:text-violet-700 transition-colors"
            href="/"
          >
            Início
          </Link>
          <Link
            className="hover:text-violet-600 transition-colors"
            href="/curriculo"
          >
            Criar Currículo
          </Link>
          {user ? (
            <div className="relative" ref={menuRef}>
              <button
                className="flex flex-col items-center gap-1 px-4 py-2 font-medium dark:text-white focus:outline-none hover:opacity-80 transition-opacity"
                onClick={() => setMenuOpen((open) => !open)}
                style={{ background: "none", border: "none" }}
              >
                {user.photoURL && !imageError ? (
                  <img
                    src={`${user.photoURL}?t=${Date.now()}`}
                    alt="Foto do perfil"
                    className="w-10 h-10 cursor-pointer rounded-full object-cover border-2 border-violet-600"
                    onError={() => setImageError(true)}
                    loading="lazy"
                  />
                ) : user.displayName ? (
                  // Avatar com iniciais do nome
                  <div className="w-10 h-10 rounded-full border-2 border-violet-600 flex items-center justify-center bg-violet-100 dark:bg-violet-900 font-bold text-violet-600 dark:text-violet-300 text-sm">
                    {user.displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </div>
                ) : (
                  // Ícone padrão
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
                  </svg>
                )}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-700 text-sm text-gray-700 dark:text-gray-200">
                    {user.displayName || 'Usuário'}
                  </div>
                  <button
                    className="w-full cursor-pointer flex items-center gap-2 px-4 py-3 text-left text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    onClick={() => {
                      setDeleteModal(true);
                      setMenuOpen(false);
                    }}
                  >
                    Excluir Conta
                  </button>
                  <button
                    className="w-full cursor-pointer flex items-center gap-2 px-4 py-3 text-left text-violet-700 dark:text-violet-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors border-t border-gray-100 dark:border-slate-700"
                    onClick={handleLogout}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l3 3m0 0l-3 3m3-3H3" />
                    </svg>
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              className="bg-violet-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-violet-700 transition-colors"
              href="/login"
              style={{ color: '#ffffff' }}
            >
              Entrar
            </Link>
          )}
        </nav>
      </div>
    </header>

    {/* Modal de Confirmação de Exclusão - Fora do Header */}
    {deleteModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-sm w-full overflow-hidden">
          {/* Header */}
          <div className=" px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
             
            </h2>
          </div>

          {/* Body */}
          <div className="px-6 py-4">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tem certeza que deseja deletar sua conta? Esta ação é <strong>irreversível</strong> e todos os seus dados serão permanentemente removidos.
            </p>

            {deleteMessage && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
                {deleteMessage}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-slate-700 flex gap-3">
            <button
              className="flex-1 px-4 py-2 bg-gray-300 dark:bg-slate-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-400 dark:hover:bg-slate-500 transition-colors disabled:opacity-50"
              onClick={() => setDeleteModal(false)}
              disabled={deleteLoading}
            >
              Cancelar
            </button>
            <button
              className="flex-1 px-4 py-2 bg-orange-800 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              onClick={handleDeleteAccount}
              disabled={deleteLoading}
            >
              {deleteLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Deletando...
                </>
              ) : (
                'Deletar Conta'
              )}
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
