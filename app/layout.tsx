import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import HashScroller from '../components/HashScroller';

export const metadata: Metadata = {
  title: 'Damian Stevenson - Portfolio',
  description: 'Personal portfolio of Damian Stevenson',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <HashScroller />
        {children}
        <footer className="footer">
          <div className="container">
            <p>&copy; 2026 Damian Stevenson. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
