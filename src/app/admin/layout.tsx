import AdminProtectedLayout from "@/components/AdminProtectedLayout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProtectedLayout>
      {children}
    </AdminProtectedLayout>
  );
}
