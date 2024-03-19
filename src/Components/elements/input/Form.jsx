import Input from "./input";
import Label from "./label";

const Inputform = (props) => {
    const { label, name, type, placeholder, className="mb-6", width,text, onChange} = props;

    return (
        <div className={`${className}`}>
            <Label text = {text} htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} width={width} onChange={onChange}/>
        </div>
    );
};

export default Inputform;
