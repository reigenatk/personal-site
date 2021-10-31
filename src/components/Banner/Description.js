import React from 'react'
import styled from 'styled-components'
import Dash from './Dash'

const Description = () => {
    return (
        <Wrapper>
        <Dash value="About" />
        <p>Tech, Rants, and other Musings!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: white;
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

`


export default Description