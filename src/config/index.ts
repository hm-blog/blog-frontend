const SERVER_IP = import.meta.env.REACT_APP_SERVER_IP;
const SERVER_PORT = import.meta.env.REACT_APP_SERVER_PORT;

const SERVER_BASE_URL = `http://${SERVER_IP}:${SERVER_PORT}`;
export const SERVER_API_URL = `${SERVER_BASE_URL}/api`;
export const SERVER_IMAGE_URL = `${SERVER_BASE_URL}/images`;
