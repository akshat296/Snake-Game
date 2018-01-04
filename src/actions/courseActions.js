export function createCourses (course)
{
    return {type : 'CREATE',
            payload:course};
}
export function deleteCourses(course)
{//console.log("clicked me", course);
    return {type : 'DELETE',
            payload: course};
}
export function doneCourses(course)
{//console.log("clicked me", course);
    return {type : 'DONE',
            payload: course};
}
export function editCourses(course,newcourses)
{ 

    return {type : 'EDIT',
            payload: {course:course,  newpayload: newcourses},
          
        };
}