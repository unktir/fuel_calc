import { useState, useEffect } from 'react';
import axios from 'axios';
import TripChart from './components/TripChart.jsx';

function App() {
  const [cars, setCars] = useState([]);
  const [tripData, setTripData] = useState({
    car: '',
    distance: 0,
    fuelPrice: 0,
  });
  const [result, setResult] = useState(null);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get('/api/cars')
      .then((response) => setCars(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/trips', tripData);
      setResult(response.data);
      setTrips([...trips, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Список машин</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.name}>
            {car.name} - {car.fuel_consumption} л/100км
          </li>
        ))}
      </ul>

      <h2>Введите данные о поездке</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={tripData.car}
          onChange={(e) => setTripData({ ...tripData, car: e.target.value })}
        >
          <option value="">Выберите машину</option>
          {cars.map((car) => (
            <option
              key={car.name}
              value={car.name}
            >
              {car.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Расстояние (км)"
          value={tripData.distance}
          onChange={(e) =>
            setTripData({ ...tripData, distance: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Цена топлива (руб/л)"
          value={tripData.fuelPrice}
          onChange={(e) =>
            setTripData({ ...tripData, fuelPrice: e.target.value })
          }
        />
        <button type="submit">Рассчитать</button>
      </form>

      {result && (
        <div>
          <h3>Результат расчета</h3>
          <p>Машина: {result.car}</p>
          <p>Расход топлива: {result.total_fuel.toFixed(2)} л</p>
          <p>Стоимость поездки: {result.total_cost.toFixed(2)} руб</p>
        </div>
      )}

      {trips.length > 0 && <TripChart trips={trips} />}
    </div>
  );
}

export default App;
