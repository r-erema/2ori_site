import {tourney} from "../../reducers";
import {generateTourneyAction, GENERATE_TOURNEY} from "../../actions";
import {connect} from "react-redux";
import GenerateTourneyButtonView from "../views/GenerateTourneyButtonView.jsx";

const mapStateToProps= (state) => {
    return {
        tourney: tourney(state.tourney, GENERATE_TOURNEY),
        tourneyInitData: {
            tourneyTeamsCount: state.tourneyTeamsCount,
            players: state.players
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        generateTourney: (tourney) => {
            dispatch(generateTourneyAction(tourney))
        }
    };
};

const GenerateTourneyButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GenerateTourneyButtonView);

export default GenerateTourneyButtonContainer;