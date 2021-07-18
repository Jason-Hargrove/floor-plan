import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import Bath from './Bath';
import LivingRoom from './LivingRoom';

export default function FloorPlan(props) {
  const numbers = [1, 2, 3];
  const sizes = ['Full', 'Half'];


  return (
    <>
      <div className="floorplan">
        <div className="bedroom" id="bed-1">
          <Bedroom bedNum={numbers[0]} />
        </div>
        <div className="kitchen">
          <Kitchen />
        </div>
        <div className="bath" id="bath-1">
          <Bath size={sizes[0]}/>
        </div>
        <div className="bedroom" id="bed-2">
          <Bedroom bedNum={numbers[1]} />
        </div>
        <div className="livingRoom">
          <LivingRoom />
        </div>
        <div className="bath" id="bath-2">
          <Bath size={sizes[1]} />
        </div>
        <div className="bedroom" id="bed-3">
          <Bedroom bedNum={numbers[2]} />
        </div>
      </div>
    </>
  );
}
