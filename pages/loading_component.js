import React, { useState } from 'react'

function Loading_component() {
    return (
        <div>
            <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading_component