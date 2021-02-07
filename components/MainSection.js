import React, {Component} from 'react';


class MainSection extends Component {
    render() {
        return (
            <main className='main'>
                {this.props.children}
            </main>
        )
    }
}
export default MainSection;
