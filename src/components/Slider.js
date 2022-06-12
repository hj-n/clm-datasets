import { setValue } from "./sliderSlice";
import { useDispatch, useSelector } from "react-redux";

const Slider = (props) => {
	const sliderVar = useSelector((state) => state.slider.value);
	const dispatch = useDispatch();

	console.log(sliderVar)
	return (
		<div>
			<input type="range" value={sliderVar} min="0" max="100"
				onChange={(e) => {
					dispatch(setValue(e.target.value));
				}}
			/>
		</div>
	)
};

export default Slider;