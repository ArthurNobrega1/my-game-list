import React from "react";

const SectionGame = props => {
    let games
    if (props.telas? !props.telas.length : !props.telas) {
        games = Array(5).fill().map((_, index) => 
        <div key={`game-${index}`} className="bg-light-gray h-[6.125rem] w-[11.375rem]"></div>)
    }
    else {
        games = Array(5).fill().map((__, index) => 
        props.telas[index] ? 
        <a className="*:h-[6.125rem] *:w-[11.375rem] *:transition *:duration-300 *:ease-in-out *:transform *:hover:scale-110" key={`a-${index}`} href={props.links[index]}>
            {props.telas[index]} 
        </a> :

        <div key={`game-${index}`} className="bg-light-gray h-[6.125rem] w-[11.375rem]"></div> )
    }

    return (
    <section className="space-y-[-.9rem] mb-3 max-sm:w-screen">
        <p className="text-white mb-2">
            {props.icon}<span className="uppercase">{props.title}</span>
        </p>
        <div className="overflow-x-auto flex gap-8 *:shrink-0 ml-7 border-t-2 pt-5 w-[90%] overflow-y-hidden">{games}</div>
    </section>)
    }

export default SectionGame