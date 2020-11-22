import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { FETCH_PHYSICAL_CHARS, SET_PAGE } from '../store/actions/PhysicalCharActions'
import Table from '../components/Table'
import Loading from '../components/Loading'
import Chart from '../components/Chart'

export default function Home() {
  const dispatch = useDispatch()
  const physicalCharacteristics = useSelector(state => state.PhysicalCharsReducer.physicalCharacteristics)
  const loading = useSelector(state => state.PhysicalCharsReducer.loading)
  const page = useSelector(state => state.PhysicalCharsReducer.page)
  let previous
	let next

  useEffect(() => {
    dispatch(FETCH_PHYSICAL_CHARS(page))
  }, [dispatch])
  
	if (page <= 1) previous = true

	function handlePreviousPage() {
    let moveToPage = page - 1
		dispatch(SET_PAGE(moveToPage))
    dispatch(FETCH_PHYSICAL_CHARS(moveToPage))
	}
	
	function handleNextPage() {
    let moveToPage = page + 1
    dispatch(SET_PAGE(moveToPage))
    dispatch(FETCH_PHYSICAL_CHARS(moveToPage))
  }
  if (loading) return <Loading/>

  return (
    <div className="container">

      <div className="card header-card mt-3 shadow">
        <div className="row">
          <div className="col pl-5">
            <h2 className="text-left mt-2 mb-0">People List</h2>
          </div>
          
          <div className="col col-lg-2">
            <div className="text-white row mt-2">
              <button className=" btn btn-secondary " type="button" id="btn-page"
              onClick={handlePreviousPage} disabled={previous} > Previous </button>
                <button className=" btn btn-secondary ml-3" type="button" id="btn-page"
              onClick={handleNextPage}  disabled={next}> Next </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='row'>

        <div className="col-6">
          <div className="table-list mx-auto">
            <div className="card tableHeadBackground mx-auto noBorder shadow-sm"> 
                <div className="text-white row">
                <span className="mx-auto">
                    <h2 className="mb-0 mt-1 font-weight-bold">Bar Chart</h2>
                </span>
                </div>
            </div>
            <div className="card tableBackground shadow-lg py-3" >
              <Chart physicalCharacteristics={physicalCharacteristics}/>
            </div>
          </div>
        </div>

        <div className="col-6">
          <Table physicalCharacteristics={physicalCharacteristics}/>
        </div>
      </div>
      
  </div>
    )
}
