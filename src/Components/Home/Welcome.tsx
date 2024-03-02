import background from "../../assets/backgoroung-home.png";
import { useAuth } from "../../hooks/useAuth";

interface IProps {}

const WelcomeCard = ({ children, up }: { children: React.ReactNode, up?: boolean }) => {
  return (
    <p 
        className={`w-11/12 h-32 font-cairo bg-cardBg-60 p-4 text-white bg-opacity-60 rounded-3xl flex justify-center items-center md:w-72 md:h-80 ${up ? "md:transform md:-translate-y-10" : null} md:text-2xl backdrop-filter backdrop-blur-lg`}
        style={{ fontFamily: "Cairo" }}
    >
      {children}
    </p>
  );
};

const Welcome = ({}: IProps) => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div
      className="bg-cover bg-no-repeat w-full flex flex-col items-center justify-center gap-12 pt-16 pb-2"
      style={{
        backgroundImage: `url(${background})`,
        minHeight: "calc(100vh - 1rem)",
      }}
    >
      <h2 className="text-lg text-opacity-95 font-cinzel-decorative tracking-widest text-white font-semibold md:text-2xl lg:text-3xl">
        WELCOME {auth?.doctor?.englishFullName.toUpperCase()} TO MEDICAL SOCIETY
      </h2>

      <div className="flex flex-col w-full justify-center items-center text-center gap-5 p-5 md:flex-row md:gap-10">
        <WelcomeCard>
          Our system is going to help you to manage your appointments
        </WelcomeCard>
        <WelcomeCard up>
          Level up your appointments with the digital prescriptions
        </WelcomeCard>
        <WelcomeCard>
          Create your portfolio to share your latest work and get feedback from
          your patients
        </WelcomeCard>
      </div>
      <button
        className="border-2 border-white rounded-full py-2 px-10 text-white hover:bg-white hover:text-primary active:bg-primary active:text-white md:text-2xl md:py-3 md:px-24"
        type="button"
        style={{ fontFamily: "Cairo" }}
      >
        Join us now !
      </button>
    </div>
  );
};
export default Welcome;
