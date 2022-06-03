import About from './components/about/About'
import Contact from './components/Contact/Contact'
import Intro from './components/intro/Intro'
import ProductList from './components/ProductList/ProductList'
import Toggle from './components/Toggle/Toggle'
function App() {
  return (
    <div>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App
