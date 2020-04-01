import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { usePosition } from "../components/usePosition"

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
        })
  }, [longitude, latitude, lang])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.message}</h1>
    </Layout>
  )
}

export default IndexPage
