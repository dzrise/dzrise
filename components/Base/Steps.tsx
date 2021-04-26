import {Form} from "react-bootstrap";

interface IStep {
    id: number
    title: string
}
interface IProps {
    steps: IStep[]
    activeStep: number
    setStep: Function
}
const Steps:React.FC<IProps> = ({steps, activeStep, setStep}) => {
    return (
        <>
            <ul className="progressbar">
                {steps.length > 0 && steps.map((step, i) =>
                    <li key={step.id} className={i === activeStep ? 'active' : ''}>
                        <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>
                                {step.title}
                            </font>
                        </font>
                    </li>
                )}
            </ul>

            <Form>
                <h3>Тип вашего проекта</h3>
                <Form.Check inline label="Лендинг" name="type" type="radio" id="landing" />
                <Form.Check inline label="Интернет-магазин" name="type" type="radio" id="online_store" />
                <Form.Check inline label="Приложение" name="type" type="radio" id="apps" />
                <Form.Check inline label="Мобильное приложение" name="type" type="radio" id="mobile-apps" />
                <h3>Тип вашего проекта</h3>
                <Form.Check inline label="Лендинг" name="type" type="radio" id="landing" />
                <Form.Check inline label="Интернет-магазин" name="type" type="radio" id="online_store" />
                <Form.Check inline label="Приложение" name="type" type="radio" id="apps" />
                <Form.Check inline label="Мобильное приложение" name="type" type="radio" id="mobile-apps" />
            </Form>
        </>
    )
}

export default Steps
