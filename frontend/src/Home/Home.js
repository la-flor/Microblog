import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitles } from "../actions/titles"
import BlogPost from "../Posts/BlogPost";

const Home = () => {
    const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch();

    const titles = useSelector(title => title.titleReducer);

    useEffect(() => {
        dispatch(fetchTitles());
        setLoading(false);
    }, [dispatch, isLoading])

    return (
        <div className="Home pt-5">
            {isLoading && (<h1>Loading...</h1>)}
            {titles.length
                ? (titles.map(title => (
                    <BlogPost
                        key={title.id}
                        titleId={title.id}
                        title={title.title}
                        votes={title.votes}
                    />
                )))
                : (<p>There are no posts currently available! Why not <a href="/new">contribute yourself?!</a></p>)
            }
        </div>
    )
}

export default Home;