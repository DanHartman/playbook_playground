import { Component } from 'react'

const greetings = ["Marhaba","Grüß","Gott","Namaskar","Zdraveite","Hola","Hafa","adai","Nǐ","hǎo","God","dag","Hallo","hyvää","päivää","Bonjour","Dia","dhuit","Guten","tag","Yasou","Shalom","Namaste","Jo","napot","Góðan","dag","Nde-ewo","Selamat","siang","Salve","Konnichiwa","Ahn","nyong","ha","se","yo","Salve","Sveiki","Moïen","Bonġu","Niltze","Namastē","Salam","Cześć","Olá","Bună","ziua","Zdravstvuyte","Zdravo","Ahoj","Hola","Hujambo","Hallå","Ia","orna","Sawasdee","Avuxeni","Merhaba","Zdravstvuyte","Assalamo","aleikum","xin","chào","Shwmae","Sawubona"]

class index extends Component {
  constructor() {
    super()
    this.tick = this.tick.bind(this)
    this.state = {
      greeting: 0
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1500
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { greeting } = this.state
    this.setState({
      greeting: greeting < (greetings.length - 1) ? greeting + 1 : 0
    });
  }

  render() {
    return(
      <div className="wrapper">
        <style jsx>{`
          .wrapper {
            background-color: purple;
            padding: 0px;
            margin: 0px;
          }
          h1 {
            padding: 0px;
            margin: 0px;
            color: white;
            text-align: center;
          }
        `}</style>
        <title>hello</title>
        <h1>{greetings[this.state.greeting]}</h1>
      </div>
    )
  }
}

export default index
