import'./singleCard.css'



export default function SingleCard({card, handleChoice, flipped, disabled}){

    const handleClick = () => {
        if(!disabled){
        handleChoice(card)
        }
    }

    return (
        <div className='card'> 
            <div className={flipped ? "flipped": ""}>
              <img className = "front" src={card.src} alt="card front"/>
              <img 
              className= 'back'   
              src ="/img/NBA4.png" 
              alt="card back" 
              onClick={handleClick}
              width={150}
              height={275}/>

            </div>
          </div>
    )
}