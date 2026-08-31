return (
    <div className="mt-3 w-full">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            {card.map((item, index) => {

                const Icon = item.icon

                return (
                    <div
                        key={index}
                        className="
                            w-full
                            h-[50px]
                            bg-white
                            border
                            border-gray-200
                            rounded-xl
                            px-4
                            py-3
                            shadow-sm
                            hover:shadow-md
                            transition-all
                        "
                    >

                        <div className="
                            flex
                            items-center
                            justify-between
                            h-full
                        ">

                            {/* Content */}
                            <div>

                                <p className="
                                    text-xs
                                    font-medium
                                    text-gray-500
                                ">
                                    {item.title}
                                </p>

                                <p className="
                                    mt-1
                                    text-2xl
                                    leading-none
                                    font-bold
                                    text-gray-900
                                ">
                                    {item.value}
                                </p>

                            </div>


                            {/* Icon */}
                            <div
                                className={`
                                    w-10
                                    h-10
                                    rounded-lg
                                    ${item.bg}
                                    flex
                                    items-center
                                    justify-center
                                `}
                            >

                                <Icon
                                    className={`
                                        w-5
                                        h-5
                                        ${item.iconColor}
                                    `}
                                />

                            </div>

                        </div>

                    </div>
                )
            })}

        </div>

    </div>
)