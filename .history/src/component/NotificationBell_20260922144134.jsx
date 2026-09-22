import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FiBell } from "react-icons/fi"
import { markAllAsRead, markAsRead } from "../redux/Slice/notificationSlice"


const NotificationBell = () => {

  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const notifications = useSelector(
    (state) => state.notifications.notifications
  )

  const loggedUser =
    JSON.parse(localStorage.getItem("loggedUser")) || {}

  // Sirf logged-in employee ki notifications
  const userNotifications = notifications.filter(
    (notification) =>
      notification.userId === loggedUser?.id
  )

  const unreadCount = userNotifications.filter(
    (notification) => !notification.isRead
  ).length

  const handleNotificationClick = (notification) => {

    if (!notification.isRead) {
      dispatch(markAsRead(notification.id))
    }

  }

  return (
    <div className="relative">

      {/* ================= BELL ================= */}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          relative
          w-7
          h-7
          sm:w-8
          sm:h-8
          rounded-lg
          flex
          items-center
          justify-center
          bg-gray-100
          dark:bg-[#2A2A40]
          text-gray-600
          dark:text-gray-300
          hover:bg-gray-200
          dark:hover:bg-[#353548]
          transition
        "
      >

        <FiBell className="text-sm sm:text-base" />

        {/* Unread count */}

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              min-w-4
              h-4
              px-1
              rounded-full
              bg-red-500
              text-white
              text-[9px]
              flex
              items-center
              justify-center
              font-semibold
            "
          >
            {unreadCount}
          </span>
        )}

      </button>


      {/* ================= DROPDOWN ================= */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-10
            w-[300px]
            sm:w-[340px]
            bg-white
            dark:bg-[#1F1F30]
            border
            border-gray-200
            dark:border-[#353548]
            rounded-xl
            shadow-lg
            z-50
            overflow-hidden
          "
        >

          {/* Header */}

          <div
            className="
              px-4
              py-3
              border-b
              border-gray-200
              dark:border-[#353548]
              flex
              items-center
              justify-between
            "
          >

            <h3
              className="
                text-sm
                font-semibold
                text-gray-800
                dark:text-white
              "
            >
              Notifications
            </h3>

            {unreadCount > 0 && (
              <button
                type="button"
                onClick={() => dispatch(markAllAsRead())}
                className="
                  text-[11px]
                  text-blue-600
                  dark:text-blue-400
                  hover:underline
                "
              >
                Mark all as read
              </button>
            )}

          </div>


          {/* Notification List */}

          <div className="max-h-[350px] overflow-y-auto">

            {userNotifications.length === 0 ? (

              <div className="px-4 py-8 text-center">

                <FiBell
                  className="
                    mx-auto
                    text-2xl
                    text-gray-300
                    dark:text-gray-600
                    mb-2
                  "
                />

                <p
                  className="
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  No notifications
                </p>

              </div>

            ) : (

              userNotifications.map((notification) => (

                <button
                  key={notification.id}
                  type="button"
                  onClick={() =>
                    handleNotificationClick(notification)
                  }
                  className={`
                    w-full
                    text-left
                    px-4
                    py-3
                    border-b
                    border-gray-100
                    dark:border-[#303044]
                    hover:bg-gray-50
                    dark:hover:bg-[#2A2A40]
                    transition
                    ${
                      !notification.isRead
                        ? "bg-blue-50 dark:bg-[#25253A]"
                        : ""
                    }
                  `}
                >

                  <div className="flex gap-3">

                    {/* Unread dot */}

                    <div className="pt-1">

                      {!notification.isRead && (
                        <span
                          className="
                            block
                            w-2
                            h-2
                            rounded-full
                            bg-blue-500
                          "
                        />
                      )}

                    </div>


                    {/* Content */}

                    <div className="min-w-0">

                      <p
                        className="
                          text-xs
                          font-semibold
                          text-gray-800
                          dark:text-white
                        "
                      >
                        {notification.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        {notification.message}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          text-gray-400
                          dark:text-gray-500
                        "
                      >
                        {new Date(
                          notification.createdAt
                        ).toLocaleString()}
                      </p>

                    </div>

                  </div>

                </button>

              ))

            )}

          </div>

        </div>
      )}

    </div>
  )
}

export default NotificationBell