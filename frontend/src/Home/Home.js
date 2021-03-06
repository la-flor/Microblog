import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitles, changeVote } from "../actions/titles"
import BlogPost from "./BlogPost";

const Home = () => {
    const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch();

    const titles = useSelector(title => title.titleReducer);

    useEffect(() => {
        dispatch(fetchTitles());
        setLoading(false);
    }, [dispatch, isLoading])

    function vote(titleId, direction) {
        dispatch(changeVote(titleId, direction));
    }

    return (
        <div className="Home pt-3">
            {isLoading && (<h1>Loading...</h1>)}
            {titles.length
                ? (titles.map(title => (
                    <BlogPost
                        key={title.id}
                        titleId={title.id}
                        title={title.title}
                        votes={title.votes}
                        vote={vote}
                    />
                )))
                : (<p>There are no posts currently available! Why not <a href="/new">contribute yourself?!</a></p>)
            }
        </div>
    )
}

export default Home;