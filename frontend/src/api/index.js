import axios from 'axios'

export const postData = async (route, data = {}) => {
   try {
      const response = await axios.post(route, data)
      return response.data
   } catch (err) {
      return err.response.data
   }
}
