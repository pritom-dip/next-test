import styles from "./styles.module.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About page of the next app',
}

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
