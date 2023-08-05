import styles from "./page.module.css";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>lejaut</aside>
      {children}
    </div>
  );
}
