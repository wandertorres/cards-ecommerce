import img from '../../img/image.png';
import './Card.css';

function Card({product}) {
  return (
    <div className="card">
        <div className='image'>
            <img src={img} className='img' alt='Imagem doProduto' />
            <div className='wishlist'>
                <span className='heart'>+</span>
            </div>
        </div>
        <div className='content'>
            <span className='description'>{product.description}</span>
            <div className='price'>
                <span className='ant'>R$ {parseFloat(product.previousPrice).toFixed(2)}</span>
                <span className='atu'>R$ {parseFloat(product.currentPrice).toFixed(2)}</span>
                <span className='pag'>{product.formPayment}</span>
            </div>
        </div>
        <div className='button'>
            <div className='btn'>Adicionar</div>
        </div>
    </div>
  );
}

export default Card;