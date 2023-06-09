import React from "react";

export function MyHooks({title, id}: {title: string, id?: string}) {
    // React.useEffect(()=> {
    //     console.log('componentDidmount');
    //     console.log('componentWillUpdate');
    // });

    // React.useEffect(()=> {
    //     console.log('componentDidmount');
    //     return ()=> {
    //         console.log('componentWillUnmount')
    //     }
    // }, []);

    // React.useEffect(()=> {
    //     console.log('componentWillRecieveProps: ', title);
    // }, [title]);

    const [isMounted] = useIsMounted()

    React.useEffect(()=> {
        console.log('isMounted', isMounted);
    }, [isMounted])

    return (
        <div>{title} {id}</div>
    )
}

function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(()=> {
        setIsMounted(true)
    }, [])

    return [isMounted]
}