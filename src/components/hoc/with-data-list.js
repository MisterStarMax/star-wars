import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndecator from '../error-indecator';

const withDataList = (View) => {
  return class extends Component {
    state = {
      data: null,
      error: false
    };

    componentDidMount(){
      this.updateData();
    }

    updateData = () => {
      this.props.getData()
        .then((data) => this.setState({ data }))
        .catch((error) => this.setState({ error: true }));
    }

    render(){
      const { data, error } = this.state;
      if (error) return <ErrorIndecator />;
      if (!data && !error) return <Spinner />;
      return <View {...this.props} data={data} />
    }
  }
}

export default withDataList;
