import * as Yup from "yup";
import { Formik } from 'formik';
import {Col, Form} from "react-bootstrap";

interface IFormValues {
    email: string;
    phone: string;
    name: string;
    message: string;
}
const FormContact: React.FC = () => {
    const initialValues = {
        email: '',
        phone: '',
        name: '',
        message: ''
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Введите валидный email').required('Данное поле обязательно для заполнения'),
        phone: Yup.string().required('Данное поле обязательно для заполнения'),
        name: Yup.string().required('Данное поле обязательно для заполнения'),
    })

    const submitHandler = (values: IFormValues) => {
        console.log(values)
    }
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values: IFormValues) => submitHandler(values)}
        >
            {({
                  handleSubmit,
                  handleChange,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="validationName">
                            <Form.Label className="mb-2" style={{color: '#fff'}}>Имя</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                isValid={!errors.name && values.name !== ''}
                                isInvalid={!!errors.name}
                                required
                            />
                            {isValid}
                            {!!errors.name &&
                            <Form.Control.Feedback type="invalid" >
                                {errors.name}
                            </Form.Control.Feedback>}
                            {!errors.name && values.name !== '' &&
                            <Form.Control.Feedback style={{display:'block'}}>Все ок!</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationEmail">
                            <Form.Label className="mb-2" style={{color: '#fff'}}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isValid={!errors.email && values.name !== ''}
                                isInvalid={!!errors.email}
                                required
                            />
                            {!!errors.email &&
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>}
                            {!errors.email && values.name !== '' &&
                            <Form.Control.Feedback style={{display:'block'}}>Все ок!</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationPhone">
                            <Form.Label className="mb-2" style={{color: '#fff'}}>Телефон</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                isValid={!errors.phone && values.phone !== ''}
                                isInvalid={!!errors.phone}
                                required
                            />
                            {!!errors.phone &&
                            <Form.Control.Feedback type="invalid">
                                {errors.phone}
                            </Form.Control.Feedback>}
                            {!errors.phone && values.phone !== '' &&
                            <Form.Control.Feedback style={{display:'block'}}>{touched.phone}Все ок!</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationMessage">
                            <Form.Label className="mb-2" style={{color: '#fff'}}>Сообщение</Form.Label>
                            <Form.Control
                                as={'textarea'}
                                type="text"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                isValid={!errors.message && values.message !== ''}
                            />
                            {!errors.message && values.message !== '' &&
                            <Form.Control.Feedback>Все ок!</Form.Control.Feedback>}
                        </Form.Group>

                        <button type="submit" className="btn dark-button">
                            Отправить
                        </button>
                    </Form.Row>
                </Form>
            )}
        </Formik>
    )
}

export default FormContact
