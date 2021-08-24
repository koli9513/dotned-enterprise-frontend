const SmallEventCard = (props) => {

    return (
        <div>
            <img src={props.image} alt="small card img"
                 style={{
                     width: "300px",
                     height: "200px"
                 }}/>
            <h4>{props.name}</h4>
            <h5>{props.city}</h5>
            <p>{props.date}</p>
        </div>
    );
};

export default SmallEventCard;
