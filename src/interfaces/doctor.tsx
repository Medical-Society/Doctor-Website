/*{
    "_id": "65c35d0a4a9f39e1d349d59b",
    "englishFullName": "Efraim Nabil",
    "arabicFullName": "افرايم نبيل",
    "email": "efraimefefraim@gmail.com",
    "password": "$2a$10$LrW5WV15OQIZF/HtDzu.Hu0fDmlQUPIL8YaeeOzueb79iQMS2skiK",
    "specialization": "Psychologist",
    "clinicAddress": "ABC-22 st.",
    "nationalID": "11112222311112",
    "phoneNumber": "01207070707",
    "age": 20,
    "gender": "male",
    "status": "rejected",
    "isVerified": true,
    "createdAt": "2024-02-07T10:35:54.602Z",
    "updatedAt": "2024-02-10T14:32:45.742Z",
    "__v": 0
}*/

export interface IDoctor {
    _id: string;
    englishFullName: string;
    arabicFullName: string;
    email: string;
    password: string;
    specialization: string;
    clinicAddress: string;
    nationalID: string;
    phoneNumber: string
    age: number
    gender: string
    status: string
    isVerified: boolean
    createdAt: string
    updatedAt: string
    __v: number
}
