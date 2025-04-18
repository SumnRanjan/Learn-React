export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for Hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => {
          HandleWelcomeUser("Suman");
        }}
        onMouseEnter={handleHover}
      />
    </>
  );
};


const WelcomeUser = (props) =>{
    const {onClick , onMouseEnter} = props;
    const handleGreeting = () =>{
        console.log("Hey welcome user")
        onClick();
    }
    return (
        <>  
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}