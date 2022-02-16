import Button from '../Button/Button';
import Wishlist from '../Wishlist/Wishlist';
import './Card.css';

export default function Card ({product, handleSaved, handleCart}) {

    return (
        <div className="card">
            <div className='card__image'>
                <img src={ product.urlImage } alt='Imagem do Produto' />
                <Wishlist id={ product.id } handleSaved={ handleSaved } />
            </div>
            <div className='card__content'>
                <span className='content__description'>{ product.description }</span>
                <div className='content__price'>
                    <span className='price__previous'>
                        R$ { parseFloat(product.previousPrice).toFixed(2) }
                    </span>
                    <span className='price__current'>
                        R$ { parseFloat(product.currentPrice).toFixed(2) }
                    </span>
                    <span className='price__payment'>
                        { `em até 
                            ${product.formPayment}x de 
                            ${parseFloat(product.currentPrice/product.formPayment).toFixed(2)} sem juros` 
                        }
                    </span>
                </div>
            </div>
            
            <Button id={product.id} handleCart={handleCart} />
        </div>
  );
}
