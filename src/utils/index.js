import moment from 'moment';

export const formatTemperature = temp => Math.floor(temp - 273);

export const formatDate = date => moment.unix(date).format('YYYY-MM-DD, HH:MM');

export const formatDataForChart = data =>
  data.map(i => ({
    date: i.dt,
    min: formatTemperature(i.main.temp_min),
    max: formatTemperature(i.main.temp_max),
    avg: formatTemperature(i.main.temp),
  }));

export const enumErrorTypes = {
  400: 'Please type your city name',
  404: 'Please try another city',
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
