import { SpinnerDotted } from "spinners-react";

const Spinner = ({ type, enabled = false }) => {

  return ( 
    <>
    {enabled && (
    <div className="fixed z-10 justify-center  flex w-full h-full -mt-20 border border-1-blue bg-blend-multiply">
      <div className="flex items-center">
        <SpinnerDotted enabled={enabled} />
      </div>
    </div>
    )}
    </>
  );
};

export default Spinner;
