import React from "react"

import { Grid } from "@material-ui/core"

import "./featuredVideos.scss"

export default function FeaturedVideos(props) {
    const data = props.data
    const CardContent = props.card
    const type = props.type
    const type2 = props.data2
    return (
        <div id="featuredVideos">
            <div className="feature-main">
                <Grid className="cards cards-main" container spacing={2}>
                    {data &&
                        data.length > 0 &&
                        data.map((cardData, i) => {
                            return (
                                <Grid key={i} item xs={12} xl={type === "books" || type === "webtoon" ? 2 : 3} lg={4} md={6} sm={12}>
                                    <CardContent selectedData={cardData} allData={props.data} />
                                </Grid>
                            )
                        })}
                </Grid>
            </div>
        </div>
    )
}
