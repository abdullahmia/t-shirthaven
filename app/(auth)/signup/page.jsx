import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';
import GoogleLogin from '../components/google-login';
import SignupForm from './components/signup-form';

export const metadata = {
  title: 'Signup',
  description: 'Signup to your account',
};

export default function Signup() {
  return (
    <div>
      <GenerateBreadcrumb title="Sign up" />

      <div className="container flex h-full w-full flex-col items-center justify-center space-y-5 py-14 lg:py-32">
        {/* Google Login */}
        <GoogleLogin />

        <div className="text-center text-sm font-light text-secondary">Or</div>

        {/* Credential Signup */}
        <SignupForm />
      </div>
    </div>
  );
}
