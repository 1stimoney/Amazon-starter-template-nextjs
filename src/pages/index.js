import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'

export default function Home({ product }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon</title>
      </Head>

      {/* Header */}
      <Header />

      <main className='max-w-7xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed product={product} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://fakestoreapi.com/products')
  const product = await res.json()

  return {
    props: {
      product,
    },
  }
}
