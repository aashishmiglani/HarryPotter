import React from 'react'

const Loader = (props) => {
    return (
        <>
            <div class="spinner-border" role="status" style={{ margin: `${props.xSize} ${props.ySize}` }}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </>
    )
}

export default Loader