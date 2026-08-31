import React from 'react'

const TodaysFollowUp = ({data}) => {

    let date =  new Date();
    const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate)
    // const todays = data.filter
  return (
    <div>
      
    </div>
  )
}

export default TodaysFollowUp
