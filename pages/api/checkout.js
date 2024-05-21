import { mongooseConnection } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { Setting } from "@/models/Setting";
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handle(req, res){
    if (req.method !== 'POST'){
        res.json('should be a POST request');
        return;
    }
    const {
        name,
        email,
        city,
        postalCode,
        streetAddress,
        country,
        cartProducts,
    } = req.body;
    console.log(req.body);
    await mongooseConnection();
    const productsIds = cartProducts;
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({_id: uniqueIds});

    let line_items = [];
    for (const productId of uniqueIds){
        const productInfo = productsInfos.find(p => p._id.toString() === productId);
        const quantity = productsIds.filter(id => id === productId)?.length || 0;
        if (quantity > 0 && productInfo) {
            line_items.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: {name: productInfo.title},
                    // product_data: {importance: productInfo.images},
                    unit_amount: parseInt(quantity * productInfo.price)*100 ,
                },
            });
        }
    }

    const orderDoc = await Order.create({
        line_items,name,email,city,postalCode,streetAddress,country,paid:false,
    });
    const shippingFeeSetting = await Setting.findOne({name:'shippingFee'}); 
    const feeship =  parseInt(shippingFeeSetting.value||'0')*100;
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + '/cart?success=1',
        cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
        metadata: {orderId:orderDoc._id.toString()},
        shipping_options:[
            {
                shipping_rate_data:{
                    display_name:'shipping fee',
                    type:'fixed_amount',
                    fixed_amount:{amount:feeship,currency:'USD'}
                }
            }
        ]

    });
    res.json({
       url: session.url
    })
}