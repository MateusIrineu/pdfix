import LoginForm from '@/components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 p-5 transition-colors duration-300">
      <LoginForm />
    </div>
  );
}
