import AdminBreadcrumb from "./components/admin-breadcrumb";
import AdminSidebar from "./components/admin-sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-secondary">
      <AdminSidebar />
      <main className="flex-1">
        <div className="container responsive">
          <AdminBreadcrumb />
          <div className="py-12">{children}</div>
        </div>
      </main>
    </div>
  );
}
