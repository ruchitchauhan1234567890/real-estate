const TodaysFollowUp = ({ data }) => {
    let date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const todays = data?.filter((item) => item.nextFollowUpDate === formattedDate) || [];

    return (
        <div className="w-auto h-auto border overflow-y-auto">
            {todays.map((item) => (
                <div key={item.id || item.phone} className="p-2 bg-amber-500 m-1 w-70">
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                </div>
            ))}
        </div>
    )
}

export default TodaysFollowUp