
interface IModel {
    src: string;
    title: string;
}

const Model = ({src, title}: IModel) => {
  return (
    <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
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
