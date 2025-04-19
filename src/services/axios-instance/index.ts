import axios from 'axios';
import { SERVER_API_URL } from '../../config';

const axiosInstance = axios.create({
  baseURL: SERVER_API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let errMessage = error.message;
    if (error.response) {
      // 요청은 정상 전송 되었으나, 서버가 에러를 내뱉음
      console.debug('요청 정상, 서버 에러');
      errMessage = error.response.data.message;
    } else if (error.request) {
      // 요청이 전송 되었으나, 응답이 수신되지 않았음
      console.debug('요청 전송, 응답 없음');
    } else {
      // 오류가 발생한 요청을 설정하는 동안 문제가 발생함.
      console.debug('요청을 설정하는 동안 문제 발생');
    }
    return Promise.reject(errMessage);
  },
);

export default axiosInstance;
