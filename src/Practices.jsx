export const Practices = () =>{
    const students = [];  
    return (
        <>
            {/* 1st  */}
            {/* <p>{students.length  && "No students found"}</p> */}
            {/* 2nd */}
            {/* <p>{students.length === 0 && "No students found"}</p> */}
            {/* 3rd */}
            {/* <p>{!students.length && "No students found"}</p> */}
            <p>{!Boolean(students.length) && "No students found"}</p>
            <p>Number of students : {students.length}</p>
        </>
    )
};