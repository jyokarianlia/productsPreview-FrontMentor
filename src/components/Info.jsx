import imgCart from '../assets/images/icon-cart.svg'

const Info = () => {
  return (
    <div className=' px-4 text-sm monserrat sm:w-1/2 sm:py-7 sm:px-9 sm:flex sm:flex-col sm:justify-between'>
        <p className="uppercase text-gray-500 mt-2 text-xs">p e r f u m e</p>
        <h2 className='font-bold text-2xl my-3 france sm:text-4xl sm:my-0 '>Gabrielle Essence Eau De Parfum</h2>

        <p className=' text-gray-500  text-sm'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANNEL.</p>
        <p className='text-[#3d8168] text-4xl font-bold mt-4 sm:mt-0 france flex items-center'>
            $149.99 
            <span className='text-xs text-gray-500 font-normal ml-4 relative monserrat'>
                <div className='absolute bg-gray-400 h-0.5 w-12 top-1.5 left-0'></div>
                $169.99
            </span>
        </p>

        <button className="bg-[#3d8168] text-white w-full py-3 mt-4 mb-5 sm:mt-0 sm:mb-0 rounded-lg flex justify-center items-center font-bold hover:cursor-pointer hover:bg-[#1a4031] transition ease-in-out duration-300" > <img src= { imgCart } alt="Imagen de Cart" className='mr-2' /> Add to Cart</button>
    </div>
  )
}

export default Info