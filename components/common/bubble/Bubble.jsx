const Bubble = ({children, style, className}) => {

    return (
        <div className={`bubble d-flex justify-content-center align-items-center position-absolute ${className}`}
            style={style}>
            { children }
        </div>
    )
}

export default Bubble;