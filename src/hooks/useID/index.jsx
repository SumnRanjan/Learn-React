import { useId } from "react";

export const UseId = () => {
//   const usernameId = useId();
//   const emailId = useId();
//   const password = useId()
//   return (
//     <form action="">
//       <div>
//         <label htmlFor={usernameId}>UserName :</label>
//         <input type="text" name="name" id={usernameId} />
//       </div>
//       <div>
//         <label htmlFor={emailId}>Email :</label>
//         <input type="email" name="email" id={emailId} />
//       </div>
//       <div>
//         <label htmlFor={password}>Password :</label>
//         <input type="password" name="password" id={password} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );

const Id = useId();
  return (
    <form action="">
      <div>
        <label htmlFor={Id + "usernameId"}>UserName :</label>
        <input type="text" name="name" id={Id + "usernameId" } />
      </div>

      <div>
        <label htmlFor={Id + "emailId"}>Email :</label>
        <input type="email" name="email" id={Id + "emailId"} />
      </div>
      <div>
        <label htmlFor={Id + "password"}>Password :</label>
        <input type="password" name="password" id={Id + "password"} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
