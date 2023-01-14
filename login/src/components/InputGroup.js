const InputGroup = ({ label, name, setChange, value, type }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label><br />
            <input 
                name={name} 
                onChange={(e) => setChange(e.target.value)} 
                value={value} 
                type={type}
                style={{display:'block', width:'100%',boxSizing:'border-box'}}  
            />
            <br />
        </div>
    );
}

export default InputGroup;