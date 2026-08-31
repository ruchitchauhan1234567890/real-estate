import React, { useState } from 'react'
import AddProperties from '../component/Properties/AddProperties'
import PropertiesForm from '../component/Properties/PropertiesForm'

const Properties = () => {
   const [propertiesData, setPropertiesData] = useState([])
  const [open,setOpen] = useState(false)
  return (
    <div>
      <AddProperties open={open} setOpen={setOpen} propertiesData={propertiesData} setPropertiesData={setPropertiesData}/>
      <PropertiesForm open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Properties
