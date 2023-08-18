import { useState } from 'react'
import Header from './componentsHeader/Header'
import Body from './assets/componentsBody/Body'
import Footer from './assets/componentsFooter/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
      </Header>
     <Body>
     </Body>
     <Footer>
     </Footer>
    </>
  )
}

export default App