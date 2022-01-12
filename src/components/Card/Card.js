import img from '../../img/image.png';
import './Card.css';

function Card() {
  return (
    <div className="card">
        <div className='image'>
            <img src={img} className='img' />
            <div className='wishlist'>
                <span className='heart'>+</span>
            </div>
        </div>
        <div className='content'>
            <span className='description'>Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50</span>
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