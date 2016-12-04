import Axios from 'axios'

export default {
    getRepos({keyWords, currentPage, per_page}) {
        const url = `https://api.github.com/search/repositories?q=${ keyWords }&sort=stars&order=desc&per_page=${ per_page }&page=${ currentPage }`
        return Axios.get(url)
            .then((res) => res.data)
            .catch((e) => console.log('error', e))
    }
}