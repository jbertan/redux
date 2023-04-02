import { useSelector } from "react-redux";

const MiddleBoxGrid = () => {
  const result = useSelector((state: any) => state.result.value);
  return (
    <div className="middle__box__grid">
      <h1>{result}</h1>
    </div>
  );
};
export default MiddleBoxGrid;
