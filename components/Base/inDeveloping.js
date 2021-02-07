import React, {Component} from 'react';


class InDeveloping extends Component {
    render() {
        return (
            <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: 'var(--hero-bg-color)'}}>
                <div>
                    <h2 style={{width:'100%', textAlign: 'center', color: 'var(--nav-item-color)',textShadow: '3px 3px 4px #8e8e8e'}}>Страница в разработке</h2>
                </div>
            </div>
        )
    }
}
export default InDeveloping;
