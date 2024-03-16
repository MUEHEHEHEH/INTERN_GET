import Input from "./input";
import Label from "./label";

const Inputform = (props) => {
    const { label, name, type, placeholder, className="mb-6"} = props;

    return (
        <div className={`${className}`}>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    );
};

export default Inputform;
