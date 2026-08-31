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
                    console.log(curr.file.name)
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td><img src={URL.createObjectURL(curr.file)} className="w-12 h-9"/></td>
                        </tr>
                    )
                })}
               
            </tbody>
      </table>
    </div>
  )
}

export default PropertiesTable
