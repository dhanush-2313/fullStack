import { Delete } from "./Delete"

export const Home = (props:any) =>{
    const username = `${props.username}`;
    return <>
    <br />
    <br />
    Home
    <p>{username}</p>
    <Delete username={username} />
    </>
}