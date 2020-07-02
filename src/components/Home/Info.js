import React from 'react'
import { Link } from 'gatsby'

import '../layout.css'

import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Nam veniam totam reiciendis mollitia dolore provident, 
                            qui veritatis dolorem rerum laudantium optio repellendus commodi 
                            ipsum nobis eius, nostrum labore molestiae sunt!
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-red text-uppercase">
                                About Us
                            </button>                        
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
