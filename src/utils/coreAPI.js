function renderResult(res) {
  if (res.ok) {
    return res.json();
  } else {
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
