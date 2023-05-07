import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchThunkData } from "../Store/dataSlice"
import { useNavigate } from 'react-router-dom'
import { fetchThunkSingleData } from '../Store/singleDataSlice'
import Carousel from './Carousel'
import Loader from './Loader'


const MainPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data, status } = useSelector((state) => state.allData)
    const [harryData, setHarryData] = useState()





    useEffect(() => {
        dispatch(fetchThunkData())
    }, [])


    useEffect(() => {
        let newData = []
        for (let i = 0; i < 5; i++) {
            newData = [...newData, data[i]]
        }
        setHarryData(newData)
    }, [data])



    const openData = (id) => {
        navigate(`/${id}`)
    }



    const loadMore = () => {
        let loadData = []
        for (let i = harryData.length; i < harryData.length + 5; i++) {
            loadData = [...loadData, data[i]]
        }
        setHarryData(prev => {
            return [...prev, ...loadData]
        })

    }
    const filterData = (event) => {
        let filterData = data.filter((value) => {
            return value.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setHarryData(filterData)


    }



    return (
        <>



            <div className='MainCenter' style={{
                width: "50%",
                margin: "auto",
                display: "block"
            }}>


                <div className='d-flex' style={{ marginTop: "20px" }}>
                    <input class="form-control me-2" type="search" onChange={filterData} placeholder="Search for Characters" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
                {status !== "loading" ?
                    <div>


                        <div className='HarryPotter' style={
                            {
                                margin: "60px 0px"
                            }
                        }>

                            {harryData != undefined && harryData != null ?
                                harryData?.map((value) => {
                                    return (<>
                                        <div className='MapData' style=
                                            {{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "100%",
                                                border: "1px solid grey",
                                                padding: "16px",
                                                height: "150px",
                                                cursor: "pointer",
                                                marginBottom: "10px"
                                            }}
                                            onClick={() => { openData(value.id) }}>




                                            <div className="raw_data" style={{
                                                display: "flex",
                                                gap: "47px"
                                            }}>
                                                <div className="S-No" style={{ color: "black", fontWeight: "bold", fontSize: "20px" }} >{value?.id}</div>
                                                <div className='details'>
                                                    <div className="S-No" style={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}>{value?.name}</div>
                                                    <div className="S-No" style={{ color: "black", fontWeight: "lighter", fontSize: "15px" }} >{value?.species}</div>
                                                </div>
                                            </div>
                                            <div className='imageData'>
                                                {value?.image_url ?


                                                    <img src={value.image_url} height="130px" style={{}} /> :
                                                    <div className="S-No" style={{ color: "grey" }}>No Available Image</div>}

                                            </div>
                                        </div>




                                    </>
                                    )
                                }) : <></>}
                        </div>

                        {harryData?.length != data?.length ?
                            <div className='ButtonPagination' ><button onClick={loadMore}>Load More</button></div> :
                            <div className='ButtonPagination' style={{ color: "grey" }}>You Have Loaded All data</div>
                        }
                    </div > : <Loader xSize="27px" ySize="335px" />}
            </div >
        </>
    )
}

export default MainPage