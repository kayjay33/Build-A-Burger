switch (props.elementType) {
    case ('input'):
        inputElement = <input 
            className={classes.InputElement}
            {...props.elementConfig} 
            value={props.value} />;
        break;