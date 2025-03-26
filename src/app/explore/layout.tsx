import Sidebar from "@/components/sidebar";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex font-geistsans">
      <Sidebar />
      {children}
    </div>
  );
}
