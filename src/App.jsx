import imgMovil from './assets/images/image-product-mobile.jpg'
import imgDesktop from './assets/images/image-product-desktop.jpg'
import Info from './components/Info'
function App() {

  return (
    <div className="w-screen h-screen bg-[#f2eae3] overflow-y-auto flex justify-center items-center">
      <div className='my-10 mx-5 rounded-lg overflow-hidden bg-white sm:flex max-w-[320px] sm:max-w-[600px] sm:my-0 sm-mx-0'>
        <img src={ imgMovil } alt="Imagen Mobil"  className='sm:hidden' />
        <img src={ imgDesktop } alt=" Imagen Desktop" className='hidden sm:block w-1/2' />
        <Info />
      </div>
    </div>
  )
}

export default App
