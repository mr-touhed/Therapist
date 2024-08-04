
// eslint-disable-next-line react/prop-types
const Button = ({children, className,...props}) => {
    return (
        <button type="submit" {...props} className={`w-64 h-14 mt-4  disabled:opacity-50 text-sm bg-primary text-white rounded-md ${className}`} {...props}> {children}</button>
    );
};

export default Button;