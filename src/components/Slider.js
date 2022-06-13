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
		"signals": [
			{
				"name": "brush", "value": 0,
				"on": [
					{	"events": "rect:dragover", }
				]
			}
		],
		params: [{
			"name": "brush",
			"select": {type: "interval", encodings: ["x"]}
		}]
		
	}

	const dispatch = useDispatch();




	function dragBrush(...event) {
		console.log(event[1]["Class-Label Matching"])
		dispatch(setValue(event[1]["Class-Label Matching"]));


	}

	const signalListeners = { brush: dragBrush };


	return (
		<div>
			{/* <input type="range" value={sliderVar} min="0" max="100"
				onChange={(e) => {
					dispatch(setValue(e.target.value));
				}}
			/> */}
			<Vega spec={spec} data={vegaData} signalListeners={signalListeners}/>
		</div>
	)
};

export default Slider;