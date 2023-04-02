import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/resultSlice";
interface props {
  children: React.ReactNode;
}
const Header = ({ children }: props) => {
  const counter = useSelector((state: any) => state.result.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <section className="header">
        <button
          className="header__button--decrement"
          onClick={() => handleDecrement()}
        >
          -
        </button>
        <button
          className="header__button--increment"
          onClick={() => handleIncrement()}
        >
          +
        </button>
        <div className="header__result">Result: {counter}</div>
      </section>
      <body>{children}</body>
    </>
  );
};
export default Header;
