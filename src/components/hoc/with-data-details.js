import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndecator from '../error-indecator';

const withDataDetails = (View) => {
    return class extends Component {
      static defaultProps = {
        itemId: 5
      }

      state = {
        item: null,
        image: null,
        loading: true,
        error: false
      };

      componentDidMount = () => this.updateData();

      componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId) {
          this.setState({loading: true});
          this.updateData();
        }
      }

      updateData = () => {
        const { itemId, getImageUrl, getData } = this.props;
        if(itemId){
          getData(itemId)
          .then((item) => this.setState({ item, image: getImageUrl(item), loading: false }))
          .catch((error) => this.setState({ error: true, loading: false }));
        }
        else this.setState({ loading: false });
      }

      render(){
        const { item, image, error, loading } = this.state;
        if (loading) return <Spinner />;
        if (error) return <ErrorIndecator />;
        return <View {...this.props} item={item} image={image} />
      }
  }
}


export default withDataDetails;
