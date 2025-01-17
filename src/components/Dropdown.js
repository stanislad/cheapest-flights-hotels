import React, {useEffect, useRef, useState} from "react";

const Dropdown = ({options, label, selectedOption, setter}) =>{
    const [activeDropdown, setActiveDropdown] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', event => {
            //clicking outside of dropdown
            if(ref.current.contains(event.target))
            {
                return
            }
            setActiveDropdown(false)
        })
    },[])

    const renderedOptions = options.map((option, i) =>{

        if(option.value === selectedOption.value) return null;
        return (
            <div
                key={i}
                className='item'
                onClick={() => setter(option)}
            >
                {option.label}
            </div>
        );
    })

    return (
        <div ref={ref} className='ui form'>
        <div className='field'>
        <label className='label'>{label}</label>
            <div
                className={`ui selection dropdown ${activeDropdown ? 'visible' : ''}`}
                onClick={() => setActiveDropdown(!activeDropdown)}
            >
                <i className='dropdown icon'/>
                <div className='text'>{selectedOption.label}</div>
                <div className={`menu ${activeDropdown ? 'visible transition' : ''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>

        </div>
    );
}
export default Dropdown;