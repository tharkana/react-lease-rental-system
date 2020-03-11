import React from 'react';
import Grid from '@material-ui/core/Grid';



import { connect } from 'react-redux';
import { loadLeaseList } from "./actions";

// import logo from './logo.svg';
import './App.css';

import ListView from './components/listView';
import DetailView from './components/detailView';



class App extends React.Component {

  componentDidMount() {
    this.props.loadLeaseList();
  };

  render() {

    // console.log(JSON.stringify(this.props.data));

    if (this.props.loading) {
      return <div>Loading</div>
    }

    let data = [{id:'a', tenant:'a'}, {id:'b', tenant:'b'}]

    return (

      

      <Grid container justify="center" spacing={2}>
        <Grid item xs={4}>
          {/* <ListView list={this.props.data} /> */}
          <ListView list={data} />
        </Grid>
        <Grid item xs={8}>
          <DetailView />
        </Grid>
      </Grid>


    );
  }
}

const mapStateToProps = state => ({
  data: state.leastListReducer.data,
  loading: state.leastListReducer.loading,
  error: state.leastListReducer.error,
});
const mapDispatchToProps = {
  loadLeaseList
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

