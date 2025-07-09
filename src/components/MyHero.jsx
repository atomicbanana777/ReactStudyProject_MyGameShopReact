const MyHero = ({title='Hello World! This is my Gameshop.'
    , sub_title='You can find the hottest and latest games and news here!'}) => {
    return (
         <div id="myHero">
            <h1>{title}</h1>
            <p>{sub_title}</p>
        </div>
    )
}

export default MyHero;