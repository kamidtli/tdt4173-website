const url = "http://10.0.0.18:5000/"

export async function getPredictionFromDate(date: string) {
  let result: any = await fetch(url + date)
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(err => console.log("Error:", err));
  return result;
}