import type { Metadata } from 'next';
import { AppProvider } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Majestic Trails - Adventure Travel',
  description: 'Experience breathtaking adventures with Majestic Trails - Kilimanjaro Climbing, Safari Tours, and Zanzibar Beach Holidays',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AppProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}