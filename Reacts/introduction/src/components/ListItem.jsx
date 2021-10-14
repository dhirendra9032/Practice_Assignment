 export function ListItem(props){
    console.log(props.age,props.name)

    return <div><h1>Hello Mr {props.name} and your age is {props.age}</h1></div>
}