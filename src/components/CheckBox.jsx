

// eslint-disable-next-line react/prop-types
const CheckBox = ({text,className,...props}) => {
    return (
        <div className="flex gap-1">
        <input type="checkbox" name="check" id="check" {...props}/>
        <label htmlFor="check" className={className} >{text}</label>
    </div>
    );
};

export default CheckBox;