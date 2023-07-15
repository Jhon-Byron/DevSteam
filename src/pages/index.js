import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navibar'
import Subtitle from '@/components/tipografhy/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }
  
  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session} >
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer} >
              <SaleCard 
                image={'league-of-legends.jpg'}
                discount={'90%'}
                fullPrice={'199,90'}
                discountPrice={'19,90'}
                onAdd={() => {
                  handleAddProduct({ name: 'league of legends', price: 19.90, image: 'league-of-legends.jpg' })
                }}
              />
              <SaleCard
                image={'dota-2.jpg'}
                discount={'90%'}
                fullPrice={'199,90'}
                discountPrice={'19,90'}
                onAdd={() => {
                  handleAddProduct({ name: 'Dota', price: 19.90, image: 'dota-2.jpg' })
                }}
              />
              <SaleCard
                image={'valorant.jpg'}
                discount={'90%'}
                fullPrice={'199,90'}
                discountPrice={'19,90'}
                onAdd={() => {
                  handleAddProduct({ 
                    name: 'Valorant',
                    price: 19.90,
                    image: 'valorant.jpg'
                  })
                }}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard 
                onAdd={() => {
                  handleAddProduct({ 
                    name: 'COUNTER STRIKE: GLOBAL OFFENSIVE',
                    price: 99.90,
                    image: 'counter-strike.jpg'
                  })
                }}/>
            </div>
          </div> 
        </Container>
      </div>
    </>
  )
}
