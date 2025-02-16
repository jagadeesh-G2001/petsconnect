export default function Input(Props) {
    const { type, onChange, id, name, value, label,forname,classname} = Props;

    return <div className={classname}>
        <label htmlFor={forname}>{label}</label>
        <input type={type} value={value} onChange={onChange} id={id} name={name} />
    </div>
    }
