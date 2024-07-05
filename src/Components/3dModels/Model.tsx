import { useParams } from "react-router-dom";
import {ModelsData} from '../../data/data'

interface IModel {
  title: string;
  src: string;
}

const Model = () => {
  const { id } = useParams<{ id: string }>();
  const model: IModel = ModelsData[parseInt(id || '')];
  if (!model) return (
    <div className="flex flex-col pt-10 ">
        <h1 className="text-primary text-3xl font-medium font-cairo text-center">Model not found</h1>
    </div>
  )
  const { title, src } = model;
  return (
    <div className="flex flex-col pt-10 ">
        <h1 className="text-primary text-3xl font-medium font-cairo text-center">{model.title}</h1>
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
