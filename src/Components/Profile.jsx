function Profile() {
    return (
      <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
          name="Alice"
          age={30}
          greeting={
            <div>
              <strong>Hi Alice, have a wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies: Reading, Hiking</p>
          <button>Contact</button>
        </ProfileCard>
  
        <ProfileCard
          name="Bob"
          age={25}
          greeting={
            <div>
              <strong>Hello Bob, keep up the great work!</strong>
            </div>
          }
        >
          <p>Hobbies: Gaming, Cooking</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
    );
  }

  export default Profile;


  function ProfileCard({name , age , greeting , children}){
    return(
        <>
            <h1>Name : {name}</h1>
            <h2>Age : {age}</h2>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    )
  }
  