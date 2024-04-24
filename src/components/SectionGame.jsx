import React from "react";

const SectionGame = props => {
    let games
    if (!props.games)  games = Array(5).fill(<div className="bg-light-gray w-[11.375rem] h-[6.125rem]"></div>)
    else games = [0, 1, 2, 3, 4].map(index => games[index] ? games[index] : <div className="bg-light-gray w-[11.375rem] h-[6.125rem]"></div> )

    return (
    <section>
        <p className="text-white mb-2">
            {props.icon}<span className="uppercase border-b-2 pr-[79%]">{props.title}</span>
        </p>
        <div className="flex gap-2 ml-7">
            {games.map(game => game)}
        </div>
    </section>)
    }

export default SectionGame