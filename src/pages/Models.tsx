import Model from '../Components/3dModels/Model'
import {ModelsData} from '../data/data'
interface IProps {

}

const Models = ({}: IProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {
            ModelsData.map((model, index) => (
                <Model key={index} src={model.src} title={model.title} />
            ))
        }
    </div>
  )
}

export default Models