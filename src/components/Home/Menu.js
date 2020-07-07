import React, { Component } from 'react'

import Title from '../Globals/Title'

import Img from 'gatsby-image'

export default class Menu extends Component {
    constructor(props){
        super(props);

        // console.log(props.items);

        this.state = {
            items: props.items.edges,
            gamingItems: props.items.edges
        };
    }

    render() {
        if(this.state.items.length){
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="2020 BEST GAMES" />
                        <div className="row">
                            {
                                this.state.gamingItems.map(({ node }) => {
                                    return (
                                        <div 
                                            key={ node.id }
                                            className="col-11 col-md-6 my-3 d-flex mx-auto"
                                        >
                                            <div>
                                                <Img fixed={ node.image.fixed } />
                                            </div>
                                            <div className="flex-grow-1 px-3">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-0 font-weight-bold">{ node.title }</h6>
                                                    <h6 className="mb-0">${ node.price }</h6>
                                                </div>
                                                <p className="text-muted">
                                                    <small>{ node.description.description.length > 100 ? node.description.description.substring(0, 220) + "..." : node.description.description }</small>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            } 
                        </div>
                    </div>
                </section>
            )
        }
        else{
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="2020 BEST GAMES" />
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>There are no items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
