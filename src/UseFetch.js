import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const products = await response.json();
            setProducts(products);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    fetchData();
}, []);

    return { products, loading }
}



// import { useEffect, useState } from 'react'

// export function useFetch(url) {
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         fetch(url)
//         .then(response => response.json())
//         .then(products => setProducts(products))
//     }, [])

//     return { products }
// }


