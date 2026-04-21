export default function checkbox(props){
    const { id, ...rest} = props;
    return (
        <>
            <input type="checkbox" id="chk-1" className="todo_check" />
            <label htmlFor="chk-1" className="todo_label">think</label>
        </>
    )
}
