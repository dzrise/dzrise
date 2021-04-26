import { Nav } from 'react-bootstrap'
import { IProjectType } from "../../types/projectType";
import {useActions} from "../../hooks/useActions";
import style  from '../../styles/Portfolio.module.scss'

interface Props {
    data: IProjectType[];
    active: number;
}

const ProjectTypes: React.FC<Props> = ({data, active}: Props) => {
    const {setProjecttypeActive} = useActions()
    return(
        <>
            <Nav className={style.portfolio_links}>
                <Nav.Item key={0} onClick={()=>setProjecttypeActive(0)}>
                    <Nav.Link className={active == 0 ? style.active : '' }>Все проекты</Nav.Link>
                </Nav.Item>
                {data.length > 0 &&
                    data.map(item => {
                        return(
                            <Nav.Item key={item.id} onClick={()=>setProjecttypeActive(item.id)}>
                                <Nav.Link  className={active == item.id ? style.active : '' }><img src={item.acf.img.url} alt={item.name} title={item.name}/> {item.name}</Nav.Link>
                            </Nav.Item>
                        )
                    })
                }

            </Nav>
        </>
    )
}

export default ProjectTypes;
