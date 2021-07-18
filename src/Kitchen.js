import Oven from './Oven'
import Sink from './Sink';

export default function Kitchen(props) {
  return (
    <>
      <h1>Kitchen</h1>
        <div>
          <Oven />
        </div>
        <div>
          <Sink />
        </div>
    </>
  );
}
