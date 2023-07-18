import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//This is the cards' template
const CardsReact = (props) =>{
    const cardTemplate = props.cardTemplate
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardTemplate.imgsrc} />
            <Card.Body>
                <Card.Title>{cardTemplate.title}</Card.Title>
                <Card.Text>
                {cardTemplate.text}
                </Card.Text>
                <Button variant="primary">{cardTemplate.buttonText}</Button>
            </Card.Body>
        </Card>
    )
}

export default CardsReact