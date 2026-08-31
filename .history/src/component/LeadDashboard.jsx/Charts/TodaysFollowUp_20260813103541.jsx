const TodaysFollowUp = ({ data }) => {
    let date = new Date();
    // Use local year, month, and day to avoid UTC timezone offset issues
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const todays = data?.filter((item) => item.nextFollowUpDate === formattedDate) || [];

    return (
        <div className="w-22 h-30 border overflow-y-auto">
            {todays.map((item) => (
                <div key={item.id || item.phone} className="w-22 h-30 border">
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                </div>
            ))}
        </div>
    )
}

export default TodaysFollowUp