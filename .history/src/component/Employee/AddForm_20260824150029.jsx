import React, { useContext } from "react";
import Select from "react-select";
import { IoClose } from "react-icons/io5";
import { FiCalendar, FiClock } from "react-icons/fi";
import { TaskContext } from "../../ContextAPI/TaskContext";

const AddTask = () => {

    const {
        open,
        setOpen,
        editedTask,
        setEditedTask
    } = useContext(TaskContext);

    if (!open) return null;

    const employees = JSON.parse(localStorage.getItem("employee")) || [];
    const leads = JSON.parse(localStorage.getItem("leads")) || [];

    const employeeOptions = employees
        .filter((emp) => !emp.isAdmin && emp.status !== "Inactive")
        .map((emp) => ({
            value: emp.name,
            label: emp.name
        }));

    const leadOptions = leads.map((lead) => ({
        value: lead.name,
        label: lead.name
    }));

    const priorityOptions = [
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" },
        { value: "Low", label: "Low" }
    ];

    const statusOptions = [
        { value: "Pending", label: "Pending" },
        { value: "Processing", label: "Processing" },
        { value: "Completed", label: "Completed" }
    ];

    const taskTypeOptions = [
        { value: "Call", label: "Call" },
        { value: "Meeting", label: "Meeting" },
        { value: "Follow-up", label: "Follow-up" },
        { value: "Site Visit", label: "Site Visit" },
        { value: "Email", label: "Email" },
        { value: "Other", label: "Other" }
    ];

    const reminderOptions = [
        { value: "None", label: "No Reminder" },
        { value: "15 Minutes Before", label: "15 Minutes Before" },
        { value: "30 Minutes Before", label: "30 Minutes Before" },
        { value: "1 Hour Before", label: "1 Hour Before" },
        { value: "1 Day Before", label: "1 Day Before" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEditedTask((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (name, selected) => {
        setEditedTask((prev) => ({
            ...prev,
            [name]: selected?.value || ""
        }));
    };

    const handleClose = () => {
        setOpen(false);
        setEditedTask({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Keep your existing save/add task logic here

        console.log("Task:", editedTask);
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">

            {/* Overlay */}
            <div
                onClick={handleClose}
                className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
            />

            {/* Drawer */}
            <div
                className="
                    relative
                    z-10
                    w-full
                    max-w-[620px]
                    h-full
                    bg-white
                    shadow-2xl
                    flex
                    flex-col
                "
            >

                {/* ================= HEADER ================= */}
                <div className="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-4
                    border-b
                    border-gray-200
                    bg-white
                ">

                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            {editedTask?.id ? "Edit Task" : "Create New Task"}
                        </h2>

                        <p className="text-xs text-gray-500 mt-0.5">
                            Create and manage task activities
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            w-8
                            h-8
                            rounded-md
                            flex
                            items-center
                            justify-center
                            text-gray-400
                            hover:text-gray-700
                            hover:bg-gray-100
                            transition
                        "
                    >
                        <IoClose size={20} />
                    </button>

                </div>


                {/* ================= FORM ================= */}
                <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto px-6 py-5"
                >

                    {/* ================= BASIC INFORMATION ================= */}
                    <div className="mb-6">

                        <h3 className="
                            text-sm
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Basic Information
                        </h3>


                        {/* Task Title */}
                        <div className="mb-4">

                            <label className="crm-label">
                                Task Title <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={editedTask?.title || ""}
                                onChange={handleChange}
                                placeholder="Enter task title"
                                required
                                className="crm-input"
                            />

                        </div>


                        {/* Description */}
                        <div className="mb-4">

                            <label className="crm-label">
                                Task Description
                            </label>

                            <textarea
                                name="description"
                                value={editedTask?.description || ""}
                                onChange={handleChange}
                                placeholder="Enter task description"
                                rows={4}
                                className="
                                    w-full
                                    rounded-md
                                    border
                                    border-gray-200
                                    px-3
                                    py-2.5
                                    text-xs
                                    text-gray-700
                                    outline-none
                                    resize-none
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* Lead + Customer */}
                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <div>
                                <label className="crm-label">
                                    Related To <span>*</span>
                                </label>

                                <Select
                                    options={leadOptions}
                                    value={
                                        leadOptions.find(
                                            (item) =>
                                                item.value === editedTask?.lead
                                        ) || null
                                    }
                                    onChange={(selected) =>
                                        handleSelectChange(
                                            "lead",
                                            selected
                                        )
                                    }
                                    placeholder="Select lead / customer"
                                    className="text-xs"
                                    styles={selectStyles}
                                />
                            </div>


                            <div>
                                <label className="crm-label">
                                    Lead / Customer <span>*</span>
                                </label>

                                <Select
                                    options={leadOptions}
                                    value={
                                        leadOptions.find(
                                            (item) =>
                                                item.value === editedTask?.lead
                                        ) || null
                                    }
                                    onChange={(selected) =>
                                        handleSelectChange(
                                            "lead",
                                            selected
                                        )
                                    }
                                    placeholder="Select lead or customer"
                                    className="text-xs"
                                    styles={selectStyles}
                                />
                            </div>

                        </div>


                        {/* Assign + Priority */}
                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <div>
                                <label className="crm-label">
                                    Assign To <span>*</span>
                                </label>

                                <Select
                                    options={employeeOptions}
                                    value={
                                        employeeOptions.find(
                                            (item) =>
                                                item.value === editedTask?.assign
                                        ) || null
                                    }
                                    onChange={(selected) =>
                                        handleSelectChange(
                                            "assign",
                                            selected
                                        )
                                    }
                                    placeholder="Select employee"
                                    className="text-xs"
                                    styles={selectStyles}
                                />
                            </div>


                            <div>
                                <label className="crm-label">
                                    Priority <span>*</span>
                                </label>

                                <Select
                                    options={priorityOptions}
                                    value={
                                        priorityOptions.find(
                                            (item) =>
                                                item.value === editedTask?.priority
                                        ) || null
                                    }
                                    onChange={(selected) =>
                                        handleSelectChange(
                                            "priority",
                                            selected
                                        )
                                    }
                                    placeholder="Select priority"
                                    className="text-xs"
                                    styles={selectStyles}
                                />
                            </div>

                        </div>


                        {/* Due Date + Time */}
                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <div>
                                <label className="crm-label">
                                    Due Date <span>*</span>
                                </label>

                                <div className="relative">

                                    <input
                                        type="date"
                                        name="dueDate"
                                        value={editedTask?.dueDate || ""}
                                        onChange={handleChange}
                                        required
                                        className="crm-input pr-9"
                                    />

                                    <FiCalendar
                                        className="
                                            absolute
                                            right-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-400
                                            pointer-events-none
                                        "
                                        size={15}
                                    />

                                </div>
                            </div>


                            <div>
                                <label className="crm-label">
                                    Due Time
                                </label>

                                <div className="relative">

                                    <input
                                        type="time"
                                        name="dueTime"
                                        value={editedTask?.dueTime || ""}
                                        onChange={handleChange}
                                        className="crm-input pr-9"
                                    />

                                    <FiClock
                                        className="
                                            absolute
                                            right-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-400
                                            pointer-events-none
                                        "
                                        size={15}
                                    />

                                </div>
                            </div>

                        </div>


                        {/* Status */}
                        <div>

                            <label className="crm-label">
                                Status
                            </label>

                            <Select
                                options={statusOptions}
                                value={
                                    statusOptions.find(
                                        (item) =>
                                            item.value ===
                                            (editedTask?.taskStatus || "Pending")
                                    )
                                }
                                onChange={(selected) =>
                                    handleSelectChange(
                                        "taskStatus",
                                        selected
                                    )
                                }
                                className="text-xs"
                                styles={selectStyles}
                            />

                        </div>

                    </div>


                    {/* ================= ADDITIONAL INFORMATION ================= */}
                    <div className="border-t border-gray-100 pt-5">

                        <h3 className="
                            text-sm
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Additional Information
                        </h3>


                        {/* Task Type */}
                        <div className="mb-4">

                            <label className="crm-label">
                                Task Type
                            </label>

                            <Select
                                options={taskTypeOptions}
                                value={
                                    taskTypeOptions.find(
                                        (item) =>
                                            item.value === editedTask?.taskType
                                    ) || null
                                }
                                onChange={(selected) =>
                                    handleSelectChange(
                                        "taskType",
                                        selected
                                    )
                                }
                                placeholder="Select task type"
                                className="text-xs"
                                styles={selectStyles}
                            />

                        </div>


                        {/* Reminder */}
                        <div className="mb-4">

                            <label className="crm-label">
                                Reminder
                            </label>

                            <Select
                                options={reminderOptions}
                                value={
                                    reminderOptions.find(
                                        (item) =>
                                            item.value === editedTask?.reminder
                                    ) || null
                                }
                                onChange={(selected) =>
                                    handleSelectChange(
                                        "reminder",
                                        selected
                                    )
                                }
                                placeholder="Select reminder"
                                className="text-xs"
                                styles={selectStyles}
                            />

                        </div>


                        {/* Notes */}
                        <div>

                            <label className="crm-label">
                                Notes
                            </label>

                            <textarea
                                name="notes"
                                value={editedTask?.notes || ""}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Enter any additional notes (optional)"
                                className="
                                    w-full
                                    rounded-md
                                    border
                                    border-gray-200
                                    px-3
                                    py-2.5
                                    text-xs
                                    text-gray-700
                                    outline-none
                                    resize-none
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>

                    </div>

                </form>


                {/* ================= FOOTER ================= */}
                <div className="
                    border-t
                    border-gray-200
                    bg-white
                    px-6
                    py-3
                    flex
                    justify-end
                    gap-3
                ">

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            px-5
                            py-2
                            rounded-md
                            border
                            border-gray-200
                            bg-white
                            text-xs
                            font-medium
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        form="task-form"
                        onClick={handleSubmit}
                        className="
                            px-6
                            py-2
                            rounded-md
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            text-xs
                            font-semibold
                            shadow-sm
                        "
                    >
                        {editedTask?.id ? "Update Task" : "Save Task"}
                    </button>

                </div>

            </div>
        </div>
    );
};


/* ================= SELECT STYLE ================= */

const selectStyles = {

    control: (base, state) => ({
        ...base,
        minHeight: "36px",
        height: "36px",
        borderRadius: "6px",
        borderColor: state.isFocused
            ? "#3b82f6"
            : "#e5e7eb",
        boxShadow: state.isFocused
            ? "0 0 0 2px rgba(59,130,246,0.1)"
            : "none",
        fontSize: "12px",
        "&:hover": {
            borderColor: "#93c5fd"
        }
    }),

    valueContainer: (base) => ({
        ...base,
        padding: "0 10px"
    }),

    placeholder: (base) => ({
        ...base,
        color: "#9ca3af"
    }),

    singleValue: (base) => ({
        ...base,
        color: "#374151"
    }),

    option: (base, state) => ({
        ...base,
        fontSize: "12px",
        backgroundColor: state.isSelected
            ? "#2563eb"
            : state.isFocused
                ? "#eff6ff"
                : "#fff",
        color: state.isSelected
            ? "#fff"
            : "#374151",
        cursor: "pointer"
    }),

    menu: (base) => ({
        ...base,
        zIndex: 9999
    })
};


export default AddTask;