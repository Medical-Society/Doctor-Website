import { FormInputProps } from "../interfaces";
import { ReviewsProps } from "../interfaces";

export const FormInputlist : FormInputProps[] = [
    {
        label: "English Full Name",
        type: "text",
        id: "englishFullName",
        name: "englishFullName",
        value: "",
        onChange: () => {},
        placeholder: "Enter your English FullName"
    
    },
    {
        label: "Arabic Full Name",
        type: "text",
        id: "arabicFullName",
        name: "arabicFullName",
        value: "",
        onChange: () => {},
        placeholder: "Enter your Arabic Full name"
    },
    {   label: "Email",
        type: "email",
        id: "email",
        name: "email",
        value: "",
        onChange: () => {},
        placeholder: "Enter your email"
    },
    {   label: "Password",
        type: "password",
        id: "password",
        name: "password",
        value: "",
        onChange: () => {},
        placeholder: "Password",
    },
    {   label: "Confirm Password",
        type: "password",
        id: "confirmPassword",
        name: "confirmPassword",
        value: "",
        onChange: () => {},
        placeholder: "Confirm password"
    },
    {   label: "Specialization",
        type: "text",
        id: "specialization",
        name: "specialization",
        value: "",
        onChange: () => {},
        placeholder: "Enter your Specialization"
    },
    {   label: "Clinic Address",
        type: "text",
        id: "clinicAddress",
        name: "clinicAddress",
        value: "",
        onChange: () => {},
        placeholder: "Enter your clinic address"
    },
    {   label: "National Id",
        type: "text",
        id: "nationalID",
        name: "nationalID",
        value: "",
        onChange: () => {},
        placeholder: "Enter your national_id"   
    },
    {   label: "Phone number",
         type :"number",
         id: "phoneNumber",
         name: "phoneNumber",
         value: "",
         onChange: () => {},
         placeholder: "Enter your phone number" 
     },
    {   
        label: "Birth Date",
        type :"date",
        id: "birthdate",
        name: "birthdate",
        value: "",
        onChange: () => {},
        placeholder: "Enter your birthdate"
    }, 
    {   
        label: "Gender",
        type :"select",
        id: "gender",
        name: "gender",
        value: "",
        onChange: () => {},
        options : ["male" , "female"],
        placeholder: "Select gender"
    },

]

export const ReviewList : ReviewsProps[] = [
    {
        name: "Efraim",
        initialRating: 1,
        review: "Lorem ipsum dolor sit amet consectetur. Habitant sed ac amet nullam porta urna nibh. Elit tempor magna in quisque. Tortor urna sit purus sed eu nibh. Suspendisse purus etiam in eu semper purus amet mattis. Purus vel nunc pellentesque egestas congue accumsan dolor neque. Pretium justo massa leo adipiscing euismod vitae. Diam tortor adipiscing nunc phasellus. Sit tellus odio feugiat feugiat egestas et donec. Ultrices arcu nunc et luctus etiam. Mattis lorem consectetur id sit lobortis."
    },
    {
        name: "yostena",
        initialRating: 2,
        review: "Lorem ipsum dolor sit amet consectetur. Habitant sed ac amet nullam porta urna nibh. Elit tempor magna in quisque. Tortor urna sit purus sed eu nibh. Suspendisse purus etiam in eu semper purus amet mattis. Purus vel nunc pellentesque egestas congue accumsan dolor neque. Pretium justo massa leo adipiscing euismod vitae. Diam tortor adipiscing nunc phasellus. Sit tellus odio feugiat feugiat egestas et donec. Ultrices arcu nunc et luctus etiam. Mattis lorem consectetur id sit lobortis."
    },
    {
        name: "yostena",
        initialRating: 3,
        review: "Lorem ipsum dolor sit amet consectetur. Habitant sed ac amet nullam porta urna nibh. Elit tempor magna in quisque. Tortor urna sit purus sed eu nibh. Suspendisse purus etiam in eu semper purus amet mattis. Purus vel nunc pellentesque egestas congue accumsan dolor neque. Pretium justo massa leo adipiscing euismod vitae. Diam tortor adipiscing nunc phasellus. Sit tellus odio feugiat feugiat egestas et donec. Ultrices arcu nunc et luctus etiam. Mattis lorem consectetur id sit lobortis."
    },
    {
        name: "yostena",
        initialRating: 4,
        review: "Lorem ipsum dolor sit amet consectetur. Habitant sed ac amet nullam porta urna nibh. Elit tempor magna in quisque. Tortor urna sit purus sed eu nibh. Suspendisse purus etiam in eu semper purus amet mattis. Purus vel nunc pellentesque egestas congue accumsan dolor neque. Pretium justo massa leo adipiscing euismod vitae. Diam tortor adipiscing nunc phasellus. Sit tellus odio feugiat feugiat egestas et donec. Ultrices arcu nunc et luctus etiam. Mattis lorem consectetur id sit lobortis."
    },
    {
        name: "yostena",
        initialRating: 4,
        review: "Lorem ipsum dolor sit amet consectetur. Habitant sed ac amet nullam porta urna nibh. Elit tempor magna in quisque. Tortor urna sit purus sed eu nibh. Suspendisse purus etiam in eu semper purus amet mattis. Purus vel nunc pellentesque egestas congue accumsan dolor neque. Pretium justo massa leo adipiscing euismod vitae. Diam tortor adipiscing nunc phasellus. Sit tellus odio feugiat feugiat egestas et donec. Ultrices arcu nunc et luctus etiam. Mattis lorem consectetur id sit lobortis."
    }
    

 
]


export const DoctorsPosts = [
 {
        _id: "1",
        firstUrl: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600",
        secondUrl: "https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique" 
    },
   {
        _id: "2",
        firstUrl: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique"
    },
    {
        _id: "3",
        firstUrl: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600",
        secondUrl: "https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique"
    },
    {
        _id: "4",
        firstUrl: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600",
        secondUrl: "https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique"
    } ,
    {
        _id: "5",
        firstUrl: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600",
        secondUrl: "https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique"
    }
    ,
    {_id: "6",
    firstUrl: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique"
}
]