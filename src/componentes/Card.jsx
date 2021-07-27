import React from 'react'

export default props => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        textAlign: 'center'
    }

    .header = {
        backgroundColor: 'red'
    }

    const cards = {
        marginTop: '12px',
        backgroundColor: 'yellow'
    }

    return (
        <div className="card" style={styles}>
            <div className="header" style={cards}>
                <span className="title">{props.title}</span>
            </div>
            <div className="content" style={cards}>
                <span>{props.children}</span>
            </div>
        </div>
    )
}