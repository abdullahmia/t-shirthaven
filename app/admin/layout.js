import AdminBreadcrumb from "./components/admin-breadcrumb";
import AdminSidebar from "./components/admin-sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="grid min-h-screen w-full grid-cols-[240px_1fr]">
      <AdminSidebar />
      <main className="container responsive">
        <AdminBreadcrumb />
        <div className="py-12">{children}</div>
      </main>
    </div>
  );
}
