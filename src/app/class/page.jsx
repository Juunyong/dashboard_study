class OrderCoffee extends React.Component {
    //생성자 함수
    constructor(props) {
        super(props); //부모 생성자 함수 호출
        this.state = {
            name: props.name,
            price: props.price,
        };
    }
}
