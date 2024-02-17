
import "./globals.css";




export const metadata = {
  title: "crud",
  description: "crud tetes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col justify-between">
      {children}

      </body>
    </html>
  );
}
