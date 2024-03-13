interface IProps {

}

const InfoCard = ({ children, up }: { children: React.ReactNode, up?: boolean }) => {
  return (
    <p 
        className={`text-center text-zinc-400 text-base font-normal font-['Cairo'] border rounded-full py-4`}
        style={{ fontFamily: "Cairo" }}
    >
      {children}
    </p>
  );
};
const InfoPrescription = ({} : IProps) => {
    return ( 
       <div className="md:mt-32 md:ml-10 ml-5 mt-20 md:w-[641.50px] ">
         <div className="flex flex-row">
           <div className="text-neutral-500 text-[22px] font-medium font-['Cairo'] leading-relaxed">Name :</div>
              <span className="text-neutral-500 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-10 pl-4">Heba ezz</span>
         </div>

         <div className="flex flex-row">
         <div className="text-neutral-500 text-[22px] font-medium font-['Cairo'] leading-relaxed">Age :</div>
              <span className="text-neutral-500 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-20 pl-10 ">21</span>
        </div>
         

        <div className="flex flex-col">
         <div className="text-neutral-500 text-[22px] font-medium font-['Cairo'] leading-relaxed ">Diseases :</div>
          <div className="grid grid-cols-2 gap-2 items-center w-auto mr-2 md:mr-8 "> 
          <InfoCard>Disease name</InfoCard>
          <InfoCard>Disease name</InfoCard>
          <InfoCard>Disease name</InfoCard>
          <InfoCard>Disease name</InfoCard>
          </div>
          <div className="text-neutral-500 text-[22px] font-medium font-['Cairo'] leading-relaxed ">Medicine :</div>
            <div className="grid grid-cols-2 gap-2 items-center w-auto mr-2 md:mr-8 "> 
                 <InfoCard>Medicine name</InfoCard>
                 <InfoCard>Medicine name</InfoCard>
                 <InfoCard>Medicine name</InfoCard>
                 <InfoCard>Medicine name</InfoCard>         
            </div>
        </div>

      
           
       </div>
    )
    }

    export default InfoPrescription; 