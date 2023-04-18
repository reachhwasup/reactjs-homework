export function Welcome(props){
    return <h1>Welcome, {props.title}</h1>
}
const Avatar = ({imgURL,size}) => {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
        style={avatar}
        src={imgURL}
        width={size}
        height={size}
        />
    )
}
export default Avatar

const avatar={
    borderRadius : "50%",
    padding : '10px',
    

}