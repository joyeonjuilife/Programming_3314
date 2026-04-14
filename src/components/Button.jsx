export default function Button(props) {
    const {children , ...rest} = props;
    return (
        
        <Button {...rest}>{props.children}</Button>
    )
}