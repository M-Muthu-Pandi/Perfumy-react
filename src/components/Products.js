// Products Component
import one from "../assets/images/perfume-1.webp";
import two from "../assets/images/perfume-3.webp";
import three from "../assets/images/perfume-4.webp";

function Products() {
    return (
        <div className="products">
            <div className='box'>
                <img src={one} alt="Perfume 1" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio expedita</p>
            </div>
            <div className='box'>
                <img src={two} alt="Perfume 2" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio expedita</p>
            </div>
            <div className='box'>
                <img src={three} alt="Perfume 3" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio expedita</p>
            </div>
        </div>
    )
}

export default Products;