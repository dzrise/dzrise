import {Col, Container, Row, Form} from "react-bootstrap";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useActions } from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import style from "../../styles/Comments.module.scss";

interface IFormValues {
    email: string;
    name: string;
    message: string;
}

const FomrComment: React.FC = ({id}) => {

    const parent = useTypedSelector(state => state.comments.parent)

    const initialValues = {
        email: '',
        name: '',
        message: parent === null ? '' : `${parent.name}, `
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Введите валидный email').required('Данное поле обязательно для заполнения'),
        name: Yup.string().required('Данное поле обязательно для заполнения'),
        message: Yup.string().min(10, `Сообщение минимум 10 симоволов`).required('Данное поле обязательно для заполнения'),
    })

    const { postComment } = useActions()

    const submitHandler = (values: IFormValues) => {
        let data = {
            'comment_post_ID': id,
            'author_name': values.name,
            'author_email': values.email,
            'user_ID': 0,
            'comment_author_url': null,
            'content': values.message,
            'comment_parent': parent === null ? 0 : parent.id,
            'comment_type': 'comment',
            '_wp_unfiltered_html_comment': 'nonce'

        }
        postComment(id,data)
    }
    return (
        <>
            <h2>Оставить комментарий:</h2>
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
                                {!errors.email && values.email !== '' &&
                                <Form.Control.Feedback style={{display:'block'}}>Все ок!</Form.Control.Feedback>}
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationMessage">
                                <Form.Label className="mb-2" style={{color: '#fff'}}>Сообщение <span>{parent !== null ? `в ответ на сообщение от ${parent.name}` : '' }</span></Form.Label>
                                <Form.Control
                                    as={'textarea'}
                                    type="text"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    isValid={!errors.message && values.message !== ''}
                                    isInvalid={!!errors.message}
                                    required
                                />
                                {!!errors.message &&
                                <Form.Control.Feedback type="invalid">
                                    {errors.message}
                                </Form.Control.Feedback>}
                                {!errors.message && values.message !== '' &&
                                <Form.Control.Feedback style={{display:'block'}}>Все ок!</Form.Control.Feedback>}
                            </Form.Group>
                            <button type="submit" className="btn dark-button">
                                Отправить
                            </button>
                        </Form.Row>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default FomrComment;
