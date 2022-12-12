import { DotSpinner } from '@uiball/loaders'
import "./loader.css";


function Loader() {
    return (
        <div className='loader'>
            <DotSpinner
                size={40}
                speed={0.9}
                color="black"
            />
        </div>
    )
}

export default Loader