import React from 'react'
import styled from 'styled-components'

const Dash = ({value}) => {
    return (
        <Wrapper>
            <div className="fancy">
            <div className="line"></div>
            <h4>{value}</h4>
            <div className="line"></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;
  h4 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6rem;
    background: #141516;

  }

  .fancy {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.2rem;
    align-items: center;
  }
  .line {

    width: auto;
    height: 2.5px;

    background: #FFB6C1;


`

export default Dash