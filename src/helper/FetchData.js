import axios from "axios";
export const fetchData = async () => {
  
  const response = await axios.get('https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json')
  
 
  return response?.data;
};