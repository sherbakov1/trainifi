import axios from 'axios';

let id = 0;
// Objects constructor
function Train(data) {
    this.id = id++;
    this.trainNumber = data.trainNumber;
    this.trainType = data.trainType;
    this.departureDate = data.departureDate;
    this.runningCurrently = data.runningCurrently;
}

function unique(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
}

// GET
const api = {
  fetchTrains: (station) => {
    const getTrains = `https://rata.digitraffic.fi/api/v1/live-trains?station=${station}`;
    return axios.get(getTrains).then(response => {
        return Promise.all(response.data.map(item => {
          return axios.get(`https://rata.digitraffic.fi/api/v1/compositions/${item.trainNumber}?departure_date=${item.departureDate}`)
            .then(response => {
              const journey = response.data.journeySections;
              if(journey) {
                return {...new Train(item), journey}
              } else {
                return {...new Train(item),  journey: 'Composition not available'}
              }
            })
          }))
        })
        .then(response => {
          const trains = [];
          response.forEach(train => {
            if(Array.isArray(train.journey)) {
              train.journey.forEach(journey => {
                journey.locomotives = unique(journey.locomotives.map(loco => {
                  return `${loco.locomotiveType} ${loco.powerType}`
                }))
                journey.wagons = unique(journey.wagons.map(wagon => {
                  return `${wagon.wagonType}`
                }))
                trains.push({...train, journey, id: id++})
              })
            } else {
              trains.push(train)
            }
          })
          return trains;
        })
  }
}

export default api;
