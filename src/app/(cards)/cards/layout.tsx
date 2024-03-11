import Header from "../../_components/header.tsx"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      { children }
    </div>
  );
}
