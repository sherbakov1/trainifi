import axios from 'axios';

const api = {
  fetchTrains: (station) => {
    const trains = [];
    const getTrains = `https://rata.digitraffic.fi/api/v1/live-trains?station=${station}`;
    return axios.get(getTrains)
    .then(response => {
      response.data.forEach((item)=>{
        const trainNumber = item.trainNumber;
        const departureDate = item.departureDate;
        const trainType = item.trainType;
        const runningCurrently = item.runningCurrently;
        trains.push({
          trainNumber,
          trainType,
          departureDate,
          runningCurrently
        })
      })
      return trains;
    })
  },

  fetchComposition: (trains) => {
    const trainsComposition = [];
    trains.forEach(item => {
      const getComposition = `https://rata.digitraffic.fi/api/v1/compositions/${item.trainNumber}?departure_date=${item.departureDate}`;
      axios.get(getComposition).then(response => {
          if (response.data.journeySections) {
            const journeySections = response.data.journeySections[0];
            return trainsComposition.push({...item, journeySections, ...{message: 'OK'}})
          }
          return null;
      })
    })
    return trainsComposition;
  }

}

export default api;
