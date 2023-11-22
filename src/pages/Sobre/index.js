import Header from "../../components/Header/index.js";
import Filter from "../../components/Filter/index.js";
import Footer from "../../components/Footer/index.js";
import "./sobre.css";
import { useEffect } from "react";
export default function Sobre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Filter />
      <main className="container-about">
        <h1>Quem Somos</h1>
        <p>Lady Biju, uma Loja de Bijuteria em Palhoça - SC / Brazil.</p>
        <p>
          {" "}
          <b>Patrícia Rodriguês, Fundadora da Marca,</b> sempre foi apaixonada
          por biju e acessórios de qualidade, e percebeu que não havia uma loja
          especializada em biju na região. Com sua visão empreendedora, ela
          decidiu criar sua própria loja de biju, que se tornaria uma referência
          local e levaria o nome de Lady Biju.
        </p>
        <p>
          Patrícia decidiu transformar sua paixão em negócio e abrir sua própria
          loja de biju. Com muita determinação e planejamento cuidadoso, ela
          buscou o conhecimento necessário sobre o mercado de bijuteria, estudou
          as tendências de moda e design, e pesquisou fornecedores confiáveis.
        </p>
        <p>
          A Lady Biju foi inaugurada com grande entusiasmo pela comunidade
          local, que recebeu a loja com curiosidade e interesse. A qualidade das
          peças de bijuteria, a dedicação de Patrícia em oferecer um excelente
          atendimento ao cliente conquistou rapidamente a confiança dos
          clientes.
        </p>
      </main>
      <Footer />
    </>
  );
}
