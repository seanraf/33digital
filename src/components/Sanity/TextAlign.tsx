
import React from 'react'

export const TextAlign = (props: any) => {
    // Get the text-align value from props, default to 'left' if not provided
    const alignment = props.value || 'left';
    
    return (
        <div style={{textAlign: alignment, width: '100%'}}>
            {props.children}
        </div>
    )
}
