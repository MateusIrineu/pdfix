import LoginForm from '@/components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-light)] p-5 transition-colors duration-300">
      <LoginForm />
    </div>
  );
}
