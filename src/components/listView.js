import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';


import { connect } from 'react-redux';
import { loadLeaseData } from "../actions";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex : undefined
        }
    }

    itemOnClick(item, index) {
        console.log(JSON.stringify(item));
        this.props.loadLeaseData(item.id);
        this.setState({
            selectedIndex: index
          });
    }

    render() {

        return (
            
            <List component="nav" aria-label="main mailbox folders">

                {this.props.list !== undefined ? (

                    <div>
                        {
                            this.props.list.map((item, index) => (
                                <ListItem
                                    key={index}
                                    button
                                    selected={this.state.selectedIndex === index}
                                    onClick={event => this.itemOnClick(item, index)}
                                >
                                    <ListItemIcon>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.tenant} />
                                </ListItem>

                            ))
                        }
                    </div>
                ) : (
                        <div>
                            <Skeleton animation="wave" variant="rect" />
                            <br />
                            <Skeleton animation="wave" variant="rect" />
                            <br />
                            <Skeleton animation="wave" variant="rect" />
                            <br />
                            <Skeleton animation="wave" variant="rect" />
                            <br />
                            <Skeleton animation="wave" variant="rect" />
                            <br />
                            <Skeleton animation="wave" variant="rect" />
                            <br />
                            <Skeleton animation="wave" variant="rect" />
                        </div>
                    )}
            </List>
        );
    }
}

//TODOTK: For reference. 
// ListView.propTypes = {
//     classes: PropTypes.object.isRequired,
//     data: PropTypes.array.isRequired
// };

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
)(ListView);


