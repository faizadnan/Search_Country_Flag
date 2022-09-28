import React from 'react';
import { useState, useEffect } from 'react';
import './Results.css'
export default function Results() {
    const [isLoading, setisLoading] = useState(true);
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState("");
    const [searchdata, setsearchdata] = useState("");

    function handleSearchChange(e) {
        setsearch(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        setsearchdata(search)
    }

    const filtered = !searchdata ? data : data.filter((countries) =>
        countries.name.toLowerCase().includes(searchdata.toLowerCase())
    );



    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => { setdata(data); console.log(data); setisLoading(false); });




    }, [])

    return (


        <>


            <form className="d-flex my-3" role="search" onSubmit={handleSubmit} >
                <input className="form-control me-2" type="search" value={search} onChange={handleSearchChange} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" >Search</button>
            </form>

          

            <div class="row row-cols-1 row-cols-md-3 g-4 my-5 ">
                {filtered.map(data =>
                    <>
                        <div className='col my-3 card-group'>
                            <div className='card bg-info h-100 border-secondary mycard_class' style={{ "width": "18rem" }}  >
                                <img src={data.flags.png} style={{ "width": "100%", "height": "60%" }} />
                                <div class="card-body">
                                    <h4> {data.name}</h4>
                                    <p>Capital:{data.capital}</p>
                                    <p>Population:{data.population}</p>
                                    <p>Region:{data.region}</p>
                                </div>
                            </div>
                        </div>

                    </>


                )}     
                   </div>




        </>




    )
}
