import axios from "axios";

const baseUrl = "https://api.covid19api.com"

const StatApi = {
    getSummaryData() {
        return axios({ method: "GET", "url": `${baseUrl}/summary` }).catch(error => {
            console.log(error)
        })
    },

    getCountryData(country) {
        return axios({ method: "GET", "url": `${baseUrl}/total/dayone/country/${country}` }).catch(error => {
            console.log(error)
        })
    }
}

export default StatApi
