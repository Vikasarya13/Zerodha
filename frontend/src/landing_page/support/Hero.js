import React from 'react';


function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className=' p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track tickets</a>
            </div>
            <div className='row p-5 m-3'>
                <div className='col-6 p-3'>
                    <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O, why is my order getting rejected...'></input><br></br>
                    <a href=''> Track account opening </a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''> Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''> Intraday margins</a>&nbsp;&nbsp;<br></br>
                    <a href=''> Kite user manual</a>
                </div>
                <div className='col-6 p-3 '>
                    <h1 className='fs-4'>Featured</h1>
                    <ol>
                        <li> <a href=''>BSE StAR mutual fund platform downtime</a></li>
                        <li><a href=''>Offer for sale (OFS) – May 2025</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;







