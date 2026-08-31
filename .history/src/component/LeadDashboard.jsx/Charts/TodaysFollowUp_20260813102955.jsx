import React from 'react'

const TodaysFollowUp = ({ data }) => {

    let date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate)
    const todays = data.filter((date) => date.nextFollowUpDate === formattedDate)
    console.log(todays)
    return (
        <div>
            {todays.map((item) => {
                (
                    <div>
                        <p>hello</p>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TodaysFollowUp
