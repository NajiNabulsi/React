import React from 'react'

export default function DogPhoto({dogUrl, i}) {
    return (
        <img src={dogUrl} alt={i} />
    )
}
