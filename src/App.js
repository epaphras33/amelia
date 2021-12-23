import { WaveTopBottomLoading  } from "react-loadingg";
import { useState, useContext, useEffect } from "react";
import Aos from "aos";


import { ThemeContext } from "./context";
import Time from "./components/Time";
import Toggle from "./components/Toggle";
import Intro from "./components/Intro";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";

function App() {
    const [done, setDone] = useState(undefined);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    setTimeout(() => {
        setDone(true);
    }, 5000);

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div>
            {!done ?
                (<WaveTopBottomLoading color="#18d26e" size="large" />) : (
                <div style={{ backgroundColor: darkMode ? "rgba(0, 0, 0, 0.93)" : "#fff", color: darkMode && "#fff" }}>
                    <Time />
                    <Toggle />
                    <Intro />
                    <About />   
                    <ProductList />
                    <Contact />
                </div>
            )}
        </div>
    )
}

export default App;
