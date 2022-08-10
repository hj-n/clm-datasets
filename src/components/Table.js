import { useSelector } from "react-redux";

const Table = (props) => {
	const tableData = props.tableData;

	const sliderVal = useSelector((state) => state.slider.value);

	// sort tableData by scores field
	tableData.sort((a, b) => { return b.score - a.score; });

	// filter tableData by slider value
	const filteredTableData = tableData.filter((item) => {
		return (
			item.score >= sliderVal[0] && item.score <= sliderVal[1]
		)
	});



	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[90rem] mx-auto mt-10 mb-10">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-6">Rank</th>
						<th scope="col" className="px-6 py-6">Datasets</th>
						<th scope="col" className="px-6 py-6">CLM</th>
						<th scope="col" className="px-6 py-6">Objects</th>
						<th scope="col" className="px-6 py-6">Classes</th>
						<th scope="col" className="px-6 py-6">Features</th>
						<th scope="col" className="px-6 py-6">Data & Label (comp)</th>
						{/* <th scope="col" className="px-6 py-6">Label (comp)</th> */}
						<th scope="col" className="px-6 py-6">Data & Label (npy)</th>
						{/* <th scope="col" className="px-6 py-6">Label (npy)</th> */}
					</tr>
				</thead>
				<tbody>
					{filteredTableData.map((row, i) => {
						return (
							<tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th scope="row" className="px-6 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{i + 1}</th>
								<th scope="row" className="px-6 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{row.name}</th>
								<td className="px-6 py-3 font-mono">{row.score.toFixed(5)}</td>
								<td className="px-6 py-3">{row.points}</td>
								<td className="px-6 py-3">{row.classes}</td>
								<td className="px-6 py-3">{row.dimensions}</td>
								<td className="px-6 py-3">
									<a href={`https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/compressed/${row.key}_bin.zip`}>
										<button type="button"
											class="text-sky-700 flex flex-row gap-1 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800">
											<div className="mt-[0.15rem] -ml-0.5">
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
											</div>
											Download _bin.zip
										</button>
									</a>

								</td>
								{/* <td className="px-6 py-3">
									<a href={`https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/compressed/${row.key}/label.bin`}
										className="font-medium text-sky-600 dark:text-sky-500 hover:underline">
											<button type="button"
											class="text-sky-700 flex flex-row gap-1 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800">
											<div className="mt-[0.15rem] -ml-0.5">
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
											</div>
											label.bin
										</button>
										</a>
								</td> */}
								<td className="px-6 py-3">
									<div className="flex-row">
										<a href={`https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/npy/${row.key}_npy.zip`}
											className="font-sm text-sky-600 dark:text-sky-500 hover:underline">
											<button type="button"
											class="text-sky-700 flex flex-row gap-1 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800">
											<div className="mt-[0.15rem] -ml-0.5">
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
											</div>
											Download _npy.zip
										</button>
											</a>
									</div>
								</td>
								{/* <td className="px-6 py-3">
									<a href={`https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/npy/${row.key}/label.npy`}
										className="font-medium text-sky-600 dark:text-sky-500 hover:underline">
											<button type="button"
											class="text-sky-700 flex flex-row gap-1 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800">
											<div className="mt-[0.15rem] -ml-0.5">
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
											</div>
											label.npy
										</button>
										</a>
								</td> */}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
};

export default Table;
