import './globals.css'; // Import global styles
import { ReactNode } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Forcastify</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
       
        <main>{children}</main>
        <footer className="bg-black p-4 text-white text-center">
          <p>&copy; 2025 Forecastify</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
    