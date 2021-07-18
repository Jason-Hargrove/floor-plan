import Oven from './Oven'
import Sink from './Sink';

export default function Kitchen(props) {
  return (
    <>

          <div className="oven">
            <Oven />
          </div>
          <div className="sink">
            <Sink />
          </div>
          <span>
            <h1>Kitchen</h1>
          </span>


    </>
  );
}
