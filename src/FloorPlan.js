import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import Bath from './Bath';
import LivingRoom from './LivingRoom';

export default function FloorPlan(props) {
  const numbers = [1, 2, 3];
  const sizes = ['Full', 'Half'];


  return (
    <>
      <h1>Floor Plan</h1>
      <div>
        <Bedroom bedNum={numbers[0]} />
      </div>
      <div>
        <Kitchen />
      </div>
      <div>
        <Bath size={sizes[0]}/>
      </div>
      <div>
        <Bedroom bedNum={numbers[1]} />
      </div>
      <div>
        <LivingRoom />
      </div>
      <div>
        <Bath size={sizes[1]} />
      </div>
      <div>
        <Bedroom bedNum={numbers[2]} />
      </div>
    </>
  );
}
