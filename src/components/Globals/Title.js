import React from 'react'

import '../layout.css'

export default function Title({ title }) {
    return (
        <div className="text-center">
            <h1 className="display-4 text-capitalize font-weight-bold">{ title }</h1>
        </div>
    )
}
