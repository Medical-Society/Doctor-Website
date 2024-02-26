 
export interface IProps {
  firstUrl: string;
  secondUrl?: string;
  description?: string;
}

const Post = ({firstUrl,secondUrl, description}: IProps) => {
  return (
    <div className="flex flex-col justify-center p-5 w-96">
        <div className="flex flex-col items-center gap-4">
            <img src={firstUrl} alt="post" className="w-96 rounded-lg"/>
            {secondUrl && <img src={secondUrl} alt="post" className="w-96 rounded-lg"/>}
        </div>
        <p className="text-lg font-semibold">{description}</p>
    </div> 
  );
}

export default Post;