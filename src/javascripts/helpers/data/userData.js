import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        // POST OBJECT TO FARMERS
        axios.post(`${baseUrl}/farmers.json`, {
          image: userObj.image,
          uid: userObj.uid,
          displayName: userObj.displayName,
          email: userObj.email,
          lastSign: userObj.lastSign,
        });

        // use axios.post
        // pass it url
        // ${baseUrl}/farmers.json
        // pass it an object that's going to be posted
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
