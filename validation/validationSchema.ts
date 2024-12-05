import * as Yup from "yup"



export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().min(10).required().label("email"),
    password: Yup.string().min(8).max(50).required().label("password")
})