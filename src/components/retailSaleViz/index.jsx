import { connect } from "react-redux";
import Display from "./display.jsx";

const mapStateToProps = state => {
	return {
		retailSaleData: state.loadDataReducer.retailSaleData
	};
};

const Container = connect(mapStateToProps)(Display);

export default Container;
