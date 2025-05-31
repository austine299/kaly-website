import BannerImg from '../images/18.jpg'

function Header(){
    return(
        <div className="h-80 flex flex-col items-center justify-center gap-3 bg-cover bg-center w-full" 
            style={{backgroundImage: `url(${BannerImg})`}}
        >
            <h2 className='text-3xl sm:text-5xl hover:rotate-6 text-white font-bold'>Kaly Grains & More</h2>
            <span className='text-white'>Healthy food for your lifestyle</span>

            <button className='mt-5 bg-red-500 text-white px-5 py-3 rounded-md hover:bg-red-400'>
                Shop Now
            </button>
        </div>
    )
}

export default Header;