
const Header = (props) => {

	return (
		<div>
			<h2>Sanity Check for External Clustering Validation Benchmarks using Internal Validation Measures</h2>
			<h3>Supplemental Material -- Datasets</h3>
			<p>
				On this webpage, you can find 96 labeled datasets used in the paper. 
				We provided not only the number of points, classes, and dimensions, 
				but also the scores made by the between-dataset calinski-harabsz index, 
				which works as a proxy for the class-label matching (CLM) scores. 
			</p>
			<p>
				You can filter datasets within a specific CLM range by adjusting the below slider.
				All datasets are in both compressed (.bin) and numpy (.npy) formats. 
				To download entire datasets at once, refer to our <a href="https://github.com/hj-n/ext-clustering-validation-datasets/blob/master/reader.py">GitHub repository</a>. 
				The reader of the compressed files is also available at the same link.
			</p>
		</div>
	)
};

export default Header;