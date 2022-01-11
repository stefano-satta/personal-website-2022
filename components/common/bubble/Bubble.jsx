const Bubble = ({children, style}) => {

    return (
        <div className="bubble d-flex justify-content-center align-items-center position-absolute"
            style={style}>
            { children }
        </div>
    )
}

export default Bubble;