
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";




export const metadata = {
  title: "Pytter Burger",
  description: "Pytter Burger, sua nova opção de Hambúrgueres em Bambuí, temos omelete, macarrão na chapa, batata frita e muito mais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
    <link rel="icon" type="image/x-icon" href="https://cdn.icon-icons.com/icons2/1874/PNG/96/iconfinder-hamburgerfastfoodfastfoodburgerfoodbread-4306476_119931.png" />
      <body>
      <Header />
      {children} 
    <Footer />
      </body>
    </html>
  );
}
