function renderResult(res) {
  if (res.ok) {
    return res.json();
  } else if (res.status === 500) {
    return res.status;
  } else {
    console.log(res.status);
    return Promise.reject(`'Error:' ${res.status}`);
  }
}

// export const baseUrl = "https://api.core.ac.uk";
export const baseUrl = "https://proxy.cors.sh/https://api.core.ac.uk";

export const getArticles = (searchterm, APIkey) => {
  return fetch(
    `${baseUrl}/v3/search/works/?q=abstract:${searchterm}&limit=50`,
    {
      method: "GET",
      headers: {
        "x-cors-api-key":
          "test_8d9b17d760cac3109ee51eccd205cf46161c86b25332695d0c8aca03f07ed177",
        "Content-Type": "application/json",
        Authorization: `Bearer ${APIkey}`,
      },
    }
  ).then((res) => renderResult(res));
};

function processDate(date) {
  let dateobj = new Date(date);
  const year = dateobj.getFullYear();
  const month = dateobj.getMonth() + 1;
  const day = dateobj.getDate();

  const formattedDate = `${month.toString().padStart(2, "0")} ${day
    .toString()
    .padStart(2, "0")}, ${year}`;

  return formattedDate;
}

function processAuthors(authors) {
  const formattedAuthors = authors.map((author) => author.name).join("; ");
  return formattedAuthors;
}

export const processArticles = (data) => {
  const result = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      abstract: item.abstract,
      downloadUrl: item.downloadUrl,
      doi: item.doi,
      createdDate: processDate(item.createdDate.toString()),
      authors: processAuthors(item.authors),
    };
  });
  return result;
};
