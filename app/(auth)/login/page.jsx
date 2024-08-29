import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';
import GoogleLogin from '../components/google-login';
import LoginForm from './components/login-form';

export const metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function Login() {
  return (
    <div>
      <GenerateBreadcrumb title="Login" />

      <div className="container flex h-full w-full flex-col items-center justify-center space-y-5 py-14 lg:py-32">
        {/* Google Login */}
        <GoogleLogin />

        <div className="text-center text-sm font-light text-secondary">Or</div>

        {/* Credential Login */}
        <LoginForm />
      </div>
    </div>
  );
}
