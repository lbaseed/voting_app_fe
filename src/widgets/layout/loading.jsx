import { SpinnerDotted } from "spinners-react";

const Spinner = ({ type }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-blend-multiply">
      <SpinnerDotted />
    </div>
  );
};

export default Spinner;
