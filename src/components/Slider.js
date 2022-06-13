import { setValue } from "./sliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Vega } from 'react-vega';



const Slider = (props) => {
	const tableData = props.tableData;

	const vegaData = {
		"scores": tableData.map(item => {return {"Class-Label Matching": item.score}})
	}

	const spec = {
		"width": 600,
		"height": 50,
		"mark": "tick",
		"encoding": {
			"x": {"field": "Class-Label Matching", "type": "quantitative"},
			"color": {
				"condition": {"param": "brush", "value": "red"},
				"value": "grey"
			}
		},
		"data": { name: "scores" },
		
		params: [{
			"name": "brush",
			"select": {type: "interval", encodings: ["x"]}
		}]
		
	}


	const sliderVar = useSelector((state) => state.slider.value);
	const dispatch = useDispatch();




	return (
		<div>
			<input type="range" value={sliderVar} min="0" max="100"
				onChange={(e) => {
					dispatch(setValue(e.target.value));
				}}
			/>
			<Vega spec={spec} data={vegaData} />
		</div>
	)
};

export default Slider;