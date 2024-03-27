import './App.css';
import { NavigationBar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LinkShorter } from './components/LinkShorter';
import { AdvancedStatistics } from './components/Statistics';
import { BoostComponent } from './components/Boost';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <div className='bg-body-secondary pt-4 pb-5'>
        <LinkShorter />
        <AdvancedStatistics />
      </div>
      <BoostComponent />
      <Footer />
    </>
  )
}

export default App
