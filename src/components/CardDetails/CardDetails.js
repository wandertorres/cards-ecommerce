import './CardDetails.css';

export default function CardDetails ({product}) {

    return (
        <div className="card">
            <div className='image'>
                <img src={product.urlImage} className='img' alt='Imagem doProduto' />
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
                        em até {product.formPayment}x de {product.currentPrice/product.formPayment} sem juros
                    </span>
                </div>
            </div>
        </div>
    );
}
