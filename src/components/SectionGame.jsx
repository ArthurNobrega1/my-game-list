import React from "react";

const SectionGame = props => {
    let games
    if (!props.games)  games = games = Array(5).fill().map((_, index) => (
        <a key={`a-${index}`} href="/game/default">
            <div key={`game-${index}`} className="bg-light-gray w-[11.375rem] h-[6.125rem] transition duration-300 ease-in-out transform hover:scale-110"></div>
        </a>))
    else games = [0, 1, 2, 3, 4].map(index => games[index] ? games[index] : <a href="/game/default">
        <div key={`game-${index}`} className="bg-light-gray h-[6.125rem] w-[11.375rem] transition duration-300 ease-in-out transform hover:scale-110"></div>
    </a> )

    return (
    <section className="space-y-[-.9rem] mb-3 max-sm:w-screen">
        <p className="text-white mb-2">
            {props.icon}<span className="uppercase">{props.title}</span>
        </p>
        <div className="overflow-x-auto flex gap-8 *:shrink-0 ml-7 border-t-2 pt-5 w-[90%] overflow-y-hidden">{games}</div>
    </section>)
    }

export default SectionGame