import React, { useState } from 'react'
import AddProperties from '../component/Properties/AddProperties'
import PropertiesForm from '../component/Properties/PropertiesForm'
import PropertiesCard from '../component/Properties/PropertiesCard'
import PropertiesTable from '../component/Properties/PropertiesTable'

const Properties = () => {
   const [propertiesData, setPropertiesData] = useState([])
  const [open,setOpen] = useState(false)
  return (
    <div>
      <AddProperties open={open} setOpen={setOpen} propertiesData={propertiesData} setPropertiesData={setPropertiesData}/>
      <PropertiesForm open={open} setOpen={setOpen}/>
      <PropertiesCard propertiesData={propertiesData}/>
      <PropertiesTable propertiesData={propertiesData}/>
    </div>
  )
}

export default Properties
