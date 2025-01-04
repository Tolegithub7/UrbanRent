import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyFilters from '@/components/PropertyFilters';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
