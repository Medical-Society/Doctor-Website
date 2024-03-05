import { IPostsdoctor } from "../../interfaces";

 

const Post = ({images, description}: IPostsdoctor) => {
  const firstUrl = images[0]
  const secondUrl = images[1]
  return (
      <div className="flex md:flex-row  flex-col  p-2 w-10/12 border rounded-3xl bg-blue-50">
       <div className={`flex flex-row gap-1 md:h-full md:w-96 md:m-auto ${!secondUrl && 'justify-center md:m-auto '}`}>
            <img src={firstUrl} alt="post" className="w-1/2 rounded-lg"/>
            {secondUrl && <img src={secondUrl} alt="post" className="w-1/2 rounded-lg "/>}
        </div>
        <p className="text-sky-950 md:ml-10 text-lg font-semibold md:w-11/12">{description}</p>
    </div> 
  );
}

export default Post; 