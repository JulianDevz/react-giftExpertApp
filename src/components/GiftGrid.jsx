// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GiftGridItem from './GiftGridItem';
// import {getGifs} from '../helpers/getGifs'
// import PropTypes from 'prop-types'

const GiftGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p>Loading...</p>}

            <div className='card-grid'>
                {
                    images.map(imagen => <GiftGridItem key={imagen.id} {...imagen}/>)
                }
            </div>
        </>
    )
}

// GiftGrid.propTypes = {}

export default GiftGrid