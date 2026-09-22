import { useSelector } from "react-redux"

const NotificationBell = () => {

    const notifications = useSelector(
        (state) => state.notifications.notifications
    )

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser"))

    const userNotifications = notifications.filter(
        (notification) =>
            notification.userId === loggedUser?.id
    )

    const unreadCount = userNotifications.filter(
        (notification) => !notification.isRead
    ).length

    return (
        <div className="relative">

            {/* Bell */}
            <button className="relative text-2xl">
                🔔

                {unreadCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center">
                        {unreadCount}
                    </span>
                )}
            </button>

        </div>
    )
}

export default NotificationBell