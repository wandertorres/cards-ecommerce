import img from '../../img/image.png';
import Button from '../Button/Button';
import Wishlist from '../Wishlist/Wishlist';
import './Card.css';

export default function Card ({product, handleSaved}) {

    return (
        <div className="card">
            <div className='image'>
                <img src={img} className='img' alt='Imagem doProduto' />
                <Wishlist />
            </div>
            <div className='content'>
                <span className='description'>{product.description}</span>
                <div className='price'>
                    <span className='ant'>
                        R$ {parseFloat(product.previousPrice).toFixed(2)}
                    </span>
                    <span className='atu'>
                        R$ {parseFloat(product.currentPrice).toFixed(2)}
                    </span>
                    <span className='pag'>
                        em até {product.formPayment}x de 
                        {product.currentPrice/product.formPayment} sem juros
                    </span>
                </div>
            </div>
            
        <Button id={product.id} handleSaved={handleSaved} />
        </div>
  );
}
