import React from "react"

const HisLeads = ({ lead = [] }) => {

    const myLeads = [...lead]
        .sort(
            (a, b) =>
                new Date(b.createdAt) -
                new Date(a.createdAt)
        )
        .slice(0, 4)


    // =====================================================
    // STATUS STYLE
    // =====================================================

    const statusStyle = {

        New: `
            bg-green-50
            text-green-600
            border
            border-green-100

            dark:bg-green-500/10
            dark:text-green-400
            dark:border-green-500/20
        `,

        Contacted: `
            bg-blue-50
            text-blue-600
            border
            border-blue-100

            dark:bg-blue-500/10
            dark:text-blue-400
            dark:border-blue-500/20
        `,

        Connected: `
            bg-blue-50
            text-blue-600
            border
            border-blue-100

            dark:bg-blue-500/10
            dark:text-blue-400
            dark:border-blue-500/20
        `,

        "Site Visit": `
            bg-purple-50
            text-purple-600
            border
            border-purple-100

            dark:bg-purple-500/10
            dark:text-purple-400
            dark:border-purple-500/20
        `,

        "Site-Visit": `
            bg-purple-50
            text-purple-600
            border
            border-purple-100

            dark:bg-purple-500/10
            dark:text-purple-400
            dark:border-purple-500/20
        `,

        Qualified: `
            bg-orange-50
            text-orange-600
            border
            border-orange-100

            dark:bg-orange-500/10
            dark:text-orange-400
            dark:border-orange-500/20
        `,

        Negotiation: `
            bg-yellow-50
            text-yellow-600
            border
            border-yellow-100

            dark:bg-yellow-500/10
            dark:text-yellow-400
            dark:border-yellow-500/20
        `,

        Converted: `
            bg-emerald-50
            text-emerald-600
            border
            border-emerald-100

            dark:bg-emerald-500/10
            dark:text-emerald-400
            dark:border-emerald-500/20
        `,

        Lost: `
            bg-red-50
            text-red-600
            border
            border-red-100

            dark:bg-red-500/10
            dark:text-red-400
            dark:border-red-500/20
        `
    }


    // =====================================================
    // DATE FORMAT
    // =====================================================

    const formatDate = (date) => {

        if (!date) return "-"

        return new Date(date).toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        )
    }


    return (

        <div className="
            w-full
            h-full

            bg-white
            dark:bg-[#1F1F30]

            rounded-lg

            border
            border-gray-200
            dark:border-[#353548]

            shadow-sm

            overflow-hidden
        ">


            {/* =================================================
                HEADER
            ================================================= */}

            <div className="
                flex
                items-center
                justify-between

                px-3
                py-2
            ">

                <div>

                    <h3 className="
                        text-[11px]
                        font-semibold

                        text-gray-900
                        dark:text-white
                    ">
                        My Leads
                    </h3>


                    <p className="
                        text-[9px]

                        text-gray-400
                        dark:text-gray-500

                        mt-0.5
                    ">
                        Recently assigned leads
                    </p>

                </div>


                {/* VIEW ALL */}

                <button
                    type="button"
                    className="
                        text-[9px]
                        font-medium

                        text-blue-600
                        dark:text-blue-400

                        hover:text-blue-700
                        dark:hover:text-blue-300

                        transition
                    "
                >
                    View All
                </button>

            </div>


            {/* =================================================
                TABLE HEADER
            ================================================= */}

            <div className="
                grid

                grid-cols-[1.2fr_1.4fr_1fr_1.2fr]

                items-center

                bg-gray-50
                dark:bg-[#2A2A40]

                border-y
                border-gray-100
                dark:border-[#353548]

                px-3
                py-1.5
            ">


                {/* LEAD */}

                <p className="
                    text-[8px]
                    font-semibold

                    text-gray-400
                    dark:text-gray-500

                    uppercase
                ">
                    Lead
                </p>


                {/* PROPERTY */}

                <p className="
                    text-[8px]
                    font-semibold

                    text-gray-400
                    dark:text-gray-500

                    uppercase
                ">
                    Property
                </p>


                {/* STATUS */}

                <p className="
                    text-[8px]
                    font-semibold

                    text-gray-400
                    dark:text-gray-500

                    uppercase
                ">
                    Status
                </p>


                {/* FOLLOW UP */}

                <p className="
                    text-[8px]
                    font-semibold

                    text-gray-400
                    dark:text-gray-500

                    uppercase
                ">
                    Follow-up
                </p>

            </div>


            {/* =================================================
                LEADS
            ================================================= */}

            <div>

                {myLeads.length === 0 ? (

                    <div className="
                        flex
                        items-center
                        justify-center

                        py-7
                    ">

                        <p className="
                            text-[10px]

                            text-gray-400
                            dark:text-gray-500
                        ">
                            No Leads Found
                        </p>

                    </div>

                ) : (

                    myLeads.map((item, index) => (

                        <div
                            key={
                                item._id ||
                                item.id ||
                                index
                            }

                            className="
                                grid

                                grid-cols-[1.2fr_1.4fr_1fr_1.2fr]

                                items-center

                                px-3
                                py-1.5

                                border-b
                                border-gray-100
                                dark:border-[#353548]

                                last:border-b-0

                                hover:bg-gray-50
                                dark:hover:bg-[#2A2A40]

                                transition
                            "
                        >


                            {/* =================================================
                                LEAD NAME
                            ================================================= */}

                            <div className="
                                min-w-0
                            ">

                                <p className="
                                    text-[9px]
                                    font-medium

                                    text-gray-800
                                    dark:text-gray-200

                                    truncate
                                ">
                                    {item.name || "-"}
                                </p>

                            </div>


                            {/* =================================================
                                PROPERTY
                            ================================================= */}

                            <div className="
                                min-w-0
                            ">

                                <p className="
                                    text-[9px]

                                    text-gray-500
                                    dark:text-gray-400

                                    truncate
                                ">
                                    {item.interested || "-"}
                                </p>

                            </div>


                            {/* =================================================
                                STATUS
                            ================================================= */}

                            <div>

                                <span
                                    className={`
                                        inline-flex
                                        items-center

                                        rounded

                                        px-1.5
                                        py-0.5

                                        text-[7px]
                                        font-medium

                                        whitespace-nowrap

                                        ${
                                            statusStyle[
                                                item.status
                                            ] ||
                                            `
                                                bg-gray-50
                                                text-gray-500
                                                border
                                                border-gray-100

                                                dark:bg-gray-500/10
                                                dark:text-gray-400
                                                dark:border-gray-500/20
                                            `
                                        }
                                    `}
                                >
                                    {item.status || "-"}
                                </span>

                            </div>


                            {/* =================================================
                                FOLLOW UP
                            ================================================= */}

                            <div>

                                <p className="
                                    text-[8px]

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    {formatDate(
                                        item.nextFollowUp ||
                                        item.followUpDate ||
                                        item.createdAt
                                    )}
                                </p>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    )
}

export default HisLeads