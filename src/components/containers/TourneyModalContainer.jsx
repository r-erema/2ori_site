import {tourney} from "../../reducers";
import {showTourneyModalAction, SHOW_TOURNEY_MODAL} from "../../actions";
import {connect} from "react-redux";
import ShowModalView from "../views/ShowModalView.jsx";

const mapStateToProps= (state) => {
    return {
        tourney: tourney(state.tourney, SHOW_TOURNEY_MODAL)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (tourney) => {
            dispatch(showTourneyModalAction(tourney))
        }
    };
};

const TourneyModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowModalView);

export default TourneyModalContainer;