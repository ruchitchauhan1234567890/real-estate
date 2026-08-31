const TodaysFollowUp = ({ data }) => {
    let date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const todays = data?.filter((item) => item.nextFollowUpDate === formattedDate) || [];

    return (
        <div className="w-auto h-auto border overflow-y-auto">
            <p className="font-bold mt-4 px-">Todays Follow-up</p>
            {todays.map((item) => (
                <div key={item.id || item.phone} className="p-2 flex justify-between rounded-sm hover:bg-gray-300 m-1 w-70">
                    <div className="flex">
                        <div className="center bg-amber-900"> <p className="rounded-full text-center bg-amber-400 h-7 w-8">{item.name[0]}</p></div>
                        <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.interested}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">assignedTo</p>
                        <p className="text-end">{item.assignedTo}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodaysFollowUp