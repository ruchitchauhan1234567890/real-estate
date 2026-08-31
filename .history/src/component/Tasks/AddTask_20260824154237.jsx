import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TaskContext } from "../../ContextAPI/TaskContext";
import Select from "react-select";

const AddTask = () => {

    const {
        taskData,
        setTaskData,
        open,
        setOpen,
        editedTask,
        setEditedTask
    } = useContext(TaskContext);

    const [selectEmployee, setSelectEmployee] = useState("");

    const [inputData, setInputData] = useState({
        relatedTask: "lead",
        title: "",
        description: "",
        lead: "",
        assign: "",
        priority: "Low",
        taskStatus: "Pending",
        createdDate: "",
        completedDate: ""
    });

    const leads = JSON.parse(localStorage.getItem("leads")) || [];
    const emp = JSON.parse(localStorage.getItem("employee")) || [];

    useEffect(() => {
        if (editedTask) {
            setInputData(editedTask);
        }
    }, [editedTask]);

    useEffect(() => {
        if (!inputData.lead) return;

        const leadData = leads.find(
            (lead) => lead.name === inputData.lead
        );

        const employee = emp.find(
            (emp) => emp.name === leadData?.assignedTo
        );

        setSelectEmployee(employee);

        setInputData((prev) => ({
            ...prev,
            assign: employee?.name || alert("plz assign Lead")
        }));
    }, [inputData.lead]);

    const options = leads.map((lead) => ({
        value: lead.name,
        label: lead.name
    }));

    const priority = [
        { value: "Low", label: "Low" },
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" }
    ];

    const status = [
        { value: "Pending", label: "Pending" },
        { value: "Completed", label: "Completed" },
        { value: "Processing", label: "Processing" }
    ];

    const employee = emp.map((emp) => ({
        value: emp.name,
        label: emp.name
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const task =
            JSON.parse(localStorage.getItem("tasks")) || [];

        if (!editedTask) {

            const newTask = {
                ...inputData,
                id: crypto.randomUUID()
            };

            task.push(newTask);

            localStorage.setItem(
                "tasks",
                JSON.stringify(task)
            );

            setTaskData((prev) => [
                ...prev,
                newTask
            ]);

            setInputData({
                relatedTask: "lead",
                title: "",
                description: "",
                lead: "",
                assign: "",
                priority: "Low",
                taskStatus: "Pending",
                createdDate: "",
                completedDate: ""
            });

            setSelectEmployee("");

        } else {

            const updateTask = task.map((task) => {

                if (task.id === editedTask.id) {
                    return {
                        ...inputData,
                        id: editedTask.id
                    };
                }

                return task;
            });

            localStorage.setItem(
                "tasks",
                JSON.stringify(updateTask)
            );

            setTaskData(updateTask);

            setEditedTask(null);
            setSelectEmployee(null);
        }

        setOpen(!open);
    };

    if (!open) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="
                    fixed
                    inset-0
                    bg-black/30
                    z-40
                "
                onClick={() => setOpen(false)}
            />

            {/* Right Sidebar */}
            <div
                className="
                    fixed
                    top-0
                    right-0
                    z-50
                    h-full
                    w-[380px]
                    bg-white
                    shadow-2xl
                    border-l
                    border-gray-200
                    flex
                    flex-col
                "
            >

                {/* Header */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-5
                        py-4
                        border-b
                        border-gray-200
                    "
                >

                    <div>

                        <h2
                            className="
                                text-[15px]
                                font-semibold
                                text-gray-900
                            "
                        >
                            {editedTask
                                ? "Update Task"
                                : "Add Task"}
                        </h2>

                        <p
                            className="
                                text-[10px]
                                text-gray-500
                                mt-0.5
                            "
                        >
                            {editedTask
                                ? "Update task information"
                                : "Create a new task"}
                        </p>

                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            setOpen(!open);
                            setSelectEmployee(null);
                            setEditedTask(null);

                            setInputData({
                                relatedTask: "lead",
                                title: "",
                                description: "",
                                lead: "",
                                assign: "",
                                priority: "Low",
                                taskStatus: "Pending",
                                createdDate: "",
                                completedDate: ""
                            });
                        }}
                        className="
                            w-7
                            h-7
                            flex
                            items-center
                            justify-center
                            rounded-md
                            text-gray-400
                            hover:bg-gray-100
                            hover:text-gray-700
                        "
                    >
                        <IoClose size={17} />
                    </button>

                </div>


                {/* Form Body */}
                <form
                    onSubmit={handleSubmit}
                    className="
                        flex-1
                        overflow-y-auto
                        px-5
                        py-4
                    "
                >

                    {/* Task Type */}
                    <div className="mb-5">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                mb-3
                            "
                        >
                            Task Information
                        </h3>

                        <div className="space-y-3">

                            {/* Related Task */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        mb-2
                                    "
                                >
                                    Related Task
                                </label>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-5
                                        text-[11px]
                                        text-gray-700
                                    "
                                >

                                    <label
                                        className="
                                            flex
                                            items-center
                                            gap-1.5
                                            cursor-pointer
                                        "
                                    >
                                        <input
                                            type="radio"
                                            checked={
                                                inputData.relatedTask === "lead"
                                            }
                                            onChange={handleChange}
                                            name="relatedTask"
                                            value="lead"
                                            className="accent-blue-600"
                                        />

                                        Lead
                                    </label>

                                    <label
                                        className="
                                            flex
                                            items-center
                                            gap-1.5
                                            cursor-pointer
                                        "
                                    >
                                        <input
                                            type="radio"
                                            checked={
                                                inputData.relatedTask === "general"
                                            }
                                            onChange={handleChange}
                                            name="relatedTask"
                                            value="general"
                                            className="accent-blue-600"
                                        />

                                        General
                                    </label>

                                </div>

                            </div>


                            {/* Title */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        mb-1
                                    "
                                >
                                    Task Title
                                </label>

                                <input
                                    name="title"
                                    value={inputData.title}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter task title"
                                    className="
                                        w-full
                                        h-8
                                        px-2.5
                                        rounded-md
                                        border
                                        border-gray-200
                                        text-[11px]
                                        text-gray-800
                                        outline-none
                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-100
                                    "
                                />

                            </div>


                            {/* Description */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        mb-1
                                    "
                                >
                                    Description
                                </label>

                                <textarea
                                    name="description"
                                    value={inputData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Enter task description"
                                    className="
                                        w-full
                                        px-2.5
                                        py-2
                                        rounded-md
                                        border
                                        border-gray-200
                                        text-[11px]
                                        text-gray-800
                                        resize-none
                                        outline-none
                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-100
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* Assignment */}
                    <div className="mb-5">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                mb-3
                            "
                        >
                            Assignment
                        </h3>

                        <div className="space-y-3">

                            {/* Lead */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        mb-1
                                    "
                                >
                                    Lead
                                </label>

                                {inputData.relatedTask === "general" ? (

                                    <div
                                        className="
                                            w-full
                                            h-8
                                            rounded-md
                                            border
                                            border-gray-200
                                            bg-gray-50
                                        "
                                    />

                                ) : (

                                    <Select
                                        options={options}
                                        name="lead"
                                        placeholder="Select Lead"
                                        value={
                                            options.find(
                                                (option) =>
                                                    option.value ===
                                                    inputData.lead
                                            ) || null
                                        }
                                        onChange={(selectedOption) => {

                                            setInputData((prev) => ({
                                                ...prev,
                                                lead:
                                                    selectedOption.value
                                            }));

                                        }}
                                        className="text-[11px]"
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                minHeight: "32px",
                                                height: "32px",
                                                fontSize: "11px",
                                                borderColor: "#e5e7eb",
                                                boxShadow: "none"
                                            }),
                                            valueContainer: (base) => ({
                                                ...base,
                                                height: "32px",
                                                padding: "0 8px"
                                            }),
                                            indicatorsContainer: (base) => ({
                                                ...base,
                                                height: "32px"
                                            }),
                                            option: (base) => ({
                                                ...base,
                                                fontSize: "11px"
                                            })
                                        }}
                                    />

                                )}

                            </div>


                            {/* Assign */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        mb-1
                                    "
                                >
                                    Assign To
                                </label>

                                {inputData.relatedTask === "general" ? (

                                    <Select
                                        options={employee}
                                        placeholder="Select Employee"
                                        value={
                                            employee.find(
                                                (option) =>
                                                    option.value ===
                                                    inputData.assign
                                            ) || null
                                        }
                                        onChange={(select) => {

                                            setInputData((prev) => ({
                                                ...prev,
                                                assign: select.value
                                            }));

                                        }}
                                        className="text-[11px]"
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                minHeight: "32px",
                                                height: "32px",
                                                fontSize: "11px",
                                                borderColor: "#e5e7eb",
                                                boxShadow: "none"
                                            }),
                                            valueContainer: (base) => ({
                                                ...base,
                                                height: "32px",
                                                padding: "0 8px"
                                            }),
                                            indicatorsContainer: (base) => ({
                                                ...base,
                                                height: "32px"
                                            }),
                                            option: (base) => ({
                                                ...base,
                                                fontSize: "11px"
                                            })
                                        }}
                                    />

                                ) : (

                                    <div
                                        className="
                                            w-full
                                            h-8
                                            flex
                                            items-center
                                            px-2.5
                                            rounded-md
                                            border
                                            border-gray-200
                                            bg-gray-50
                                            text-[11px]
                                            text-gray-700
                                        "
                                    >
                                        {selectEmployee
                                            ? selectEmployee.name
                                            : inputData.assign || "Not Assigned"}
                                    </div>

                                )}

                            </div>

                        </div>

                    </div>


                    {/* Task Details */}
                    <div className="mb-5">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                mb-3
                            "
                        >
                            Task Details
                        </h3>

                        <div className="grid grid-cols-2 gap-3">

                            {/* Priority */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        mb-1
                                    "
                                >
                                    Priority
                                </label>

                                <Select
                                    options={priority}
                                    name="priority"
                                    value={
                                        priority.find(
                                            (option) =>
                                                option.value ===
                                                inputData.priority
                                        ) || null
                                    }
                                    onChange={(selectedOption) => {

                                        setInputData((prev) => ({
                                            ...prev,
                                            priority:
                                                selectedOption.value
                                        }));

                                    }}
                                    className="text-[11px]"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            minHeight: "32px",
                                            height: "32px",
                                            fontSize: "11px",
                                            borderColor: "#e5e7eb",
                                            boxShadow: "none"
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            height: "32px",
                                            padding: "0 8px"
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: "32px"
                                        }),
                                        option: (base) => ({
                                            ...base,
                                            fontSize: "11px"
                                        })
                                    }}
                                />

                            </div>


                            {/* Status */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        mb-1
                                    "
                                >
                                    Task Status
                                </label>

                                <Select
                                    options={status}
                                    name="taskStatus"
                                    value={
                                        status.find(
                                            (option) =>
                                                option.value ===
                                                inputData.taskStatus
                                        ) || null
                                    }
                                    onChange={(selectValue) => {

                                        setInputData((prev) => ({
                                            ...prev,
                                            taskStatus:
                                                selectValue.value
                                        }));

                                    }}
                                    className="text-[11px]"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            minHeight: "32px",
                                            height: "32px",
                                            fontSize: "11px",
                                            borderColor: "#e5e7eb",
                                            boxShadow: "none"
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            height: "32px",
                                            padding: "0 8px"
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: "32px"
                                        }),
                                        option: (base) => ({
                                            ...base,
                                            fontSize: "11px"
                                        })
                                    }}
                                />

                            </div>

                        </div>

                    </div>


                    {/* Date */}
                    <div className="mb-5">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                mb-3
                            "
                        >
                            Schedule
                        </h3>

                        <div>

                            <label
                                className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1
                                "
                            >
                                Created Date
                            </label>

                            <input
                                value={inputData.createdDate}
                                onChange={handleChange}
                                name="createdDate"
                                type="date"
                                className="
                                    w-full
                                    h-8
                                    px-2.5
                                    rounded-md
                                    border
                                    border-gray-200
                                    text-[11px]
                                    text-gray-700
                                    outline-none
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-100
                                "
                            />

                        </div>

                    </div>

                </form>


                {/* Footer */}
                <div
                    className="
                        border-t
                        border-gray-200
                        px-5
                        py-3
                        flex
                        justify-end
                        gap-2
                        bg-white
                    "
                >

                    <button
                        type="button"
                        onClick={() => {

                            setOpen(!open);
                            setEditedTask(null);
                            setSelectEmployee(null);

                            setInputData({
                                title: "",
                                description: "",
                                lead: "",
                                assign: "",
                                priority: "Low",
                                taskStatus: "Pending",
                                createdDate: "",
                                completedDate: ""
                            });

                        }}
                        className="
                            px-3
                            py-1.5
                            rounded-md
                            border
                            border-gray-200
                            text-[10px]
                            font-medium
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        form=""
                        onClick={handleSubmit}
                        className="
                            px-4
                            py-1.5
                            rounded-md
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            text-[10px]
                            font-medium
                            shadow-sm
                        "
                    >
                        {editedTask
                            ? "Update Task"
                            : "Add Task"}
                    </button>

                </div>

            </div>
        </>
    );
};

export default AddTask;