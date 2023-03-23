export default function handler(req, res) {
  let result = {name: 'john snow'};
  res.status(200).json(result)
}
