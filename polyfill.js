function App() {

    let timeout;
    const arr = () => {
        timeout = setTimeout(() => console.log('hello'), 1000);
    }

    useEffect(() => {
        // clearTimeout(timeout);
    }, [timeout])

    display: grid;
    
    grid-column: 2 4 4 2;
    // grid-column: 2;
}
