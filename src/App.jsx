import imgMovil from './assets/images/image-product-mobile.jpg'
import Info from './components/Info'
function App() {

  return (
    <div className="w-screen h-screen bg-[#f2eae3] overflow-y-auto">
      <div className='my-10 mx-5 rounded-lg overflow-hidden bg-white'>
        <img src={ imgMovil } alt="Imagen Mobil" />
        <Info />
      </div>
    </div>
  )
}

export default App
