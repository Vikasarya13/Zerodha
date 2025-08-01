import React from 'react';


function Universe() {
    return <div className='container mt-5'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='col-4 p-3 mt-5'>
                <img src="media/image/smallcaseLogo.png" />
                <p className='text-small text-muted'>Thematic investment platform </p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src="media/image/zerodhaFundhouse.png" style={{ width: "50%" }} />
                <p className='text-small text-muted'> Asset management </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/image/sensibullLogo.svg" style={{ width: "50%" }} />
                <p className='text-small text-muted'>Options trading platform  </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/image/dittoLogo.png" style={{ width: "40%" }} />
                <p className='text-small text-muted'> Insurance </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/image/streakLogo.png" style={{ width: "50%" }} />
                <p className='text-small text-muted'> Algo & strategy platform </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/image/goldenpiLogo.png" />
                <p className='text-small text-muted'> Bonds trading platform  </p>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
        </div>
    </div>


}

export default Universe;