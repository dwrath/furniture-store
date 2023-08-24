import '@styles/styles.css';
import '@styles/layout.css';
import '@styles/resets.css';

export const metadata = {
  title: 'Room Furniture',
  description: 'For all your furniture needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-wrapper">{children}</body>
    </html>
  )
}
