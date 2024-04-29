import React from "react";

const SectionGame = props => {
    let games
    if (!props.games)  games = Array(5).fill(<div className="bg-light-gray w-[11.375rem] h-[6.125rem]"></div>)
    else games = [0, 1, 2, 3, 4].map(index => games[index] ? games[index] : <div className="bg-light-gray w-[11.375rem] h-[6.125rem]"></div> )

    return (
    <section className="space-y-[-.9rem] mb-3">
        <p className="text-white mb-2">
            {props.icon}<span className="uppercase">{props.title}</span>
        </p>
        <div className="flex gap-8 ml-7 border-t-2 pt-5 w-[90%]">
            {games.map(game => game)}
        </div>
    </section>)
    }

export default SectionGame