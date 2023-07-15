import Image from 'next/image'

import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice, discountPrice }) {
  return (
    <div className={styles.salecard}>
      <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.porcentagem}>-{discount}</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>R${fullPrice}</p>
            <h4 className={styles.discountprice}>R${discountPrice}</h4>
          </div>
        </div>
        <Button fullWidth >Adicionar ao Carinho</Button>
      </div>
    </div>
  )
}

SaleCard.DefaultProps = {
  image: 'league-of-legends',
  discount: '90%',
  fullPrice: '199,90',
  discountPrice: '19,90'
}