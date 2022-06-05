import React from 'react'
import styled from 'styled-components'
import Product from '../Product/Product'
import { products } from '../../data'
import { mobile } from '../../Responsive'

const ProductListContainer = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  ${mobile({ padding: '0px', marginTop: '150px' })}
`
const ListHeader = styled.div`
  width: 100%;
  justify-content: center;
  align-content: center;
  width: 85%;
  margin: auto;
  ${mobile({ display: 'flex', flexDirection: 'column' })}
`

const Header = styled.h5`
  font-size: 35px;
  font-weight: 600;
  ${mobile({ fontSize: '20px', fontWeight: '600' })}
`
const Text = styled.p`
  margin: 20px 0px;
  ${mobile({ fontSize: '16px', fontWeight: '200' })}
`
const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

function ProductList() {
  return (
    <ProductListContainer>
      <ListHeader>
        <Header>Check through the Jobs Done by me.</Header>
        <Text>
          Browse below the few selected from my works. Do have a walk through my
          portfolio to see amazing frontend and fullstack applications I have
          built.
        </Text>
      </ListHeader>
      <List>
        {products.map((item) => (
          <Product key={item.id} img={item.img} />
        ))}
      </List>
    </ProductListContainer>
  )
}

export default ProductList
