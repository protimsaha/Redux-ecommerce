import React from 'react';
import SingleGadget from './SingleGadget';

const GadgetView = () => {
    const gadgets = [{ id: 1, name: 'TWS', price: 100, img: 'https://i.ibb.co/p2q19p2/download.jpg', des: 'This is a HighFy TWS' },
    { id: 2, name: 'Gaming Console', price: 300, img: 'https://i.ibb.co/887dH8b/download-2.jpg', des: 'This is a Game Console' },
    { id: 3, name: 'Neckband earphone', price: 150, img: 'https://i.ibb.co/Jpw9Tqt/513-E13jth-NL-SL1000.jpg', des: 'This is a Neckband Earphone' },
    { id: 4, name: 'Photography Lense', price: 300, img: 'https://i.ibb.co/yhhRFg7/bothsonys-rocks.jpg', des: 'This is a Photography lense' },
    { id: 5, name: 'Gimble', price: 250, img: 'https://www.ubuy.com.bh/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFuWU1xWGdtNkwuX0FDX1NMMTUwMF8uanBn.jpg', des: 'This is a Gimble' },
    { id: 6, name: 'Car Mobile Stand', price: 300, img: 'https://static-01.daraz.com.bd/p/39dece040d1ec0299af3c8b09098a04c.jpg', des: 'This is a Phone Holder' },]


    return (
        <div>
            <h2>Showing All Gadget</h2>
            <div className='container row d-flex justify-content-around row-cols-1 row-cols-md-4 mx-auto  mt-5'>
                {
                    gadgets && gadgets.map(gadget => <SingleGadget key={gadget.id} gadget={gadget}></SingleGadget>)
                }
            </div>
        </div>
    );
};

export default GadgetView;