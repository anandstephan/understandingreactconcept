import React from 'react'

function NameList() {
    const names = ['Tony Stak','Steve Roger','Bruce Banner']
    const namelist = names.map(name=><h1 key={name}>{name}</h1>)
    return (
        <div>
            {namelist}
        </div>
    )
}

export default NameList
