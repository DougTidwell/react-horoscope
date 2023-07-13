import { useState } from "react";

export default function Horoscope() {
    const [sign, setSign] = useState(null);
    const [horoscopeText, setHoroscopeText] = useState(null);

    const protocol= process.env.REACT_APP_PROTOCOL || "http";
    const host = process.env.REACT_APP_HOST || "localhost";
    const proxyPort = process.env.REACT_APP_PROXY_PORT || "3005";

    // @ts-ignore
    function getHoroscope(sign: string) {
        console.log(`Vars: ${protocol}, ${host}, ${proxyPort}`);
        fetch(` ${protocol}://${host}:${proxyPort}/horoscope/${sign}`,
            {
                method: 'GET',
                mode : 'cors',
                headers: {
                    "Content-Type": "application/json",
                }})
            .then (res => res.json())
            .then (
                (result) => {
                    setHoroscopeText(result.horoscopeText);
                    // @ts-ignore
                    setSign(` Today's ${result.serviceName} horoscope for ${sign}: `);
                },

                (error) => {
                    console.log(`Something went wrong: ${error}`);
                }
            );
    }

    return (
        <>
            <p className="Zodiac-signs">
                <button className="horoscope-button" title="Aries"
                        onClick={() => {getHoroscope("Aries"); }}>♈️</button>
                <button className="horoscope-button" title="Taurus"
                        onClick={() => {getHoroscope("Taurus"); }}>♉️️</button>
                <button className="horoscope-button" title="Gemini"
                        onClick={() => {getHoroscope("Gemini"); }}>♊️️</button>
                <button className="horoscope-button" title="Cancer"
                        onClick={() => {getHoroscope("Cancer"); }}>♋️️</button>
                <button className="horoscope-button" title="Leo"
                        onClick={() => {getHoroscope("Leo"); }}>♌️</button>
                <button className="horoscope-button" title="Virgo"
                        onClick={() => {getHoroscope("Virgo"); }}>♍️️</button>
                <button className="horoscope-button" title="Libra"
                        onClick={() => {getHoroscope("Libra"); }}>♎️️</button>
                <button className="horoscope-button" title="Scorpio"
                        onClick={() => {getHoroscope("Scorpio"); }}>♏️️</button>
                <button className="horoscope-button" title="Sagittarius"
                        onClick={() => {getHoroscope("Sagittarius"); }}>♐️️</button>
                <button className="horoscope-button" title="Capricorn"
                        onClick={() => {getHoroscope("Capricorn"); }}>♑️</button>
                <button className="horoscope-button" title="Aquarius"
                        onClick={() => {getHoroscope("Aquarius"); }}>♒️️</button>
                <button className="horoscope-button" title="Pisces"
                        onClick={() => {getHoroscope("Pisces"); }}>♓️️</button>
            </p>

            <fieldset>
                <legend>{sign}</legend>
                <p>{horoscopeText}</p>
            </fieldset>
        </>
    );
}
