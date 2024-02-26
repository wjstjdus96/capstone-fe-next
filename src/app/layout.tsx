import { DataContextProvider } from "@/contexts/analysisData";
import "../styles/globals.scss";
import Header from "@/components/Header";

export const metadata = {
  title: "TubeAna",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <DataContextProvider>{children}</DataContextProvider>
      </body>
    </html>
  );
}
