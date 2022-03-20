import styled from 'styled-components'

export const Wrapper = styled.section`
margin-top: 2rem;
.colors {
  display: grid;
  grid-template-columns: 125px 1fr;
  align-items: center;
  margin-bottom: 1rem;
  span {
    text-transform: capitalize;
    font-weight: 700;
  }
  div {
    display: flex;
  }
}
.color-btn {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #222;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 0.75rem;
    color: var(--clr-white);
  }
}
.active {
  opacity: 1;
}
.btn-container {
  margin-top: 2rem;
}

.btn {
  margin-top: 1rem;
  width: 140px;
}
`

export const AmountWrapper = styled.div`
display: grid;
width: 140px;
justify-items: center;
grid-template-columns: repeat(3, 1fr);
align-items: center;
h2 {
  margin-bottom: 0;
}
button {
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 1rem 0;
  width: 2rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
h2 {
  margin-bottom: 0;
}
`