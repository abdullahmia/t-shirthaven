import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';
import { auth } from '@/lib/auth';
import { getUserByEmail } from '@/services/user';
import { redirect } from 'next/navigation';
import AccountSidebar from './components/account-sidebar';
import MobileAccountSidebar from './components/mobile-account-sidebar';

export default async function AccountLayout({ tabs }) {
  const session = await auth();

  if (session === null) {
    return redirect('/login');
  }

  const user = await getUserByEmail(session.user.email);
  if (user?.role !== 'user') {
    return redirect('/admin');
  }

  return (
    <div>
      <GenerateBreadcrumb title="My Account" />
      <div className="responsive container flex flex-col gap-2 py-20 md:flex-row lg:gap-14">
        <div className="hidden lg:block lg:w-1/4">
          <AccountSidebar />
        </div>
        <div className="block w-full lg:hidden">
          <MobileAccountSidebar />
        </div>
        <div className="lg:w-3/4">{tabs}</div>
      </div>
    </div>
  );
}
