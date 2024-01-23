import React from 'react'

const commonHoc = (Child) => {
    let Logic =()=>{
        let [ count , setCount] = React.useState(0)


        function handleCount(){
            setCount(count+1)
        }
        return <Child handleCount={handleCount} count={count}/>
    }
    return Logic
}
export default commonHoc