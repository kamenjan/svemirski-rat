export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="100vw"
      // height="100vh"
      viewBox="0 0 10000 10000"
    >
      <rect width="100%" height="100%" fill="darkblue" />
      {children}
    </svg>
  );
}
