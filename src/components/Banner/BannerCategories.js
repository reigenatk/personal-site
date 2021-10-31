import React from 'react'
import styled from 'styled-components'
import Categories from '../Categories'
import Dash from './Dash'

const BannerCategories = () => {
  return (
    <Wrapper>
    <Dash value="Categories" />
    <Categories />
    </Wrapper>
  )
}
const Wrapper = styled.div`

  .categories {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }
  .category {
    font-size: 1rem;
    color: white;
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0.5rem;
    transition: all 0.3s ease-in;
    border-radius: 5%;
    text-decoration: none;
    background: #6FB98F;
    
    &:hover {
      background: #A2C523;
    }
  }
`
export default BannerCategories
