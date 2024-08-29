import { auth } from '@/lib/auth';
import { getUserByEmail } from '@/services/user';
import { redirect } from 'next/navigation';
import AdminBreadcrumb from './components/admin-breadcrumb';
import AdminSidebar from './components/admin-sidebar';

export default async function AdminLayout({ children }) {
  const session = await auth();
  let user;

  if (!session) {
    return redirect('/login');
  }

  if (session) user = await getUserByEmail(session?.user?.email);

  if (user?.role !== 'admin') {
    return redirect('/account');
  }

  return (
    <div className="flex bg-secondary">
      <AdminSidebar />
      <main className="flex-1">
        <div className="responsive container">
          <AdminBreadcrumb />
          <div className="py-12">{children}</div>
        </div>
      </main>
    </div>
  );
}
