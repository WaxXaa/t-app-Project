import './App.css'
import Cards from './components/cards/Cards'
import HCardCarusel from './components/cards/HCardCarusel'
import MiniCardCarusel from './components/cards/MiniCardsCarusel'
import NavBar from './components/nav/NavBar'
function App() {
  return (
    <>
      <div className='container-app'>
        <header>
          <NavBar />
        </header>
        <main>
          <div className='container-main'>
            <MiniCardCarusel />
            <HCardCarusel />
            <Cards />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
