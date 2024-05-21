import Center from "@/components/Center";
import Header from "@/components/Header";

import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/components/Button";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import Input from "@/components/Input";
import { RevealWrapper } from "next-reveal";
import axios from "axios";
import Spinner from "@/components/Spinner";
import ProductBox from "@/components/ProductBox";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import '@/i18n/i18n.js';
const ColsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin: 40px 0;
`;
const ColsWrapperOrder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 40px 0;
  table {
    width: 100%;
  }
  tr td {
    margin-left: 20px;
  }
`;
const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;
const WishedProductGird = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export default function AccountPage() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [addressLoaded, setAddressLoaded] = useState(false);
  const [wishlistLoaded, setwishlistLoaded] = useState(false);
  const [WishedProduct, setWishedProduct] = useState([]);
  const [OrderProduct, setOrderProduct] = useState([]);
  const {t}= useTranslation();
  async function logout() {
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL
    });
  }
  async function login() {
    await signIn("google");
  }
  function saveAddress() {
    const data = { name, email, city, streetAddress, postalCode, country };
    axios.put("/api/address", data);
  }
  useEffect(() => {
    if (!session) {
      setAddressLoaded(true);
      setwishlistLoaded(true);
      return;
    }

    axios.get("/api/address").then((response) => {
      if (response.data) {
        setCity(response.data.city);
        setPostalCode(response.data.postalCode);
        setStreetAddress(response.data.streetAddress);
        setCountry(response.data.country);
      }
      setAddressLoaded(true);
    });
    axios.get("/api/wishlist").then((response) => {
      if (response.data) {
        setWishedProduct(response.data.map((wp) => wp.product));
      }
      setwishlistLoaded(true);
    });
    axios.get("/api/orders?email=" + session.user.email).then((res) => {
      setOrderProduct(res.data);
    });
    if (session) {
      setName(session.user.name);
      setEmail(session.user.email);
    }
  }, [session]);
  function productRemoveFromWishlist(idtoRemove) {
    setWishedProduct((product) => {
      return [...product.filter((p) => p._id.toString() != idtoRemove)];
    });
  }
  return (
    <>
       <Header t={t}/>
      <Center>
        <ColsWrapper>
          <div>
            <RevealWrapper delay={0}>
              <WhiteBox>
                <h2>Danh sách yêu thích</h2>
                {!wishlistLoaded && (
                  <>
                    <Spinner fullWidth={true}></Spinner>
                  </>
                )}
                {wishlistLoaded && (
                  <>
                    <WishedProductGird>
                      {WishedProduct.length > 0 &&
                        WishedProduct.map((wp) => (
                          <ProductBox
                            key={wp._id}
                            {...wp}
                            wished={true}
                            onRemoveFromWishlist={productRemoveFromWishlist}
                          >
                            {" "}
                          </ProductBox>
                        ))}
                    </WishedProductGird>
                    {WishedProduct.length === 0 && (
                      <>
                        {session && <p>Không có sản phẩm yêu thích</p>}
                        {!session && (
                          <p>Đăng nhập để thêm sản phẩm yêu thích</p>
                        )}
                      </>
                    )}
                  </>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
          <div>
            <RevealWrapper delay={100}>
              <WhiteBox>
                <h2>Chi tiết tài khoản</h2>
                {!addressLoaded && (
                  <>
                    <Spinner fullWidth={true}></Spinner>
                  </>
                )}

                {session && (
                  <>
                    {addressLoaded && (
                      <>
                        <Input
                          type="text"
                          placeholder="Name"
                          value={name}
                          name="name"
                          disable
                        ></Input>
                        <Input
                          type="text"
                          placeholder="Email"
                          value={email}
                          name="email"
                          disable
                        ></Input>
                        <CityHolder>
                          <Input
                            type="text"
                            placeholder="City"
                            value={city}
                            name="city"
                            onChange={(ev) => setCity(ev.target.value)}
                          ></Input>
                          <Input
                            type="text"
                            placeholder="Post Code"
                            value={postalCode}
                            name="postalCode"
                            onChange={(ev) => setPostalCode(ev.target.value)}
                          ></Input>
                        </CityHolder>
                        <Input
                          type="text"
                          placeholder="Street Address"
                          value={streetAddress}
                          name="streetAddress"
                          onChange={(ev) => setStreetAddress(ev.target.value)}
                        ></Input>
                        <Input
                          type="text"
                          placeholder="Country"
                          value={country}
                          name="country"
                          onChange={(ev) => setCountry(ev.target.value)}
                        ></Input>

                        <Button black={1} block={1} onClick={saveAddress}>
                          Lưu
                        </Button>
                        <hr />
                      </>
                    )}
                    <Button primary onClick={logout}>
                      {" "}
                      Thoát
                    </Button>
                  </>
                )}
                {!session && (
                  <Button primary onClick={login}>
                    {" "}
                    Đăng nhập
                  </Button>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
        </ColsWrapper>
        <ColsWrapperOrder>
          <div>
            <RevealWrapper delay={100}>
              <WhiteBox>
                <h2>Chi tiết giỏ hàng</h2>
                {!addressLoaded && (
                  <>
                    <Spinner fullWidth={true}></Spinner>
                  </>
                )}

                {session && (
                  <>
                    {addressLoaded && (
                      <>
                        <table className="basic">
                          <thead>
                            <tr>
                              <th>Ngày</th>
                              <th>Duyệt</th>
                              <th>Thông tin</th>
                              <th>Sản phẩm</th>
                            </tr>
                          </thead>
                          <tbody>
                            {OrderProduct.length > 0 &&
                              OrderProduct.map((order, index) => (
                                <tr key={index}>
                                  <td>
                                    {new Date(order.createdAt).toLocaleString()}
                                  </td>
                                  <td
                                    className={
                                      order.paid
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }
                                  >
                                    {order.paid ? "YES" : "NO"}
                                  </td>
                                  <td>
                                    {order.name} {order.email}
                                    <br />
                                    {order.city} {order.postalCode}{" "}
                                    {order.country}
                                    <br />
                                    {order.streetAddress}
                                  </td>
                                  <td>
                                    {order.line_items.map((l) => (
                                      <>
                                        {l.price_data?.product_data.name} x
                                        {l.quantity}
                                        <br />
                                      </>
                                    ))}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </>
                    )}
                  </>
                )}
                {!session && <p>Đăng nhập để xem thông tin giỏ hàng</p>}
              </WhiteBox>
            </RevealWrapper>
          </div>
        </ColsWrapperOrder>
      </Center>
      <Footer t={t}></Footer>
    </>
  );
}
