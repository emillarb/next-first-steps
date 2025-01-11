import { Navbar } from "@/components";

export const metadata = {
 title: 'Layout About',
 description: 'Saludos',
};
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hola Mundo</span>
      {children}
    </main>
    </>
  );
}