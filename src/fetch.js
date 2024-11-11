const fetchCall = async () => {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchCall;
