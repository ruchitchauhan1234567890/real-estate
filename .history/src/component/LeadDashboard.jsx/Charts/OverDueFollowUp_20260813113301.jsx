const OverDueFollowUp = ({ data }) => {
    let date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`;

    const overDue = data?.filter((item) => {
        if (item.nextFollowUpDate === "") return false
        return item.nextFollowUpDate < formattedDate
    }) || [];

    console.log(overDue)
    return (
        <div className="w-110 mt-2 h-auto shadow-sm rounded-sm  overflow-y-auto">
            <p className="font-bold mt-4 px-3">OverDue Follow-up</p>
            {overDue.map((item) => (
                <div key={item.id || item.phone} className="p-2 flex justify-between rounded-sm hover:bg-gray-300 m-1 ">
                    <div className="flex justify-between gap-2">
                        <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-gray-500">assignedTo :
                                <span className="font-bold">{item.assignedTo}</span>
                            </p>
                        </div>
                        <div>{Math.ceil(
                                (new Date(formattedDate) - new Date(item.nextFollowUpDate))
                                / (1000 * 60 * 60 * 24)
                            )} days overdue
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OverDueFollowUp