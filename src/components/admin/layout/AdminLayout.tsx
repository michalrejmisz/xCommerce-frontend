// components/admin/layout/AdminLayout.tsx
import AdminSidebar from '../sidebar/AdminSidebar';
import AdminHeader from '../header/AdminHeader';

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex h-screen min-h-screen overflow-hidden bg-gray-50">
      {/* Apply min-w-min to ensure that the sidebar respects its minimum width */}
      <div className="min-w-min">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
