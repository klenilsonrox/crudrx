'use client'
import React from 'react'

const dados = [{
    id: 1,
    urlImage: "https://i.ibb.co/MpCxjPN/xburger.png",
    produto: "X-Burguer",
    descricao: "pao, molho especial, ham bovino, mussarela, alface, tomate, batata palha e milho.",
    preco: "12,00",
    categoria: "sanduiches"
  },
  {
    id: 2,
    urlImage: "https://i.pinimg.com/564x/34/e4/6a/34e46ace914b4c2d54cbc2f1886eede2.jpg",
    produto: "Misto especial",
    descricao: "Pão, molho especial, ovo, 2 mussarelas, 2 presuntos, alface, tomate , batata palha e milho.",
    preco: "12,00",
    categoria: "sanduiches"
  },
  {
    id: 3,
    urlImage: "https://files.nextgocard.com.br/products/i8jlLxyFVnwtudJZ-PROD_57-removebg-preview.png",
    produto: "X-Egg Burguer",
    descricao: "Pão, molho especial, ham bovino, ovo, mussarela, alface, tomate, batata palha e milho.",
    preco: "14,00",
    categoria: "sanduiches",
  },
  {
    id: 4,
    urlImage: "https://s3.us-west-2.amazonaws.com/whatsmenu/production/qnbfiniburger/products/685366/tespecialpng",
    produto: "X-Popular",
    descricao: "Pão, molho especial, ham bovino, ovo, 2 mussarelas, 2 presuntos, alface, tomate, batata palha e milho.",
    preco: "18,00",
    categoria: "sanduiches",
  },
  {
    id: 5,
    urlImage: "https://i.ibb.co/GkSTfvP/xbacon.jpg",
    produto: "X-Bacon",
    descricao: "Pão, molho especial, ham bovino, mussarela, bacon, alface, tomate, batata palha e milho.",
    preco: "18,00",
    categoria: "sanduiches"
  },
  {
    id: 6,
    urlImage: "https://i.ibb.co/GkSTfvP/xbacon.jpg",
    produto: "X-Egg Bacon",
    descricao: "Pão, molho especial, ham bovino, ovo, mussarela, bacon, alface, tomate, batata palha e milho.",
    preco: "20,00",
    categoria: "sanduiches"
  },
  {
    id: 7,
    urlImage: "https://i.ibb.co/N1XQxk1/catu.jpg",
    produto: "X-Catupiry",
    descricao: "Pão, molho especial, ham bovino, ovo, presunto, frango desfiado, catupiri, bacon, alface, tomate, batata palha e milho.",
    preco: "21,00",
    categoria: "sanduiches"
  },
  {
    id: 8,
    urlImage: "https://i.ibb.co/LhdNPjd/xtudo.png",
    produto: "X-tudo",
    descricao: "Pão, molho especial, ham bovino, ovo, presunto, Mussarela, frango desfiado, catupiri, bacon, alface, tomate, batata palha e milho.",
    preco: "23,00",
    categoria: "sanduiches"
  },
  {
    id: 9,
    urlImage: "https://i.ibb.co/RQkSQYw/matafome.jpg",
    produto: "Mata Fome",
    descricao: "Pão, molho especial, 2 ham bovinos, 2 ovos , 2 presuntos, 2 queijos, frango desfiado, catupiri, bacon, alface, tomate, batata palha e milho.",
    preco: "28,00",
    categoria: "sanduiches"
  },
  {
    id: 10,
    urlImage: "https://blog.novasafra.com.br/wp-content/uploads/2016/10/prato3-640x400.png",
    produto: "Macarrão na Chapa",
    descricao: "Bacon, Frango desfiado, presunto, cebola, pimentão,tomate, cenoura, repolho, milho, molho de alho, molho shoyu",
    preco: "22,00",
    categoria: "macarrao"
  },
  {
    id: 11,
    urlImage: "https://i.ibb.co/mJ2zp5x/omelete.jpg",
    produto: "Omelete Especial",
    descricao: "4 ovos, bacon, frango desfiado, catupiry, presunto, mussarela, cebola, pimentão, tomate e milho",
    preco: "22,00",
    categoria: "omeletes"
  },
  {
    id: 12,
    urlImage: "https://carrefourbr.vtexassets.com/arquivos/ids/19771846/coca-cola-sem-acucar-15-litros-1.jpg?v=637610904787270000",
    produto: "Coca cola 1 Litro",
    descricao: "Coca cola 1 litro",
    preco: "10,00",
    categoria: "bebidas"
  },
// {
//   id: 13,
//   urlImage:"https://www.hotdogdomarcio.com.br/wp-content/uploads/2020/08/coca2-litros.png",
//   produto: "Coca cola 2 litros",
//   descricao: "Coca cola 2 litros",
//   preco: "12,00",
//   categoria: "bebidas"
// },
  {
    id: 13,
    urlImage: "https://acdn.mitiendanube.com/stores/001/165/503/products/coca-normal11-2cb12d901c0ec9eb9716192140335257-1024-1024.png",
    produto: "Coca cola Lata",
    descricao: "Coca cola Lata",
    preco: "5,00",
    categoria: "bebidas"
  },
  {
    id: 14,
    urlImage: "https://adegabrooklin.com.br/wp-content/uploads/2023/02/Refrigerante-Fanta-Laranja-2-litrosok.png",
    produto: "Fanta 2 litros",
    descricao: "Fanta 2 litros",
    preco: "11,00",
    categoria: "bebidas"
  },
  {
    id: 15,
    urlImage: "https://www.piramidesdistribuidora.com.br/images/products/3708-fanta-laranja-lata-350ml-12un.20231128140701.png",
    produto: "Fanta lata",
    descricao: "Fanta lata",
    preco: "11,00",
    categoria: "bebidas"
  },
  {
    id: 16,
    urlImage: "https://nutripao.com/wp-content/uploads/2022/08/Refrigerante-Guarana-Antartica-2-Litros.png",
    produto: "Guaraná 2 litros",
    descricao: "Guaraná 2 litros",
    preco: "11,00",
    categoria: "bebidas"
  },
  {
    id: 17,
    urlImage: "https://www.piramidesdistribuidora.com.br/images/products/10197-guarana-antarctica-lata-350ml-18un.20231128140701.png",
    produto: "Guaraná lata",
    descricao: "Guaraná lata",
    preco: "5,00",
    categoria: "bebidas"
  },
  {
    id: 18,
    urlImage: "https://meufestval.vtexassets.com/arquivos/ids/182489/Refrigerante-Guarana-Kuat-Garrafa-2l-7894900911510.png?v=637727688344130000",
    produto: "Kuat 2 litros",
    descricao: "Kuat 2 litros",
    preco: "11,00",
    categoria: "bebidas"
  },
// {
//   id: 19,
//   urlImage:"https://www.hotdogdomarcio.com.br/wp-content/uploads/2020/08/coca2-litros.png",
//   produto: "Suco Dell Vale lata",
//   descricao: "Suco Dell Vale lata",
//   preco: "6,00",
//   categoria: "bebidas"
// },
  {
    id: 19,
    urlImage: "https://tfcfq5.vteximg.com.br/arquivos/ids/156798-0-0/Refrigerante-Sukita-Laranja.jpg?v=637574826480500000",
    produto: "Sukita 2 litros",
    descricao: "Sukita 2 litros",
    preco: "11,00",
    categoria: "bebidas"
  },
  {
    id: 20,
    urlImage: "https://production-darez-api.s3.amazonaws.com/products/1598967835681_IMAGE1598967835405.jpg",
    produto: "Guaraná 1 Litro",
    descricao: "Guaraná 1 Litro",
    preco: "8,00",
    categoria: "bebidas"
  },
  {
    id: 21,
    urlImage: "https://giassi.vtexassets.com/arquivos/ids/644048/Refrigerante-Cola-Pepsi-Garrafa-2l.png?v=638211560060330000",
    produto: "Pepsi 2 litros",
    descricao: "Pepsi 2 litros",
    preco: "11,00",
    categoria: "bebidas"
  },
  {
    id: 22,
    urlImage: "https://www.falkaolanches.com.br/wp-content/uploads/2022/05/Design-sem-nome-7-600x503.png",
    produto: "Fritas com Catupiry e Bacon",
    descricao: "Fritas com catupiry e Bacon",
    preco: "24,00",
    categoria: "porcoes"
  },
  {
    id: 23,
    urlImage: "https://i.ibb.co/Vtpb7mY/fritas.jpg",
    produto: "Fritas com Queijo e Bacon",
    descricao: "Fritas com Queijo e Bacon",
    preco: "24,00",
    categoria: "porcoes"
  },
  {
    id: 24,
    urlImage: "https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/armazemimperial/46_5ed51096799d8.png",
    produto: "Fritas Pura",
    descricao: "Fritas Pura",
    preco: "15,00",
    categoria: "porcoes"
  },
  {
    id: 25,
    urlImage: "https://www.brmart.com/uploads/produtos/224_bck-base_pt-br-doces-en-us-sweets_pt-br-cory-chita-balas-macias-de-abacaxi-600g-en-us-cory-chita-pineapple-chewy-candies-21-16-oz_1.png",
    produto: "Bala",
    descricao: "Bala",
    preco: "0,10",
    categoria: "bomboniere"
  },
  {
    id: 26,
    urlImage: "https://m.media-amazon.com/images/I/613KT5eAaNL._AC_UF1000,1000_QL80_.jpg",
    produto: "Bala de Goma",
    descricao: "Bala de Goma",
    preco: "2,00",
    categoria: "bomboniere"
  },
  {
    id: 27,
    urlImage: "https://casaspedro.vteximg.com.br/arquivos/ids/172881-1000-1000/bombom-ouro-branco-20g.png?v=637831294123070000",
    produto: "Bombom ouro branco",
    descricao: "Bombom ouro branco",
    preco: "2,00",
    categoria: "bomboniere"
  },
  {
    id: 28,
    urlImage: "https://images.tcdn.com.br/img/img_prod/645811/freegells_drops_cereja_mentol_c_12_riclan_2671_1_ac0503c668849c19b60541028539fdc5.png",
    produto: "Fregells",
    descricao: "Fregells",
    preco: "1,50",
    categoria: "bomboniere"
  },
  {
    id: 29,
    urlImage: "https://down-br.img.susercontent.com/file/972f273d732625adc90ac3868efa7ae5",
    produto: "Halls",
    descricao: "Halls",
    preco: "2,00",
    categoria: "bomboniere"
  },
  {
    id: 30,
    urlImage: "https://jadoces.com.br/wp-content/uploads/2022/08/1-2-1.jpg.webp",
    produto: "Paçoca",
    descricao: "Paçoca",
    preco: "1,00",
    categoria: "bomboniere"
  },
  {
    id: 31,
    urlImage: "https://mwatacado.com.br/galerias/8XMkN65NKDBk3Lb/pirulito-pop-sams-mix-50-und-1-5Z6e1Djk5qZd7BJ_lg.jpg",
    produto: "Pirulito",
    descricao: "Pirulito",
    preco: "1,00",
    categoria: "bomboniere"
  },


]

