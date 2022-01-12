import img from '../../img/image.png';
import './Card.css';

function Card({ product }) {
    console.log(product)
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
                <span className='ant'>R$ 2.813,99</span>
                <span className='atu'>R$ 2.599,00</span>
                <span className='pag'>em até 10x de R$ 259,90 sem juros</span>
            </div>
        </div>
        <div className='button'>
            <div className='btn'>ADICIONAR</div>
        </div>
    </div>
  );
}

export default Card;