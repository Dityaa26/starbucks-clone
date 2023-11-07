import { useEffect, useState } from "react"

const useGiftCard = () => {
    const [card, setCard] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                  "https://www.starbucks.com/bff/proxy/orchestra/get-digital-gifts"
                );

                const data = await response.json();

                setCard(data);
            } catch (error) {
                console.log("Something went wrong while fetching card data");
            }
        }
        fetchData()
    }, [])

    return card;
}

export default useGiftCard;