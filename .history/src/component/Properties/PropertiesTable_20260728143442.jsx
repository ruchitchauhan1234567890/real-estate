import React from 'react'

const PropertiesTable = ({propertiesData}) => {

    
  return (
    <div>
      <table className="w-full border-collapse border-2 mt-4">
            <thead>
                <tr>
                    <th className="border">#</th>
                    <th className="border">Image</th>
                    <th className="border">Property Name</th>
                    <th className="border">Type</th>
                    <th className="border">Price</th>
                    <th className="border">Location</th>
                    <th className="border">Status</th>
                </tr>
            </thead>
            <tbody>
                {propertiesData.map((curr,index) => {
                    console.log(curr.file.name)
                    return (
                        <tr>
                            <td className="border p-1">{index + 1}</td>
                            <td className="border p-1"><img src={URL.createObjectURL(curr.file)} className="w-15 h-10 rounded-sm"/></td>
                            <td className="border p-1">{curr.propertyName}</td>
                            <td className="border p-1">{curr.type}</td>
                            <td className="border p-1">{curr.price}</td>
                            <td className="border p-1">{curr.location}</td>
                            <td className="border p-1">{curr.status}</td>
                        </tr>
                    )
                })}
               
            </tbody>
      </table>
    </div>
  )
}

export default PropertiesTable
