import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';


export default class TourneyModalContainer extends React.Component {
    render() {
        let {tourney} = this.props;
        if (tourney !== null) {
            return <Dialog open={true} >
                <DialogContent>{
                    tourney.Groups.map((group, key) => <Table key={key}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{group.Name}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {group.Teams.map((row, key) =>
                                <TableRow key={key}>
                                    <TableCell>{row.Team.Name} | {row.Player.name}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>)
                }</DialogContent>
            </Dialog>
        }
        return null;
    }
}