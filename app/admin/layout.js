import AdminBreadcrumb from "./components/admin-breadcrumb";
import AdminSidebar from "./components/admin-sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-secondary w-full h-screen flex gap-10">
      <AdminSidebar />
      <main className="container">
        <AdminBreadcrumb />
        {children}
      </main>
    </div>
  );
}
