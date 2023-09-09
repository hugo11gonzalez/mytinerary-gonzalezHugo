import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import SlideShow from './components/SlideShow'

import './App.css'

function App() {


  return (
    <>
     <Header/>
     <main className=''>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus quisquam adipisci sed, id quia eligendi earum officia laborum tempora mollitia possimus reprehenderit molestiae maxime facilis architecto aliquam cumque impedit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus quisquam adipisci sed, id quia eligendi earum officia laborum tempora mollitia possimus reprehenderit molestiae maxime facilis architecto aliquam cumque impedit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus quisquam adipisci sed, id quia eligendi earum officia laborum tempora mollitia possimus reprehenderit molestiae maxime facilis architecto aliquam cumque impedit.</p>
     </main>
     <SlideShow/>
     <Footer/>
    </>
  )
}

export default App
