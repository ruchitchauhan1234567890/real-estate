if (!open) return null

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

        <div className="
            w-full
            max-w-3xl
            bg-white
            rounded-xl
            shadow-2xl
            overflow-hidden
        ">

            {/* Header */}
            <div className="
                flex
                items-center
                justify-between
                px-5
                py-3
                border-b
                border-gray-100
            ">
                <div>
                    <h2 className="text-base font-semibold text-gray-900">
                        {editedEmp ? "Update Employee" : "Add Employee"}
                    </h2>

                    <p className="text-[10px] text-gray-500 mt-0.5">
                        {editedEmp
                            ? "Update employee information"
                            : "Add a new employee to your organization"}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        setOpen(false)
                        setEditedEmp(null)
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
                        transition
                    "
                >
                    <IoClose size={18} />
                </button>
            </div>


            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="px-5 py-4"
            >

                <div className="
                    grid
                    grid-cols-3
                    gap-x-4
                    gap-y-3
                ">

                    {/* Name */}
                    <div>
                        <label className="text-[10px] font-medium text-gray-600">
                            Employee Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={inputData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            className="
                                w-full
                                mt-1
                                h-8
                                px-2.5
                                text-xs
                                border
                                border-gray-200
                                rounded-md
                                outline-none
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-100
                            "
                        />
                    </div>


                    {/* Email */}
                    <div>
                        <label className="text-[10px] font-medium text-gray-600">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={inputData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="
                                w-full
                                mt-1
                                h-8
                                px-2.5
                                text-xs
                                border
                                border-gray-200
                                rounded-md
                                outline-none
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-100
                            "
                        />
                    </div>


                    {/* Password */}
                    <div>
                        <label className="text-[10px] font-medium text-gray-600">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={inputData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="
                                w-full
                                mt-1
                                h-8
                                px-2.5
                                text-xs
                                border
                                border-gray-200
                                rounded-md
                                outline-none
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-100
                            "
                        />
                    </div>


                    {/* Phone */}
                    <div>
                        <label className="text-[10px] font-medium text-gray-600">
                            Phone
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={inputData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone"
                            className="
                                w-full
                                mt-1
                                h-8
                                px-2.5
                                text-xs
                                border
                                border-gray-200
                                rounded-md
                                outline-none
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-100
                            "
                        />
                    </div>


                    {/* Department */}
                    <div>
                        <label className="text-[10px] font-medium text-gray-600">
                            Department
                        </label>

                        <Select
                            options={departmentOption}
                            value={departmentOption.find(
                                option => option.value === inputData.department
                            )}
                            onChange={(option) =>
                                setInputData(prev => ({
                                    ...prev,
                                    department: option.value
                                }))
                            }
                            className="mt-1 text-xs"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minHeight: "32px",
                                    height: "32px",
                                    borderRadius: "6px",
                                    borderColor: "#e5e7eb",
                                    boxShadow: "none",
                                    fontSize: "11px"
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


                    {/* Role */}
                    <div>
                        <label className="text-[10px] font-medium text-gray-600">
                            Role
                        </label>

                        <Select
                            options={roleOption}
                            value={roleOption.find(
                                option => option.value === inputData.role
                            )}
                            onChange={(option) =>
                                setInputData(prev => ({
                                    ...prev,
                                    role: option.value
                                }))
                            }
                            className="mt-1"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minHeight: "32px",
                                    height: "32px",
                                    borderRadius: "6px",
                                    borderColor: "#e5e7eb",
                                    boxShadow: "none",
                                    fontSize: "11px"
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
                        <label className="text-[10px] font-medium text-gray-600">
                            Status
                        </label>

                        <Select
                            options={statusOption}
                            value={statusOption.find(
                                option => option.value === inputData.status
                            )}
                            onChange={(option) =>
                                setInputData(prev => ({
                                    ...prev,
                                    status: option.value
                                }))
                            }
                            className="mt-1"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minHeight: "32px",
                                    height: "32px",
                                    borderRadius: "6px",
                                    borderColor: "#e5e7eb",
                                    boxShadow: "none",
                                    fontSize: "11px"
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


                    {/* Join Date */}
                    <div>
                        <label className="text-[10px] font-medium text-gray-600">
                            Join Date
                        </label>

                        <input
                            type="date"
                            name="date"
                            value={inputData.date}
                            onChange={handleChange}
                            className="
                                w-full
                                mt-1
                                h-8
                                px-2.5
                                text-xs
                                border
                                border-gray-200
                                rounded-md
                                outline-none
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-100
                            "
                        />
                    </div>


                    {/* Photo */}
                    <div>
                        <label className="text-[10px] font-medium text-gray-600">
                            Profile Photo
                        </label>

                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleChange}
                            className="
                                w-full
                                mt-1
                                h-8
                                px-2
                                py-1
                                text-[10px]
                                border
                                border-gray-200
                                rounded-md
                                file:mr-2
                                file:border-0
                                file:bg-gray-100
                                file:px-2
                                file:py-1
                                file:text-[10px]
                                file:rounded
                            "
                        />
                    </div>


                    {/* Admin */}
                    <div className="flex items-center mt-5">
                        <input
                            type="checkbox"
                            name="isAdmin"
                            checked={inputData.isAdmin}
                            onChange={handleChange}
                            className="w-3.5 h-3.5 accent-blue-600"
                        />

                        <label className="ml-2 text-[10px] font-medium text-gray-600">
                            Administrator
                        </label>
                    </div>


                    {/* Address */}
                    <div className="col-span-3">
                        <label className="text-[10px] font-medium text-gray-600">
                            Address
                        </label>

                        <textarea
                            rows="2"
                            name="address"
                            value={inputData.address}
                            onChange={handleChange}
                            placeholder="Enter employee address"
                            className="
                                w-full
                                mt-1
                                px-2.5
                                py-2
                                text-xs
                                border
                                border-gray-200
                                rounded-md
                                outline-none
                                resize-none
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-100
                            "
                        />
                    </div>

                </div>


                {/* Footer */}
                <div className="
                    flex
                    justify-end
                    gap-2
                    mt-4
                    pt-3
                    border-t
                    border-gray-100
                ">

                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false)
                            setEditedEmp(null)
                        }}
                        className="
                            px-3
                            py-1.5
                            text-[10px]
                            font-medium
                            text-gray-600
                            border
                            border-gray-200
                            rounded-md
                            hover:bg-gray-50
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="
                            px-4
                            py-1.5
                            text-[10px]
                            font-medium
                            text-white
                            bg-blue-600
                            rounded-md
                            hover:bg-blue-700
                            shadow-sm
                        "
                    >
                        {editedEmp ? "Update Employee" : "Add Employee"}
                    </button>

                </div>

            </form>

        </div>
    </div>
)