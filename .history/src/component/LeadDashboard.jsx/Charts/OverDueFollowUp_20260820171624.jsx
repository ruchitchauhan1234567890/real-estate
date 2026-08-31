const OverDueFollowUp = ({ data }) => {
    const current = JSON.parse(localStorage.getItem("loggedUser"))
    let date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`;
    console.log(data)
    const overDue = data?.filter((item) => {
        if (item.nextFollowUpDate === "") return false
        return item.nextFollowUpDate < formattedDate
    }).slice(0, 3) || [];

    console.log(overDue)
    return (
        <div className="w-90 px-2  h-full shadow-sm rounded-lg  overflow-y-auto">
            <p className="font-bold mt-4 px-3">OverDue Follow-up</p>
            <hr className="px-2"/>
            {overDue.map((item) => (
                <div key={item.id || item.phone} className="p-2 flex w-auto justify-between rounded-sm hover:bg-gray-300 m-1 ">
                    <div className="flex justify-between gap-7 w-full">
                        <div>
                            <p className="font-bold">{item.name}</p>
                            {
                                current.isAdmin &&
                                <p className="text-sm text-gray-500">assignedTo :
                                    <span className="font-bold">{item.assignedTo}</span>
                                </p>
                            }
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