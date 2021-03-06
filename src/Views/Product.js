import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { useAxiosget } from '../Hooks/HttpRequests'

function Product(){
  const { id } = useParams()
  const url = `https://5fb1700687ed490016ea7ee7.mockapi.io/products/${id}`

  let product = useAxiosget(url)

  let content = null

  if(product.error){
    content = <p>
      There was an error.
    </p>
  }

  if(product.loading){
    content = <Loader></Loader>
  }


  if(product.data){
    content = 
      <div >
        <h1 className="text-2xl font-bold mb-3">
          {product.data.name}
        </h1>
        <div>
          <img
            src={product.data.images}
            alt={product.data.name}
          />
        </div>
        <div className="font-bold text-xl mb-3">
          $ {product.data.price}
        </div>
        <div>
          {product.data.description}
        </div>
      </div>
    

  }

  return (
    <div >
      {content}      
    </div>
  )

}

export default Product;