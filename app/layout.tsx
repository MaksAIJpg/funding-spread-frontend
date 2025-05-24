export const metadata = {
  title: 'Funding Arbitrage Dashboard',
  description: 'Сравнение фандинга между биржами Gate и MEXC',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0, background: 'black', color: 'white' }}>
        {children}
      </body>
    </html>
  )
}
