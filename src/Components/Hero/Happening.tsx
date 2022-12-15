import React from "react";
import styled from "styled-components";
import pix from "../Assets/pin.png";
import { AiOutlineEye } from "react-icons/ai";
const Happening = () => {
  return (
    <Container>
      <Wrapper>
        <h2>What's happening on Postman</h2>
        <p>
          Browse the largest network of APIs and share what you build with
          developers across the planet.{" "}
          <span>Explore the Public API Network →</span>
        </p>
        <Main>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={pix} alt="" />
                  <span>Pinterest</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Pinterest Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Public workspace that Pinterest uses to make Collections public.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          {/* <Card></Card> */}
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Happening;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;

  h2 {
    margin: 0;
    margin-top: 85px;
  }
  p {
    font-size: 15px;
  }
  span {
    color: blue;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 834px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 250px);
  gap: 30px;
  margin-top: 60px;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  /* background-color: red; */
  /* border: 1px solid black; */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 350ms;
  }
`;

const Holder = styled.div`
  width: 90%;
  height: 90%;
  /* background-color: gold; */

  h4 {
    margin: 0;
    margin-top: 15px;
    margin-bottom: 6px;
  }
  span {
    color: black;
    font-size: 13px;
  }
  p {
    font-size: 13px;
    display: flex;
  }
`;

const Pint = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  img {
    height: 50px;
  }

  button {
    border: 1px solid green;
    background-color: white;
    color: green;
    text-transform: uppercase;
    height: 17px;
    font-size: 9px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;

  span {
    color: black;
    margin-left: 12px;
    font-size: 16px;
  }
`;

const Ic = styled.div`
  margin-top: 3px;
  margin-right: 6px;
`;
