import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isVisible={false} />
      <div>{children}</div>
    </>
  );
}
