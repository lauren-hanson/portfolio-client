export const isStaff = () => {
    const auth = localStorage.getItem("portfolio")
    const userType = JSON.parse(auth)
    return userType?.staff
}