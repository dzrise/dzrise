import {useState} from "react";
import Steps from "./Steps";

const FormQuiz:React.FC = () => {
    const [step, setStep] = useState(0);
    const steps = [
        {id: 0, title: 'Данные проекта'},
        {id: 1, title: 'Бюджет'},
        {id: 2, title: 'Контакты'}
    ]
    return (
        <>

            <Steps
                steps={steps}
                activeStep={step}
                setStep={setStep}
            />

        </>
    )
}

export default FormQuiz
