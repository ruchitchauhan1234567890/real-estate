import React from "react"
import { IoLogOutOutline, IoClose } from "react-icons/io5"

const LogoutModel = ({
    open,
    setOpen,
    onConfirm
}) => {

    if (!open) return null

    return (
        <div
            className="
                fixed
                inset-0
                z-[999]
                flex
                items-center
                justify-center

                bg-black/40
                dark:bg-black/60

                backdrop-blur-[2px]

                px-4
            "
            onClick={() => setOpen(false)}
        >

            {/* Modal */}

            <div
                className="
                    w-full
                    max-w-[360px]

                    bg-white
                    dark:bg-[#1f1f2b]

                    rounded-xl

                    shadow-2xl

                    border
                    border-gray-200
                    dark:border-[#303044]

                    overflow-hidden

                    transition-colors
                "
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between

                        px-4
                        py-3

                        border-b
                        border-gray-100
                        dark:border-[#303044]
                    "
                >

                    <div className="flex items-center gap-2">

                        <div
                            className="
                                w-8
                                h-8

                                rounded-lg

                                bg-red-50
                                dark:bg-red-500/10

                                text-red-500
                                dark:text-red-400

                                flex
                                items-center
                                justify-center
                            "
                        >
                            <IoLogOutOutline
                                className="text-lg"
                            />
                        </div>

                        <h2
                            className="
                                text-sm
                                font-semibold

                                text-gray-800
                                dark:text-white
                            "
                        >
                            Logout
                        </h2>

                    </div>


                    {/* Close */}

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="
                            w-7
                            h-7

                            rounded-md

                            flex
                            items-center
                            justify-center

                            text-gray-400
                            dark:text-gray-500

                            hover:bg-gray-100
                            dark:hover:bg-[#303044]

                            hover:text-gray-600
                            dark:hover:text-gray-300

                            transition
                        "
                    >
                        <IoClose className="text-lg" />
                    </button>

                </div>


                {/* Content */}

                <div className="px-4 py-5">

                    <p
                        className="
                            text-sm
                            font-medium

                            text-gray-700
                            dark:text-gray-200
                        "
                    >
                        Are you sure you want to logout?
                    </p>

                    <p
                        className="
                            text-[11px]

                            text-gray-400
                            dark:text-gray-500

                            mt-1
                        "
                    >
                        You will be redirected to the login page.
                    </p>

                </div>


                {/* Actions */}

                <div
                    className="
                        flex
                        items-center
                        justify-end
                        gap-2

                        px-4
                        py-3

                        bg-gray-50
                        dark:bg-[#181824]

                        border-t
                        border-gray-100
                        dark:border-[#303044]
                    "
                >

                    {/* Cancel */}

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="
                            px-3
                            py-1.5

                            rounded-md

                            border
                            border-gray-200
                            dark:border-[#3a3a4d]

                            bg-white
                            dark:bg-[#1f1f2b]

                            text-[11px]
                            font-medium

                            text-gray-600
                            dark:text-gray-300

                            hover:bg-gray-100
                            dark:hover:bg-[#252536]

                            transition
                        "
                    >
                        Cancel
                    </button>


                    {/* Logout */}

                    <button
                        type="button"
                        onClick={onConfirm}
                        className="
                            flex
                            items-center
                            gap-1.5

                            px-3
                            py-1.5

                            rounded-md

                            bg-red-500
                            hover:bg-red-600

                            dark:bg-red-500
                            dark:hover:bg-red-600

                            text-white

                            text-[11px]
                            font-medium

                            transition
                        "
                    >
                        <IoLogOutOutline className="text-sm" />

                        Logout
                    </button>

                </div>

            </div>

        </div>
    )
}

export default LogoutModel