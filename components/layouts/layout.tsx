import Navbar from "../general/navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen h-screen">{children}</main>
    </>
  );
}
