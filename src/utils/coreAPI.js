function renderResult(res) {
  if (res.ok) {
    return res.json();
  } else if (res.status == 500) {
    return res.status;
  } else {
    console.log(res.status);
    return Promise.reject(`'Error:' ${res.status}`);
  }
}

export const baseUrl = "https://api.core.ac.uk";

export const getArticles = (searchterm, APIkey) => {
  return fetch(`${baseUrl}/v3/search/works/?q=abstract:${searchterm}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${APIkey}`,
    },
  }).then((res) => renderResult(res));
};

function processDate(date) {
  console.log(date);
  const dateArray = date.split("-");
  newDate = dateArray[1] + " " + dateArray[2] + " " + dateArray[0];
  return newDate;
}

export const processArticles = (data) => {
  console.log(data);
  const result = data.map((item) => {
    result.id = item.id;
    result.title = item.title;
    result.abstract = item.abstract;
    result.downloadUrl = item.downloadUrl;
    result.doi = item.doi;
    result.createdDate = processDate(item.createdDate);
    //   need to process date (2016-01-01T00:00:00)
    result.authors = item.authors;
    //   need to process authors from array into string
  });
  return result;
};
