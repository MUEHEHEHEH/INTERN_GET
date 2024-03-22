import Input from "./input";
import Label from "./label";

const Inputform = (props) => {
  const {
    label,
    name,
    type,
    placeholder,
    className = "mb-6",
    width,
    text,
    onChange,
    required,
  } = props;

  return (
    <div className={`${className}`}>
      <Label className={`${className}`} text={text} htmlFor={name}>
        {label}
      </Label>
      <Input
        className={`${className}`}
        name={name}
        type={type}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Inputform;
