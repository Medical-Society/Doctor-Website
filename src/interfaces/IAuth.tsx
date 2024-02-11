interface IDoctor {
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

export interface IAuth{
    token: string;
    doctor: IDoctor;
}