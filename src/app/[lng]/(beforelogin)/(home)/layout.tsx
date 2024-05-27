export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className='w-[100dvw] h-[100dvh] 
    bg-black 
    dark:bg-black'
    >
      {children}
    </main>
  );
}
