

const CheckBox = (props) => {
    return (
        <div className="flex gap-1">
        <input type="checkbox" name="check" id="check" {...props}/>
        <label htmlFor="check" className="text-sm text-primary " >Accept Terms of Service</label>
    </div>
    );
};

export default CheckBox;