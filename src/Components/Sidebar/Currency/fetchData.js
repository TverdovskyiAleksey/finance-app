const URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

export async function fetchData() {
  try {
    const res = await fetch(URL);

    return res.json();
  } catch (err) {
    return err;
  }
}