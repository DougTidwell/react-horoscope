import { useState } from "react";

export default function Horoscope() {
    const [sign, setSign] = useState(null);
    const [serviceName, setServiceName] = useState(null);
    const [horoscopeText, setHoroscopeText] = useState(null);

    // @ts-ignore
    function getHoroscope(sign: string) {
        fetch(`http://localhost:3005/horoscope/${sign}`,
            {
                method: 'GET',
                mode : 'cors',
                headers: {
                    "Content-Type": "application/json",
                }})
            .then (res => res.json())
            .then (
                (result) => {
                    console.log(result.horoscopeText);
                    setHoroscopeText(result.horoscopeText);
                    setServiceName(result.serviceName);
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
                <a onClick={() => {getHoroscope("Aries"); }}>♈️</a>&nbsp;
                <a onClick={() => {getHoroscope("Taurus"); }}>♉️️</a>&nbsp;
                <a onClick={() => {getHoroscope("Gemini"); }}>♊️️</a>&nbsp;
                <a onClick={() => {getHoroscope("Cancer"); }}>♋️️</a>&nbsp;
                <a onClick={() => {getHoroscope("Leo"); }}>♌️</a>&nbsp;
                <a onClick={() => {getHoroscope("Virgo"); }}>♍️️</a>&nbsp;
                <a onClick={() => {getHoroscope("Libra"); }}>♎️️</a>&nbsp;
                <a onClick={() => {getHoroscope("Scorpio"); }}>♏️️</a>&nbsp;
                <a onClick={() => {getHoroscope("Sagittarius"); }}>♐️️</a>&nbsp;
                <a onClick={() => {getHoroscope("Capricorn"); }}>♑️</a>&nbsp;
                <a onClick={() => {getHoroscope("Aquarius"); }}>♒️️</a>&nbsp;
                <a onClick={() => {getHoroscope("Pisces"); }}>♓️️</a>&nbsp;
            </p>

            <fieldset>
                <legend>{sign}</legend>
                <p>{horoscopeText}</p>
            </fieldset>
        </>
    );
}
