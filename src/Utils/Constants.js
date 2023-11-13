export const LogInBgImg = "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5lyavS59mazOFnb55Z6znQ.png";
export const USER_AVTAR = "https://occ-0-2610-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
  };

  //process.env.REACT_APP_TMDB_KEY

export const POSTER_CDN = "https://image.tmdb.org/t/p/w500/";

export const LANGUAGE_CONSTANT = [{identifiyer: "en", name: "English"}, {identifiyer: "Hindi", name: "Hindi"},{identifiyer: "French", name: "French"}];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;