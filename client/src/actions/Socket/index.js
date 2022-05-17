import socketIOClient from "socket.io-client";
const ENDPOINT = "https://app-quizzicle.herokuapp.com/";
export const socket = socketIOClient(ENDPOINT);