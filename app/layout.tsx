import "../styles/globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <title>Ashhar's Website</title>
      <head />
      <body>
        
        {children}
        </body>
    </html>
  )
}
