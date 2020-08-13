export function fetchPopularRepos(language) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }

      return data.items;
    });
}

export function fetchData(language) {
  const endpoint = window.encodeURI(`http://localhost:3000/api`);

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (language === "All") {
        return data;
      } else {
        return data.filter((d) => d["language"] === language);
      }
    });
}
