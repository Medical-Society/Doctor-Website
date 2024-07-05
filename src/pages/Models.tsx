import { NavLink } from 'react-router-dom'
import {ModelsData} from '../data/data'
interface IProps {

}

const Models = ({}: IProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            ModelsData.map((model, index) => (
                <NavLink to={`/clinic/models/${index}`} key={index} className="flex items-center justify-center bg-gray-100 p-2 rounded-md hover:bg-gray-200 h-20 text-xl font-semibold">
                  {
                    model.title
                  }
                </NavLink>
            ))
        }
    </div>
  )
}

export default Models