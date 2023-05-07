import React, { useEffect } from 'react'
import { fetchThunkSingleData } from '../Store/singleDataSlice'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const CharacterData = () => {

    const { data, status } = useSelector((state) => state.singleData)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchThunkSingleData(id))
    }, [])
    return (

        <>
            {status !== "loading" ?
                <div className='dataFlex' style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-around",
                    margin: "85px 0px"
                }}>


                    <div className='allData' style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2 , 1fr)",
                        columnGap: "39px",
                        rowGap: "16px",
                        margin: "0px 71px"
                    }}>
                        {Object.entries(data).map(([key, value]) => {
                            return (<>
                                {key !== "image_url" && typeof (value) !== "object" ?

                                    <div className='charDetails'>{(key.charAt(0).toUpperCase() + key.substring(1)).split("_").join("")} - {value}</div> :
                                    <>
                                    </>


                                }
                            </>)
                        })}
                    </div>


                    <div className='CharImage' style={{ margin: "0px 75px" }}><img src={data["image_url"]} style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }} height={"340px"} /><h4 style={{ margin: "5px 0px" }}><center>{data["name"]}</center></h4></div>
                </div> : <Loader ySize="48%" xSize="25%" />
            }

            <div className='OtherDeatils'>
                <h1 style={
                    {
                        display: "block",
                        width: "16vw",
                        margin: "0 auto"
                    }
                }> Other Details </h1>
                <div className='Grid-Flex' style={{

                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    margin: "0px 10px"

                }}>

                    {Object.entries(data)?.map(([key, value]) => {
                        return (<>


                            {typeof (value) == "object" && value !== null ?

                                value?.length >= 0 && value.length != 0 ?
                                    <>
                                        <div className='wrapedDeatils'>
                                            <br /><br />
                                            <div className='charDetails'><h4>{(key.charAt(0).toUpperCase() + key.substring(1)).split("_").join(" ")}</h4></div>
                                            <br /><br />
                                            {value.map((innerValue) => {
                                                return (<>



                                                    {Object.entries(innerValue).map(([inKey, inValue]) => {
                                                        return <div className='charDetails'>{(inKey.charAt(0).toUpperCase() + inKey.substring(1)).split("_").join(" ")} - {inValue}</div>

                                                    })}
                                                </>)
                                            })}

                                        </div>
                                    </>
                                    : <>
                                        <div className='wrapedDeatils'>
                                            <br /><br />
                                            <div className='charDetails'><h4>{(key.charAt(0).toUpperCase() + key.substring(1)).split("_").join("")}</h4></div>
                                            <br /><br />
                                            {value.length == 0 ?
                                                <div className='charDetails'>No {(key.charAt(0).toUpperCase() + key.substring(1)).split("_").join(" ")} Found</div> : <></>}



                                            {Object.entries(value).map(([innerKey, innerValue]) => {
                                                return (<>
                                                    {innerKey.includes("url") ?
                                                        <>
                                                            {(innerKey.charAt(0).toUpperCase() + innerKey.substring(1)).split("_").join(" ")} - <img src={innerValue} height="100px" alt={innerValue} />
                                                        </> :
                                                        <div className='charDetails'>{(innerKey.charAt(0).toUpperCase() + innerKey.substring(1)).split("_").join(" ")} - {innerValue}</div>}
                                                </>)
                                            }
                                            )}
                                        </div>


                                    </>
                                : <></>
                            }

                        </>)
                    })}

                </div >
            </div >













        </>
    )
}

export default CharacterData