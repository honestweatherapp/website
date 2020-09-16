import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import Div100vh from "react-div-100vh"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { usePosition } from "../components/usePosition"

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  text-align: center;
`

const Message = styled.h1`
  color: #48c6ef;
  display: block;
  margin: 0;
  font-weight: 700;
  font-size: 4em;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25em;
`

const Temperature = styled.h3`
  color: #fff;
  margin: 0;
  font-weight: 400;
  font-size: 1.5em;
`

const IndexPage = () => {
  const { latitude, longitude, lang, error } = usePosition()
  const [data, setData] = useState([])

  useEffect(() => {
    if (longitude && latitude && lang)
      axios
        .get(
          `https://honestweather-api.herokuapp.com/api/v1/weather?long=${longitude}&lat=${latitude}&lang=${lang}&units=metric`
        )
        .then(json => {
          setData(json.data)
          console.log(json.data)
        })
  }, [latitude, longitude, lang])

  return (
    <Div100vh>
      <Layout>
        <SEO />
        <Container>
          {error ? (
            <h3 style={{ color: "#ff5555", textTransform: "uppercase" }}>
              {error}
            </h3>
          ) : (
            ""
          )}
          {data.message ? (
            ""
          ) : (
            <h3 style={{ color: "#fff", textTransform: "uppercase" }}>
              Please allow geolocation
            </h3>
          )}
          <Message>{data.message}</Message>
          <Temperature>
            {data.main ? `aka. ${Math.round(data.main.feels_like)}°C` : ""}
          </Temperature>
        </Container>
      </Layout>
    </Div100vh>
  )
}

export default IndexPage
