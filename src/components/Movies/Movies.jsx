import React, { Component } from 'react'

export default class Movies extends Component {

    render() {
        return (
            <>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='w-100' src={this.props.location.state.posterPath} alt="" />
                        </div>
                        <div className='col-md-6'>
                            <div className='content'>
                                <h2 className='mb-5'>{this.props.location.state.title}</h2>
                                <p className='mb-4'>Vote: {parseFloat(this.props.location.state.voteAverage).toFixed(1)}</p>
                                <p className='mb-4'>Vote Count: {this.props.location.state.voteCount}</p>
                                <p className='mb-4'>Popularity: {this.props.location.state.popularity}</p>
                                <p className='mb-4'>Release Date: {this.props.location.state.releaseDate}</p>
                                <p className='text-muted font-weight-bold'>{this.props.location.state.overview}</p>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}
