import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GiftGrid from './components/GiftGrid'

const GiftExpertApp = props => {

    const [categories, setCategories] = useState(['One Puch Man'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}


            <ol>
                {categories.map((category) => 
                    <GiftGrid 
                        key={category}
                        category={category} 
                    />
                )}
            </ol>
        </>
    )
}

// GiftExpertApp.propTypes = {}

export default GiftExpertApp
