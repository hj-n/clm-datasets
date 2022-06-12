import tableData from "../json/data.json";

const Table = (props) => {

	console.log(tableData)

	// sort tableDAta by scores field
	tableData.sort((a, b) => { return b.score - a.score; });
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
					{tableData.map((row, i) => {
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
