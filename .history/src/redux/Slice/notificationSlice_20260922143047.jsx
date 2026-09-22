import { createSlice } from "@reduxjs/toolkit"

const savedNotifications =
    JSON.parse(localStorage.getItem("notifications")) || []

const notificationSlice = createSlice({

    name: "notifications",

    initialState: {
        notifications: savedNotifications
    },

    reducers: {

        // ==========================================
        // ADD NOTIFICATION
        // ==========================================

        addNotification: (state, action) => {

            state.notifications.unshift(
                action.payload
            )

            localStorage.setItem(
                "notifications",
                JSON.stringify(state.notifications)
            )


        },


        // ==========================================
        // MARK ONE AS READ
        // ==========================================

        markAsRead: (state, action) => {

            const notification =
                state.notifications.find(
                    (item) =>
                        item.id === action.payload
                )

            if (notification) {

                notification.isRead = true

            }

            localStorage.setItem(
                "notifications",
                JSON.stringify(state.notifications)
            )

        },


        // ==========================================
        // MARK ALL AS READ
        // ==========================================

        markAllAsRead: (state) => {

            state.notifications.forEach(
                (notification) => {

                    notification.isRead = true

                }
            )

            localStorage.setItem(
                "notifications",
                JSON.stringify(state.notifications)
            )

        }

    }

})


export const {
    addNotification,
    markAsRead,
    markAllAsRead
} = notificationSlice.actions


export default notificationSlice.reducer