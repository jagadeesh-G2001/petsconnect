export default function Button(Props) {
    const { ClassName, Text, OnClick } = Props;
    return <div className={ClassName}>
        <button onClick={OnClick}>{Text}</button>
    </div>
}