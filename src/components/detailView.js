import React from 'react';
import moment from 'moment';


import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';
import { loadLeaseData } from "../actions";


class DetailView extends React.Component {



    render() {

        let dateFormat = "MMM, Do YYYY";

        if (this.props.loading) {
            return <div>Loading</div>
        }

        if (this.props.error) {
            return <div>Something went wrong</div>
        }

        let data = this.props.data;
        //TODO: Remove this once server is up
        // data = {
        //     "id": "lease-b",
        //     "start_date": "2018-05-12",
        //     "end_date": "2018-11-16",
        //     "rent": 454,
        //     "frequency": "weekly",
        //     "payment_day": "tuesday"
        // };

        let row = [];

        if (data) {
            if (data.start_date) {

                let startDate = moment(data.start_date);
                let endDate = moment(data.end_date);

                let perDayAmount = data.rent / 7;

                let currentDate = moment(startDate);
                let key = 0;
                // eslint-disable-next-line
                if (currentDate.format('dddd').toLowerCase() != data.payment_day) {
                    // eslint-disable-next-line
                    let count = moment.weekdays().findIndex((d) => d.toLowerCase() == data.payment_day) + 1;
                    row.push(
                        <CustomTableRow
                            key={key++}
                            currentDate={currentDate.format(dateFormat)}
                            endDate={currentDate.add(count, "days").format(dateFormat)}
                            days={count + 1}
                            cost={(perDayAmount * count).toFixed(2)}  >
                        </CustomTableRow>
                    )
                }

                let hasPassed = false;

                while (currentDate && !hasPassed) {

                    //Adding one day for viewing purposes.
                    let previousDate = moment(currentDate).add(1, 'days');
                    let count;

                    if (data.frequency) {
                        switch (data.frequency) {
                            case "fortnightly":
                                count = 2;
                                currentDate.add(2, "w");
                                break;
                            case "monthly":
                                //TODO: Let's take this out and make configurable 
                                count = 4;
                                currentDate.add(1, 'M');
                                break;
                            case "weekly":
                                count = 1;
                                currentDate.add(1, 'w');
                                break;

                            default:
                                break;
                        }
                    }

                    if (endDate.diff(currentDate, "days") + 1 > 0) {

                        row.push(
                            <CustomTableRow
                                key={key++}
                                currentDate={previousDate.format(dateFormat)}
                                endDate={currentDate.format(dateFormat)}
                                days={currentDate.diff(previousDate, 'days') + 1}
                                cost={data.rent * count}  >
                            </CustomTableRow>
                        )
                    } else {
                        hasPassed = true;
                        currentDate = previousDate;
                    }


                }

                let count = endDate.diff(currentDate, 'days') + 1;
                if (count > 0) {
                    row.push(
                        <CustomTableRow
                            key={key++}
                            currentDate={currentDate.format(dateFormat)}
                            endDate={endDate.format(dateFormat)}
                            days={count}
                            cost={(perDayAmount * count).toFixed(2)}  >
                        </CustomTableRow>
                    )
                }

                return (
                    <TableContainer >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">From</TableCell>
                                    <TableCell align="center">To</TableCell>
                                    <TableCell align="center">Days</TableCell>
                                    <TableCell align="center">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )


            }
        }

        return (

            <div>
                Select a user
            </div>
        );
    }
}

function CustomTableRow(props) {

    if (props.currentDate) {

        return (
            <TableRow >
                <TableCell align="center">{props.currentDate}</TableCell>
                <TableCell align="center">{props.endDate}</TableCell>
                <TableCell align="center">{props.days}</TableCell>
                <TableCell align="center">{props.cost}</TableCell>
            </TableRow>
        );

    } else {

        return (
            <Grid container direction="row" >
                <Grid item xs={12} ><Skeleton animation="wave" variant="rect" /></Grid>
                <Grid item xs={12} ><Skeleton animation="wave" variant="rect" /></Grid>
                <Grid item xs={12} ><Skeleton animation="wave" variant="rect" /></Grid>
                <Grid item xs={12} ><Skeleton animation="wave" variant="rect" /></Grid>
            </Grid>
        );

    }


}

const mapStateToProps = state => ({
    data: state.leaseDetailReducer.data,
    loading: state.leaseDetailReducer.loading,
    error: state.leaseDetailReducer.error,
});
const mapDispatchToProps = {
    loadLeaseData
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailView);