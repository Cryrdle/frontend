import axios from 'axios';

// check fee to play
export default async function checkFee(req, res) {
  const { data } = await axios.get('http://localhost:3000/api/fee');

// play to play today's game
export default async function payToPlay(req, res) {
  const { address } = req.body;
  const { data } = await axios.post('http://localhost:3000/api/join-game', {
    address,
  });
  res.status(200).json(data);
}

// payment adds address to participants list
// useEffect listens for that change and creates user in backend, allowing guesses
export default async function createUser(req, res) {
  const { address } = req.body;
  const { data } = await axios.post('http://localhost:3000/api/users', {
    address,
  });
  res.status(200).json(data);
}

export default async function userIsPaid(req, res) {
  const { address } = req.body;
  const { data } = await axios.get(`http://localhost:3000/api/user-is-paid/${address}`);
  res.status(200).json(data);
}