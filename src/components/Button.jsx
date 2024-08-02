
// eslint-disable-next-line react/prop-types
const Button = ({children, className},props) => {
    return (
        <button className={`w-64 h-14 mt-4  text-sm bg-primary text-white rounded-md ${className}`} {...props}> {children}</button>
    );
};

export default Button;