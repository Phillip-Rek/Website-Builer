import { mainAppOutput } from '../index';
export let users = [
    { name: "phillip", lastname: "rekhotho" },
    { name: "octavia", lastname: "miller" }
]

export const addUser = (user) => {
    users.push(user);
    mainAppOutput();
}