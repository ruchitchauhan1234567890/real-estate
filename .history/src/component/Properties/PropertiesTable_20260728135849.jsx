import React from 'react'

const PropertiesTable = ({propertiesData}) => {
  return (
    <div>
      <table className>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Property Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {propertiesData.map((curr,index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td><img src={`$curr.src`} />s</td>
                        </tr>
                    )
                })}
               
            </tbody>
      </table>
    </div>
  )
}

export default PropertiesTable
