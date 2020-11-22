import React from 'react'

export default function Table(props) {
  const physicalCharacteristics = props.physicalCharacteristics
  // console.log(physicalCharacteristics)
  return (
    <div className="table-list mx-auto">
        
    <div className="card tableHeadBackground mx-auto noBorder shadow-sm"> 
        <div className="text-white row">
        <span className="mx-auto">
            <h2 className="mb-0 mt-1 font-weight-bold">Table People</h2>
        </span>
        </div>
    </div>

    <div className="card tableBackground shadow-lg" >
      <table className="table text-center mt-4 " >
        <thead className='table-borderless' id='darkGreyColor' 
          style={{fontWeight:'bold', fontSize:'1.2em'}}>
          <tr style={{fontSize:'0.8em'}}>
            <th scope="col">Name</th>
            <th scope="col">Height <small> (cm)</small></th>
            <th scope="col">Mass <small> (kg)</small></th>
            <th scope="col">Hair Color</th>
            <th scope="col">Skin Color</th>
          </tr>
        </thead>
        <tbody> 
          {physicalCharacteristics.map((char,i) => {
            return(
              <tr key={char.name} style={{fontSize:'0.8em'}}>
                <td className="text-left">{char.name}</td>
                <td>{char.height}</td>
                <td>{char.mass}</td>
                <td className="text-capitalize">{char.hair_color}</td>
                <td className="text-capitalize">{char.skin_color}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
  )
}
