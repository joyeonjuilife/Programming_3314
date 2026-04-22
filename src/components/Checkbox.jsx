export default function checkbox(props){
    const { children ,id, ...rest} = props;
    return (
        <>
            <input type="checkbox" id="chk-1" className="todo_check" />
            <label htmlFor="chk-1" className="todo_label">{children}</label>
        </>
    )
}
