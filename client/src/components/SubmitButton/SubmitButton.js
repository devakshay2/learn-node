const SubmitButton = ({ label = "", onClick = () => null }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default SubmitButton;
