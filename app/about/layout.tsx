import styles from "./styles.module.css"

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
        <nav>About Layout</nav>
        <main className={styles.main}>{children}</main>
    </>
  )
}
