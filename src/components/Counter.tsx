import { useState } from "react"

export const Counter:React.FC = () =>{
    const [value ,setvalue] = useState<number>(0)

    interface Person {
        name:string;
        age: number;
        id: number
    }


    const increase = ():void =>{
        setvalue(value+1)
        printer()

    }

   

    const decrease = ():void =>{
        setvalue(value-1)
        printer()
    }
 
    const logger = (name:string, age:number): Person  =>{
        return {name, age , id:value}
      
        
    }

    const printer = () =>{
        const id = logger("Peter", 15)
        console.log(`Name is ${id.name} and age is ${id.age} with id ${id.id}`)
        
    }

    return(
        <>
        <div>Counter: {value}</div>
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>


        </>

    )   
}