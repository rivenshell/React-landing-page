import React from 'react'

function card() {
  return (
    <div className="col-lg-3 col-12">
            <div className="card text-center">
            <img src="https://images.unsplash.com/photo-1667422380246-3bed910ffae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" 
            className="card-img-top" alt="web_3.0"/>
            <div className="card-body">
                <h5 className="card-title">Writers Block</h5>
                <p className="card-text">
                Perhaps one source of malaise is my non-writing</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>  
  )
}

export default card
