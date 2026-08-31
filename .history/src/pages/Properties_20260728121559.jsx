import React, { useState } from 'react'
import AddProperties from '../component/Properties/AddProperties'
import PropertiesForm from '../component/Properties/PropertiesForm'

const Properties = () => {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <AddProperties/>
      <PropertiesForm/>
    </div>
  )
}

export default Properties