const page = () => {
  const [infos, setInfos] = React.useState([])
  const [produto, setProduto] = React.useState(null)



  React.useEffect(() => {
    setInfos(dados)
  }, [])

  function selectCategoria(e) {
    setInfos(null)
    const novos = dados.filter(item => item.categoria === e.target.id)
    setInfos(novos)
    setProduto(e.target.id)
  }

  return ( 
    <section className = 'mt-[80px]' >
    <div className='fixed bottom-9 right-9 z-10'>
      <a href="https://matalarica.page.link/pytterburguer"><img src="https://matalarica.com.br/assets/img/icone_redondo.png" alt="" className='max-w-[50px]'/></a>
    </div>
    <h1 className = 'text-center font-bold text-2xl py-2' > {
      produto ? produto : "todos os produtos"
    } </h1> <div className = 'mx-auto w-screen flex items-center justify-center' >
    <div className = 'flex gap-4 my-4 flex-wrap items-center justify-center'
    onClick = {
      selectCategoria
    } >
    <button className = 'px-6 py-2 rounded-md shadow-md bg-white border-2'
    id = 'sanduiches' > Sanduiches </button> <button className = 'px-6 py-2 rounded-md shadow-md bg-white border-2'
    id = 'omeletes' > Omeletes </button> <button className = 'px-6 py-2 rounded-md shadow-md bg-white border-2'
    id = 'porcoes' > Porções </button> <button className = 'px-6 py-2 rounded-md shadow-md bg-white border-2'
    id = 'macarrao' > Macarrão na Chapa </button>
    <button className = 'px-6 py-2 rounded-md shadow-md bg-white border-2'
    id = 'bebidas' > Bebidas </button> 
    <button className = 'px-6 py-2 rounded-md shadow-md bg-white border-2'
    id = 'bomboniere' > Bomboniere </button>

    </div> 
    </div> 
    <div className = 'container' > {
      infos && infos.map(({
        id,
        urlImage,
        produto,
        descricao,
        preco,
        categoria
      }) => ( <
        div className = ' overflow-hidden rounded-md shadow-lg bg-white relative flex flex-col justify-between max-w-sm'
        key = {
          id
        }>
        <img src = {
          urlImage
        }
        alt = "imagem produto"
        className = {
          `h-screen max-h-[230px] object-cover`
        }
      /> <div className = 'border-t p-2 my-4 flex-1' >
        <h1 className = 'font-semibold text-xl' > {
          produto
        } </h1> 
        <p> {
          descricao
        } </p> <p className = 'font-bold' > R$ {
          preco
        } </p> </div> <div className='p-2 mx-auto flex gap-2 items-center justify-between'>
        <div className='flex items-center justify-center flex-col'>
        <small className='font-bold'>matalarica</small>
        <a href="https://matalarica.page.link/pytterburguer"><img src="https://matalarica.com.br/assets/img/icone_redondo.png" alt="" className='max-w-[40px]'/></a>
        </div>
        <div className='flex items-center justify-center flex-col'>
        <small className='font-bold'>Whatsapp</small>
        <a href="https://wa.link/kccygt" target='_blanck'><img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" alt="" className='max-w-[40px]'/></a>
        </div>
        </div>
        </div>
      ))
    } </div> 
    </section>
  )
}

export default page