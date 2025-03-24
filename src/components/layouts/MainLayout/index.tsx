import UserHeader from "./UserHeader";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserHeader />
      <main className="mt-[72px] min-h-screen">{children}</main>
    </>
  );
}

export default MainLayout;
