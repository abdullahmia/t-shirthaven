import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';
import { Suspense } from 'react';
import ResetPasswordForm from './components/reset-password-form';

export const metadata = {
  title: 'Reset Password',
  description: 'Reset Password to your account',
};

export default function ResetPassword() {
  return (
    <div>
      <GenerateBreadcrumb title="Reset Password" />

      <div className="container flex h-full w-full flex-col items-center justify-center space-y-5 py-14 lg:py-32">
        {/* Reset password form */}
        <Suspense>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
