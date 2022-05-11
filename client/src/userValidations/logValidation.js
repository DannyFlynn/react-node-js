import * as yup from 'yup';


export const schema = yup.object().shape({
    username: yup.string().min(1).required("name is required"),
    password: yup.string().min(4).required()
})  