import {ThemeContext} from '../theme-context'
import {useContext, useEffect, useState} from 'react'
import {buttonStyle} from '../style'

const Button = ({value,onClick}) =>{
    
    const [style,setStyle]=useState(buttonStyle);

    const {  dark } = useContext(ThemeContext);    
    useEffect(()=>{        
        let newStyle=Object.assign({}, buttonStyle);
        newStyle.background="white";
        if(!dark) newStyle.background="#282c34";
        newStyle.color="#282c34";
        if(!dark) newStyle.color="white";
        setStyle(newStyle);
        
    },[dark])
        return <button style={style} onClick={onClick}>{value}</button>
}
export default Button;
