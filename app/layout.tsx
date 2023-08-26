export const metadata = {
  title: 'Exercise 1',
  description: 'Exercise: Your First Components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script src="https://kit.fontawesome.com/cab80c4382.js" crossorigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
