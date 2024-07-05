import { FormInputProps, FormPrescriptionProps } from "../interfaces";
import { ReviewsProps } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const FormInputlist: FormInputProps[] = [
  {
    label: "English Full Name",
    type: "text",
    id: "englishFullName",
    name: "englishFullName",
    value: "",
    onChange: () => {},
    placeholder: "Enter your English FullName",
  },
  {
    label: "Arabic Full Name",
    type: "text",
    id: "arabicFullName",
    name: "arabicFullName",
    value: "",
    onChange: () => {},
    placeholder: "Enter your Arabic Full name",
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    name: "email",
    value: "",
    onChange: () => {},
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
    value: "",
    onChange: () => {},
    placeholder: "Password",
  },
  {
    label: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    value: "",
    onChange: () => {},
    placeholder: "Confirm password",
  },
  {
    label: "Specialization",
    type: "text",
    id: "specialization",
    name: "specialization",
    value: "",
    onChange: () => {},
    placeholder: "Enter your Specialization",
  },
  {
    label: "Clinic Address",
    type: "text",
    id: "clinicAddress",
    name: "clinicAddress",
    value: "",
    onChange: () => {},
    placeholder: "Enter your clinic address",
  },
  {
    label: "National Id",
    type: "text",
    id: "nationalID",
    name: "nationalID",
    value: "",
    onChange: () => {},
    placeholder: "Enter your national_id",
  },
  {
    label: "Phone number",
    type: "text",
    id: "phoneNumber",
    name: "phoneNumber",
    value: "",
    onChange: () => {},
    placeholder: "Enter your phone number",
  },
  {
    label: "Birth Date",
    type: "date",
    id: "birthdate",
    name: "birthdate",
    value: "",
    onChange: () => {},
    placeholder: "Enter your birthdate",
  },
  {
    label: "Gender",
    type: "select",
    id: "gender",
    name: "gender",
    value: "",
    onChange: () => {},
    options: ["MALE", "FEMALE"],
    placeholder: "Select gender",
  },
];

export const ReviewList: ReviewsProps[] = [
  {
    name: "Efraim",
    initialRating: 1,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus. Scelerisque ornare tempus duis et. Varius consequat justo erat turpis dui ullamcorper.",
  },
  {
    name: "yostena",
    initialRating: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus. Scelerisque ornare tempus duis et. Varius consequat justo erat turpis dui ullamcorper. ",
  },
  {
    name: "yostena",
    initialRating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus. Scelerisque ornare tempus duis et. Varius consequat justo erat turpis dui ullamcorper.",
  },
  {
    name: "yostena",
    initialRating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus. Scelerisque ornare tempus duis et. Varius consequat justo erat turpis dui ullamcorper.",
  },
  {
    name: "yostena",
    initialRating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus. Scelerisque ornare tempus duis et. Varius consequat justo erat turpis dui ullamcorper.",
  },
  {
    name: "yostena",
    initialRating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus. Scelerisque ornare tempus duis et. Varius consequat justo erat turpis dui ullamcorper.",
  },
  {
    name: "yostena",
    initialRating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus. Scelerisque ornare tempus duis et. Varius consequat justo erat turpis dui ullamcorper.",
  },
];

export const DoctorsPosts = [
  {
    _id: "1",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique",
  },
  {
    _id: "2",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique",
  },
  {
    _id: "3",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique",
  },
];

export const DoctorsReviews: ReviewsProps[] = [
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    name: "DR.Efraim",
    initialRating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus.",
  },

  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    name: "DR.Efraim",
    initialRating: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus.",
  },

  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    name: "DR.Efraim",
    initialRating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus.",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    name: "DR.Efraim",
    initialRating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus.",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    name: "DR.Efraim",
    initialRating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus.",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU",
    name: "DR.Efraim",
    initialRating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. At semper sit dui pellentesque ornare scelerisque semper lacus.",
  },
];

export const PrescriptionList: FormPrescriptionProps[] = [
  {
    label: "Diseases",
    type: "text",
    id: uuidv4(),
    name: "Diseases",
    value: "",
    placeholder: "Enter patients disease",
    onChange: () => {},
  },
  {
    label: "Diagnose",
    type: "text",
    id: uuidv4(),
    name: "Diagnose",
    value: "",
    placeholder: "Enter the diagnose",
    onChange: () => {},
  },

  {
    label: "Add Medicine",
    type: "text",
    id: uuidv4(),
    name: "Medicine",
    value: "",
    placeholder: "Enter patients medicine",
    onChange: () => {},
  },
  {
    label: "Add Medicine",
    type: "text",
    id: uuidv4(),
    name: "Medicine",
    value: "",
    placeholder: "Enter patients medicine",
    onChange: () => {},
  },
];

export const ModelsData = [
  {
    "title": "Male Skeletal System",
    "src": "https://human.biodigital.com/viewer/?id=5dSG&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=LvC9Q&paid=o_1b229e09"
  },
  {
    "title": "Male Nervous System",
    "src": "https://human.biodigital.com/viewer/?id=5dSH&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=LvC9R&paid=o_1b229e09"
  },
  {
    "title": "Male Cardiovascular System",
    "src": "https://human.biodigital.com/viewer/?id=5dSL&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=LvC9S&paid=o_1b229e09"
  },
  {
    "title": "Female Skeletal System",
    "src": "https://human.biodigital.com/viewer/?id=5dSF&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=LvC9T&paid=o_1b229e09"
  },
  {
    "title": "Female Nervous System",
    "src": "https://human.biodigital.com/viewer/?id=5dSK&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=LvC9d&paid=o_1b229e09"
  },
  {
    "title": "Female Cardiovascular System",
    "src": "https://human.biodigital.com/viewer/?id=5dSI&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=LvC9a&paid=o_1b229e09"
  }
]