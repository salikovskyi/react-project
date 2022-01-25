import { useDispatch } from "react-redux";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <li>
      <p></p>
      <span></span>
      <span></span>
      <button>
        <svg>
          <use href="../../assets/image"></use>
        </svg>
      </button>
    </li>
  );
}
