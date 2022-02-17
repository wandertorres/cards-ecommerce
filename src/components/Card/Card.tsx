import { useContext, useState } from 'react';
import { Product } from '../../types/Product';
import Button from '../Button/Button';
import Wishlist from '../Wishlist/Wishlist';
import './Card.css';

type Props = {
    product: Product,
}

export function Card({ product }: Props): JSX.Element {
    const [listSaved, setListSaved] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const handleSaved = (id: number): void => {
        let list: Product[] = [];
        const aux: Product | undefined = listSaved.find((item: Product) => item.id === id);
        
        if(!aux) {
            //list = products.filter((item: Product) => item.id === id);
            setListSaved((prevState: Product[]) => ([...prevState, ...list]));
        } else {
            list = listSaved.filter((item: Product) => item.id !== id)
            setListSaved(list);
        }
    }

    const handleCart = (id: number): void => {
        let list: Product[] = [];
        const aux: Product | undefined = cart.find((item: Product) => item.id === id);
        
        if(!aux) {
            //list = products.filter((item: Product) => item.id === id);
            setCart((prevState: Product[]) => ([...prevState, ...list]));
        } else {
            list = cart.filter((item: Product) => item.id !== id)
            setCart(list);
        }
    }

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
                        R$ { product.previousPrice }
                    </span>
                    <span className='price__current'>
                        R$ { product.currentPrice }
                    </span>
                    <span className='price__payment'>
                        { `em até 
                            ${product.formPayment}x de 
                            ${product.currentPrice/product.formPayment} sem juros` 
                        }
                    </span>
                </div>
            </div>
            
            <Button id={product.id} handleCart={handleCart} />
        </div>
    );
}
