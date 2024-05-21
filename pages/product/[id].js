import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import ProductReview from "@/components/ProductReview";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import { styled } from "styled-components";


const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media screen and (min-width: 768px){
        grid-template-columns: .8fr 1.2fr;
    }
    gap: 40px;
    margin: 40px 0;
`;

const PriceRow = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Price = styled.span`
    font-size: 1.4rem;
`;
const Decoration= styled.span`
    font-weight: 300;
    color: #000000;
`

export default function ProductPage({product}){
    const {addProduct} = useContext(CartContext);
    return (
        <>
            <Header></Header>
            <Center>
                <ColWrapper>
                    <WhiteBox>
                        <ProductImages images={product.images}></ProductImages>
                    </WhiteBox>
                    <div>
                        <Title>{product.title}</Title>
                        <p>{product.description}</p>
                        <PriceRow>
                            <div><Price>${product.price}</Price></div>
                            <div><Button primary onClick={() => addProduct(product._id)}><CartIcon></CartIcon> Thêm vào giỏ</Button></div>
                        </PriceRow> 
                        <p>Mô tả</p>
                        <Decoration>{product.description}</Decoration>     
                    </div>
                </ColWrapper>
                <ProductReview product={product}>

                </ProductReview>
               
            </Center>
        </>
    );
}

export async function getServerSideProps(context){
   await mongooseConnection();
   const {id} = context.query;
   const product = await Product.findById(id);
   return {
     props: {
       product: JSON.parse(JSON.stringify(product)),
     }
   }
}