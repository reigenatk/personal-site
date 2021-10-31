import React from 'react'
import styled from 'styled-components'
import BannerCategories from './BannerCategories'
import Recent from './Recent'
import Description from './Description'

const Banner = () => {
    return (
        <Wrapper>
        <Description />
        <Recent />
        <BannerCategories />
        </Wrapper>
    )
}

const Wrapper = styled.aside`

  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 0.75rem;
  padding: 1rem 1rem;
  border-radius: 5%;
  background: #003B46;
  @media (min-width: 576px) {
    & {
      // what autofit does is basically split up remaining available row-space into as many
      // columns as possible, here we specify 200px width so that is the length it will look for

      // so on mobile we will have it lay across in columns while for desktop
      // it will sit vertically
      grid-template-columns: repeat(auto-fit, 300px);
      column-gap: 3rem;
    }
  }


`

export default Banner;