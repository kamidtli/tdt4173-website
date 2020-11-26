const url = "https://europe-west2-tdt4173-292607.cloudfunctions.net/api?date="

export async function getPredictionFromDate(date: string) {
  let result: any = await fetch(url + date, { mode: 'cors' })
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(err => console.log("Error:", err));
  return result;
}