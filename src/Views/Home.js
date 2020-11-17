import React from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useAxiosget } from '../Hooks/HttpRequests'



function Home(){
  // create mock api https://mockapi.io
  const url = `https://5fb1700687ed490016ea7ee7.mockapi.io/products?page=1&limit=10`
  
  let products = useAxiosget(url)
  
  let content = null

  if(products.error){
    content = <p>
      There was an error.
    </p>
  }

  if(products.loading){
    content = <Loader></Loader>
  }

  if(products.data){
    content = 
    products.data.map((product) =>
      <div key={product.id}>
        <ProductCard
          product ={product}
          />

      </div>
    )
  }

  return(
    <div >
      <h1 className="font-bold text-2x1 mb-3">
        Best Sellers
      </h1>
      {content}
    </div>

      
  )
}

export default Home;