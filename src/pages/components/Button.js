import { Link } from "react-router-dom";
function Button({href, onClick, text, to, iden,...passProps}){
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }
    if(href)
    {
        props.href = href;
        Comp = 'a'
    }
    else if(to){
        props.to = to; 
        Comp = Link;
    }
    return <Comp {...props} className={iden}>{text}</Comp>
}

export default Button