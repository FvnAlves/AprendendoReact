const RenderCond = ({x,y}) => {
   

    return (
    <div>
        {x > 5 && <p>X maior que 5</p>}
        {x > 5 ? <p>X numero alto</p> : <p>X numero baixo</p>}
        <p>O valor de y: {y}</p>
    </div>
    );
};

export default RenderCond;