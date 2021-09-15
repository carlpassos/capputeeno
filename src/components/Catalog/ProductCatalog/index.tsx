import Link from 'next/link'
import Image from 'next/image'


import {
  Container,
  ProductCard,
} from './styles'

import { formatPrice } from '../../../utils/formatPrice';
import { products } from '../../../utils/products'

const productImageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

export function ProductCatalog() {

  return (
    <Container>

      {products.map(item => (
        <Link href="/product/product-id-here" key={item.key}>
          <ProductCard >
              <Image
                loader={productImageLoader}
                src={item.imageUrl}
                alt={item.name}
                width={256}
                height={300}
                objectFit="cover"
              />
            <div>
              <p>{item.name}</p>
              <span>{formatPrice(item.price)}</span>
            </div>
          </ProductCard>
        </Link>
      ))}
    </Container>
  )
}