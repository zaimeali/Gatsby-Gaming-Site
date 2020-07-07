import React from 'react'

import '../layout.css'

export default function Footer({ name }) {
    return (
        <footer className="footer bg-dark py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-footer text-center">
                        Made by <span className="text-crimpson">{ name }</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
