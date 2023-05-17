import './index.scss'

const AnimatedLetters = ({letterClass, strArray, index})=>{
    return(
        <span>
           {
             strArray.map((char,i) => (
                <span key={char + i} className= {`${letterClass} _${i + index}` }>
                    {char}
                </span>
            ))
           }
        </span>
    );
}
// index given is a number that delays the animation in second after page loads
export default AnimatedLetters;