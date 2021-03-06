import Main from './Main';
import { connect } from 'react-redux';
import { weatherSelector, errorSelector, loadingSelector } from '../../store/selectors';
import { fetchCity } from '../../store/actions/city';

const mapStateToProps = state => {
  return {
    weatherList: weatherSelector(state),
    error: errorSelector(state),
    loading: loadingSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCity: cityName => dispatch(fetchCity(cityName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
