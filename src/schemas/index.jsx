import * as Yup from "yup"

export const SignupSchema = Yup.object({
name: Yup.string().min(2,"Name too short.").max(20,"Name too long").required("Please enter your name."),
email: Yup.string().email("Invalid email").required("Please enter your email."),
password: Yup.string().min(8,"Password must have atleast 8 characters.").required("Please enter your password"),
confirm_password: Yup.string().oneOf([Yup.ref("password"),null], "Password must match.").required("Please confirm your password.")
})