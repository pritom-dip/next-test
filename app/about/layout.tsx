export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
        <nav>About Layout</nav>
        <main>{children}</main>
    </>
  )
}
