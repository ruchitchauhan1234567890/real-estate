import React from "react"

const MonthlyConversionRate = ({ data = [] }) => {

    return (
        <div className="
            w-full
            h-full
            bg-white
            dark:bg-[#1F1F30]

            border
            border-gray-200
            dark:border-[#353548]

            rounded-lg

            p-3

            flex
            flex-col
        ">

            {/* Header */}

            <div className="mb-2">

                <h2 className="
                    text-[11px]
                    font-semibold

                    text-gray-900
                    dark:text-white
                ">
                    Monthly Conversion Rate
                </h2>

                <p className="
                    text-[9px]

                    text-gray-400
                    dark:text-gray-500

                    mt-0.5
                ">
                    Monthly lead conversion performance
                </p>

            </div>


            {/* Content */}

            <div className="
                flex-1
                min-h-[140px]

                flex
                items-center
                justify-center
            >

                {data.length === 0 ? (

                    <p className="
                        text-[10px]

                        text-gray-400
                        dark:text-gray-500
                    ">
                        No Conversion Data
                    </p>

                ) : (

                    <p className="
                        text-[10px]

                        text-gray-400
                        dark:text-gray-500
                    ">
                        Conversion data available
                    </p>

                )}

            </div>

        </div>
    )
}

export default MonthlyConversionRate