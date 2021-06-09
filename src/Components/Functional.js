import React, { useState } from 'react';

const Functional = () => {

    const [dropDownList, setDropDownList] = useState({
        ddl1: [
            { name: 'fruits', ddl2: ['mango', 'apple', 'banana', 'lichee'] },
            { name: 'games', ddl2: ['football', 'cricket', 'hokey', 'lichee'] },
            { name: 'games', ddl2: ['football', 'cricket', 'hokey', 'lichee'] },
        ],
        chooseDdl: [],
        selectddl: ''
    })
    const handleSelect = (e) => {
        const choose = { ...dropDownList }
        const value = e.target.value;
        choose.selectddl = value;
        const ddl2 = { ddl2: dropDownList.ddl1.find((x) => x.name === value).ddl2 }

        setDropDownList(choose)
        console.log(ddl2);
    }


    return (
        <div>
            <h3>This is From Function Components </h3>
            <select onChange={(e) => handleSelect(e)} >
                <option value="">---select---</option>
                {
                    dropDownList.ddl1.map(x => (
                        <option> {x.name} </option>
                    ))
                }
            </select>
            <select>
                <option selected disabled >----------</option>
                {
                    dropDownList.ddl1.map(x => {
                        return <option > {x.name} </option>
                    })
                }
            </select>
        </div>
    );
};

export default Functional;