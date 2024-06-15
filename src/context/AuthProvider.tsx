import { ReactNode, createContext, useState } from "react";
import { IAuth } from "../interfaces";

interface IAuthContext {
    auth: IAuth;
    setAuth: (auth: IAuth) => void;
}

/* {
    "_id": "65df4be3df57a95d6e87dfa0",
    "englishFullName": "Mina Magdy",
    "arabicFullName": "مينا مجدي تقاوي",
    "email": "mina.magdy.takawey+8@gmail.com",
    "specialization": "doctor",
    "clinicAddress": "123 st.",
    "nationalID": "11112223111212",
    "phoneNumber": "01233121231",
    "birthdate": "2006-02-27T22:00:00.000Z",
    "gender": "MALE",
    "status": "ACCEPTED",
    "isVerified": true,
    "reviews": [
        "65df4d72df57a95d6e87dfaa",
        "65e2699a88700070ea6644e1"
    ],
    "createdAt": "2024-02-28T15:06:11.285Z",
    "updatedAt": "2024-03-01T23:59:58.083Z",
    "__v": 2,
    "avatar": "https://i.ibb.co/jkkYmxh/22d2ea5a45342c323b2508102.jpg",
    "posts": [],
    "about": "hello my name is mina magdy, I'm not a doctor HaHaHa!!!"
}*/

const defaultDoctor = {
    _id: "",
    englishFullName: "",
    arabicFullName: "",
    email: "",
    password: "",
    specialization: "",
    clinicAddress: "",
    nationalID: "",
    phoneNumber: "",
    birthdate: "",
    createdAt: "",
    updatedAt: "",
    gender: "",
    status: "",
    isVerified: false,
    __v: 0,
    posts: [],
    reviews: [],
    availableTime: {
        weekdays: {
            "saturday": {
                from: {
                    hour: 0,
                    minute: 0
                },
                to: {
                    hour: 0,
                    minute: 0
                }
            },
            "sunday": {
                from: {
                    hour: 0,
                    minute: 0
                },
                to: {
                    hour: 0,
                    minute: 0
                }
            },
            "monday": {
                from: {
                    hour: 0,
                    minute: 0
                },
                to: {
                    hour: 0,
                    minute: 0
                }
            },
            "tuesday": {
                from: {
                    hour: 0,
                    minute: 0
                },
                to: {
                    hour: 0,
                    minute: 0
                }
            },
            "wednesday": {
                from: {
                    hour: 0,
                    minute: 0
                },
                to: {
                    hour: 0,
                    minute: 0
                }
            },
            "thursday": {
                from: {
                    hour: 0,
                    minute: 0
                },
                to: {
                    hour: 0,
                    minute: 0
                }
            },
            "friday": {
                from: {
                    hour: 0,
                    minute: 0
                },
                to: {
                    hour: 0,
                    minute: 0
                }
            }
        },
        limit: 0,
        _id: "",
        createdAt: "",
        updatedAt: ""
    },
    avatar: "",
    about: ""
    
};

const AuthContext = createContext<IAuthContext>({
    auth: {
        token: "",
        doctor: defaultDoctor
    },
    setAuth: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<IAuth>({
        token: "",
        doctor: defaultDoctor
    });
    
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;