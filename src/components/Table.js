import { useSelector } from "react-redux";

const Table = (props) => {
	const tableData = props.tableData;

	const sliderVar = useSelector((state) => state.slider.value);

	// sort tableData by scores field
	tableData.sort((a, b) => { return b.score - a.score; });

	// filter tableData by slider value
	const filteredTableData = tableData.filter((item) => {
		return item.score >= (100 - sliderVar) / 100;
	});



	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Datasets</th><th>CLM</th><th>Points</th><th>Classes</th><th>Dims</th> 
						<th>Data (comp)</th><th>Label (comp)</th><th>Data (npy)</th><th>Label (npy)</th>
					</tr>
				</thead>
				<tbody>
					{filteredTableData.map((row, i) => {
						return (
							<tr key={i}>	
								<td>{row.name}</td>
								<td>{row.score}</td>
								<td>{row.points}</td>
								<td>{row.classes}</td>
								<td>{row.dimensions}</td>
								<td><a href={`https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/compressed/${row.key}/data.bin`}>data.bin</a></td>
								<td><a href={`https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/compressed/${row.key}/label.bin`}>label.bin</a></td>
								<td><a href={`https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/npy/${row.key}/data.npy`}>data.npy</a></td>
								<td><a href={`https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/npy/${row.key}/label.npy`}>label.npy</a></td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
};

export default Table;
