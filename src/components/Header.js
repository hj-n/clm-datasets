
const Header = (props) => {

	return (
		<div className="max-w-[90rem] mx-auto mt-20 py-5">
			<h2 className="text-5xl text-center font-bold">Sanity Check for External Clustering Validation Benchmarks <br /> using Internal Validation Measures</h2>
			<h3 className="text-center font-medium text-2xl my-10">Supplemental Material - Datasets</h3>
			<p className="w-3/5 mx-auto leading-relaxed">
				In this webpage, you can find 96 labeled datasets used in the paper.
				We provided not only the number of points, classes, and dimensions,
				but also the scores made by the between-dataset calinski-harabsz index,
				which works as a proxy for the cluster-label matching (CLM) scores.
				You can filter datasets within a specific CLM range by adjusting the below slider.
				All datasets are in both compressed (.bin) and numpy (.npy) formats.
			</p>
			<p className="w-3/5 mx-auto leading-relaxed mt-5">

				To download entire datasets at once, refer to our <a href="https://github.com/hj-n/labeled-datasets" className="text-sky-600 hover:underline">GitHub repository</a>.
				The reader of the compressed files is also available at the same link.
				Note that we also provided a summary statistic of the datasets consists of the basics infos (e.g., objects, classes) along with the CLM scores computed by various measures. 
				You can find it at our <a href="https://github.com/hj-n/labeled-datasets" className="text-sky-600 hover:underline">repository</a> or
				directly download the file via 
				<a href="https://github.com/hj-n/ext-clustering-validation-datasets/raw/master/summary.csv" className="text-sky-600 hover:underline"> the link</a>.
			</p>
		</div>
	)
};

export default Header;