import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default class GenerateTourneyButtonView extends React.Component {
    render() {
        let {generateTourney, tourneyInitData} = this.props;
        return <Button
            variant="contained"
            color="secondary"
            onClick={() => {
                axios.post('/tourney/create/', tourneyInitData).then(response => generateTourney(response.data))
            }}
        >
            Generate tourney
        </Button>;
    }
}