import axios from "axios";
import { useEffect, useState } from "react";

function Loadtag() {

    const [data, setData] = useState([])
    const [tags, setTags] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/tag/tags')
            .then((response) => {
                setData(response.data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // useEffect(() => {
    //     axios.post(`http://localhost:8080/api/tag/tag/create/${props.aniID}`)
    //         .then((response) => {
    //             setData(response.data)
    //             console.log(data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])


    const handleCheckboxChange = (e) => {
        const tagname = e.target.id;
        if (e.target.checked) {
            setTags([...tags, tagname]);
        } else {
            setTags(tags.filter((id) => id !== tagname));
        }

    };

    const submit = () => {
        console.log('tags = ',tags)

        axios.post(`http://localhost:8080/api/tag/tag/create/${1}`, {
            tags: tags
        })
            .then((response) => {
                setData(response.data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    return (  
        <>
            {data.map((tag) => 
                <ul key={tag.id}>
                    <input type="checkbox" id={tag.id} name={tag.name} onChange={handleCheckboxChange}/>
                    <label htmlFor={tag.id}>{tag.name}</label>
                </ul>
            )}
            <input type="submit" value={"вставить теги"} onClick={submit}/> <br />
        </>
    );
}

export default Loadtag;