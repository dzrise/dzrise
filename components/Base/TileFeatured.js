import React, {Component} from 'react';
import styled from 'styled-components';

class TileFeatured extends Component {
    render() {
        return (
            <Title>
                {this.props.children}
            </Title>
        )
    }
}

const Title = styled.h2`
        color: var(--white-color);
        font-size: var(--h2-size);
        position: relative;
        font-weight: 900;
        &:before {
            content: '';
            position: absolute;
            top: -22px;
            left: 0;
            width: 50px;
            height: 5px;
            background-image: -webkit-linear-gradient(45deg, var(--secondary-color) 15%, var(--primary-color) 65%);
            background-image: linear-gradient(45deg, var(--secondary-color) 15%, var(--primary-color) 65%);
        }
`
export default TileFeatured;
