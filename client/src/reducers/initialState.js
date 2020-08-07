export default {
    examsObj: {
        exams: [],
        exam: {},
        filteredExams: [],
        editMode:true,
        editedExam:{
            session:"",
            faculty:"",
            yearOfStudy:"",
            domain:"",
            course:"",
            teacher:"",
        },
        error: false,
        loading: false,
    },
    usersObj: {
        users: [],
        user: {},
        editedUser: {
            userName: "",
            password: "",
            email: "",
            role: "",
        },
        filteredUsers:[],
        error: null,
        loading: false,
        editMode: true,
    },
}
