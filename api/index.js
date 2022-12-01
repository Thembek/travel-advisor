import axios from 'axios';

export const getPlacesData = async () => {
    try {
        await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundry`,
        {
            params: {
                bl_latitude: '25.15543993776612',
                tr_latitude: '25.41257834546226',
                bl_longitude: '51.39587210719369',
                tr_longitude: '51.62812119686502',
                limit: '30',
                currency: 'USD',
                lunit: 'km',
                lang: 'en_US'
            },
            headers: {
                "X-RapidAPI-Key": "YOUR_API_KEY",
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
        });
    } catch (error) {
        return null;
    }
};