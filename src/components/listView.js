import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';

import GridList from '@material-ui/core/GridList';


import ListItem from './listItem';

import { connect } from 'react-redux';
import { loadLeaseData } from "../actions";

class ListView extends React.Component {

    itemOnClick(item){
        console.log(JSON.stringify(item));
        this.props.loadLeaseData(item.id);
    }

    render() {
 
        return (
            <GridList cols={1}   >
                {this.props.list !== undefined ? (

                    <div>
                        {
                            this.props.list.map(item => (
                                <ListItem onClick={(item)=> this.itemOnClick(item) } key={item.id} item={item} />

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

            </GridList>
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


