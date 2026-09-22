import { createSlice } from "@reduxjs/toolkit"


const notificationSlice = createSlice({

    name: "notifications",

    initialState: {
        notifications: []
    },

    reducers: {

        // ==========================================
        // ADD NOTIFICATION
        // ==========================================

        addNotification: (state, action) => {

            state.notifications.unshift(
                action.payload
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

        }

    }

})


export const {
    addNotification,
    markAsRead,
    markAllAsRead
} = notificationSlice.actions


export default notificationSlice.reducer