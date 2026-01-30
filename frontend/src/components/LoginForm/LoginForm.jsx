'use client';

import Link from 'next/link';
import { useLoginForm } from './LoginForm.func';

export default function LoginForm() {
  const {
    email,
    password,
    showPassword,
    rememberMe,
    loading,
    error,
    setEmail,
    setPassword,
    setRememberMe,
    handleSubmit,
    handleGoogleLogin,
    togglePasswordVisibility,
  } = useLoginForm();

  return (
    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl shadow-xl p-12 max-w-md w-full transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] rounded-xl flex items-center justify-center text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor"/>
              <polyline points="14,2 14,8 20,8" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-[var(--color-text)]">PDFix</span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">Bem-vindo de volta!</h1>
        <p className="text-[var(--color-text-light)]">Entre para acessar seus orçamentos</p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-[var(--color-text)]">
            E-mail
          </label>
          <div className="relative flex items-center">
            <svg 
              className="absolute left-4 text-[var(--color-text-light)] pointer-events-none" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2"/>
              <path d="M3 7l9 6 9-6" strokeWidth="2"/>
            </svg>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-[15px] border-2 border-[var(--color-border)] rounded-lg outline-none transition-all duration-200 bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-light)] focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-semibold text-[var(--color-text)]">
            Senha
          </label>
          <div className="relative flex items-center">
            <svg 
              className="absolute left-4 text-[var(--color-text-light)] pointer-events-none" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="2"/>
              <path d="M12 17v-2" strokeWidth="2"/>
              <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeWidth="2"/>
            </svg>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 text-[15px] border-2 border-[var(--color-border)] rounded-lg outline-none transition-all duration-200 bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-light)] focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
              required
            />
            <button
              type="button"
              className="absolute right-4 bg-transparent border-none text-[var(--color-text-light)] cursor-pointer p-1 flex items-center justify-center transition-colors duration-200 hover:text-[#7c3aed]"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" strokeWidth="2"/>
                  <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="flex justify-between items-center -mt-1">
          <label className="flex items-center gap-2 text-sm text-[var(--color-text)] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-[18px] h-[18px] cursor-pointer accent-[#7c3aed]"
            />
            <span>Lembrar de mim</span>
          </label>
          <Link href="/recuperar-senha" className="text-sm text-[#7c3aed] font-semibold transition-colors duration-200 hover:text-[#6d28d9]">
            Esqueceu a senha?
          </Link>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] border-none rounded-lg cursor-pointer transition-all duration-200 mt-2 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(124,58,237,0.3)] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>

        {/* Divider */}
        <div className="flex items-center text-center my-2">
          <div className="flex-1 border-b border-[var(--color-border)]"></div>
          <span className="px-4 text-[var(--color-text-light)] text-sm">ou</span>
          <div className="flex-1 border-b border-[var(--color-border)]"></div>
        </div>

        {/* Google Button */}
        <button 
          type="button" 
          className="w-full py-3.5 text-base font-semibold text-[var(--color-text)] bg-[var(--color-bg)] border-2 border-[var(--color-border)] rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-center gap-3 hover:border-[#7c3aed] hover:bg-[var(--color-bg-light)] disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {loading ? 'Entrando...' : 'Continuar com Google'}
        </button>

        {/* Error Message */}
        {error && (
          <p className="text-[#dc2626] text-sm text-center m-0 p-2 bg-[#fee2e2] rounded-md">
            {error}
          </p>
        )}

        {/* Signup Link */}
        <p className="text-center text-sm text-[var(--color-text-light)] m-0">
          Não tem uma conta?{' '}
          <Link href="/cadastro" className="text-[#7c3aed] font-semibold transition-colors duration-200 hover:text-[#6d28d9]">
            Criar conta grátis
          </Link>
        </p>
      </form>

      {/* Back Link */}
      <Link href="/" className="block text-center mt-6 text-sm text-[var(--color-text-light)] transition-colors duration-200 hover:text-[#7c3aed]">
        ← Voltar para o início
      </Link>
    </div>
  );
}
