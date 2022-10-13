export default function Border(props) {
    const {children} = props;

    return (
        <div className="borderDiv">
            {children} 
        </div>
    )
}