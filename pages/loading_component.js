import React, { useState } from 'react'

function loading_component() {
    return (
        <div>
            <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default loading_component