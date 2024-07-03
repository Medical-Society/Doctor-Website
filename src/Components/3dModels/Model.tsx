
interface IModel {
    src: string;
    title: string;
}

const Model = ({src, title}: IModel) => {
  return (
    <div className="flex flex-col pt-10 ">
        <h1 className="text-primary text-3xl font-medium font-cairo text-center">{title}</h1>
        <iframe
            id={title}
            style={{ aspectRatio: '4 / 3', width: '100%' }}
            allowFullScreen={true}
            loading="lazy"
            src={src}
            ></iframe>
    </div>
  );
};

export default Model;
