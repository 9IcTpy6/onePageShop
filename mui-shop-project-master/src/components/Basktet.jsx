import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Divider, ListItemIcon, ListItemText, Typography} from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BasketItem from "./BasketItem";



const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order =[],
        removeFromOrder
    } = props;
    return (
        <Drawer
        anchor='right'
        open={cartOpen}
        onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasketIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Коризна'/>
                </ListItem>
                <Divider/>

                {!order.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ): (<>
                {order.map((item)=> (
                        <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item}/>
                    ))}
                    <Divider/>
                    <ListItem>
                        <Typography sx={{fontWeight: 700}}>
                            Общая стоимость: {' '}
                            {order.reduce((acc, item)=> {
                                return acc + item.price * item.quantity;
                            }, 0)}{''} грн.
                        </Typography>
                    </ListItem>
                    </>
                )}
            </List>
        </Drawer>
    )
}

export default Basket