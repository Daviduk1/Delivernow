import React from 'react'

const Delivery = () => {
  return (
    
    <div>

            <section class="bg-white text-dark p-5 text-center text-sm-start p-5 p-lg-0 pt-lg-5">
                <div class="container">
                    <div class="d-sm-flex justify-content-between align-item-center">
                        <div className='deliver'>
                        <h2 className='pt-4'>Have an order from your
                            favorite vendors delivered
                            right to your doorstep
                    </h2>
                    <h2 > <a style={{textDecorationColor:'none'}}className='pt-4' href='/signup'>Get Started</a> </h2>
                        </div>
                        <div>
                            <img class="img-fluid" src="./images/hero-image.jpg" alt=""/>
            
                        </div>

                    </div>
                </div>
            </section>
            {/* <section className='p-5'>
                <div className="container">
                    <div className="d-sm-flex justify-content-between align-item-center text-center">
                        <div >
                            <img className='img-fluid ' src="./Images/right.png" alt="" />
                            <h2 className=''>Select a vendor</h2>
                            <p>Patronise top endorsed merchant<br></br>
                            for various service on the go
                            </p>
                            <h4><a href='#'>Sign in to your account</a></h4>
                        </div>
                        <div className="middle">
                        <img src="/Images/middle.png" alt="" />
                        <h2 className=''>Pick up an order</h2>
                        <p>
                            Find order closest to your area<br></br>
                            and get a commision for every order
                        </p>
                        <h4><a href='#'>Create an account</a></h4>
                        </div>
                        <div className="right">
                        <img src="./Images/left.jpeg" alt="" />
                        <h2>Get the app</h2>
                        <p>Experience the best delivery<br></br>
                        services on your mobile
                        </p>
                        <h4><a href='#'>Get the app</a></h4>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className=''>
                <div className="container">
                    <div className="row py-5 g-4">
                        <div className="col-md">
                            <div className="card bg-light">
                                <div className="card-body text-center">
                                    <img className="img-fluid"src="./Images/right.png" alt="" />
                                    <h3 className='card-title mt-3'>Select a vendor</h3>
                                    <p>
                                        Patronise top endorsed merchant
                                        for various service on the go
                                    </p>
                                    <h4><a style={{textDecoration:'none'}} href='#'>Sign in to your account</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-light">
                                <div className="card-body text-center">
                                    <img className="img-fluid"src="./Images/middle.png" alt="" />
                                    <h3 className='card-title mt-3'>Pick up an order</h3>
                                    <p>
                                    Find order closest to your area
                                    and get a commision for every order
                                    </p>
                                    <h4><a style={{textDecoration:'none'}} href='#'>Create an Account</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-light">
                                <div className="card-body text-center">
                                    <img className="img-fluid"src="./Images/left.jpeg" alt="" />
                                    <h3 className='card-title mt-3'>Get the App</h3>
                                    <p>
                                    Experience the best delivery
                                    services on your mobile
                                    </p>
                                    <h4><a style={{textDecoration:'none'}} href='#'>Get the app</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Delivery