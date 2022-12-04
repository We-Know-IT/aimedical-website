import Navbar from "../general/navbar/navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
