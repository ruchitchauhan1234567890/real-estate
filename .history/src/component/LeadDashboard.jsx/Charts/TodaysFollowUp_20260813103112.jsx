import React from 'react'

const TodaysFollowUp = ({ data }) => {

    let date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate)
    const todays = data.filter((date) => date.nextFollowUpDate === formattedDate)
    console.log(todays)
    return (
        <div className="w-22 h-30 border">
            {todays.map((item) => {
                (
                    <div className="w-22 h-30 border">
                        <p>hello</p>
                        <p>{item.name}</p>
                        <p>{item.phone}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TodaysFollowUp
