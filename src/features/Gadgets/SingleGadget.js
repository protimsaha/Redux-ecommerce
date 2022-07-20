import React from 'react';
import { useDispatch } from 'react-redux';
import { addGadget } from './GadgetSlice';

const SingleGadget = ({ gadget }) => {
    const { name, img, price, des } = gadget;
    const dispatch = useDispatch()

    const addToCart = (gadget) => {
        dispatch(addGadget(gadget))
    }

    return (
        <div className="d-flex m-card g-5 ms-3 justify-content-center  shadow">
            <div className="">
                <div className="card-body">
                    <img className='mb-3 p-img' src={img} alt="" />
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: ${price}</h6>
                    <p className="card-text">{des}</p>
                    <button onClick={() => addToCart(gadget)} className='cart-btn add-btn'>Add To Cart</button>
                </div>
            </div>

        </div>
    );
};

export default SingleGadget;