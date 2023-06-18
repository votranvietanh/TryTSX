import Button from "@material-ui/core/Button";
///Types
import { CartItemType } from "../App";
//Styles
import { Wrapper } from "./Item.styles";

type Props = { 
    item: CartItemType,
    handleAddToCard: (clickedItem: CartItemType) => void;

}

export const Item: React.FC<Props> = ({ item, handleAddToCard }) => (
 
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCard(item)}>Add to cart</Button>
        </Wrapper>
    
);