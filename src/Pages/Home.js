import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { deleteGadget } from '../features/Gadgets/GadgetSlice';

const Home = () => {
    const gadgets = useSelector((state) => state.gadgetReducer.gadgets)
    const dispatch = useDispatch()

    const cancel = (id) => {
        console.log(id)
        dispatch(deleteGadget(id))
    }


    return (
        <div>
            <h2>Selected Items</h2>
            {
                gadgets && gadgets.map(gadget => <div key={gadget.id} className='cart d-flex mx-auto justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <img className='img-fluid' src={gadget.img} alt="" />
                        <div>
                            <h4>Name: {gadget.name}</h4>
                            <h6> Price: $ {gadget.price}</h6>
                        </div>
                    </div>
                    <button onClick={() => cancel(gadget.id)} className='cancel'>Cancel</button>
                </div>)
            }
        </div>
    );
};

export default Home;