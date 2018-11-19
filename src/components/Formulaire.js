import React from 'react'



const Exercice = () => (
    <div ClassName='exercice' >
        <h1>Ex</h1> 
    </div>
)

const Formulaire = () => {
    const exercice = []
    return (
        <div>
            { exercice }
            <h1>Formulaire </h1>
            <h1><Exercice/></h1>
        </div>
    )
}

export default Formulaire