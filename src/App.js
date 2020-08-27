import React from 'react'
import "./App.css"

class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: [Array(7).fill(-1), Array(7).fill(-1), Array(7).fill(-1), Array(7).fill(-1),
            Array(7).fill(-1), Array(7).fill(-1)],
            one: true,
            background: [Array(7).fill("white"), Array(7).fill("white"), Array(7).fill("white"),
            Array(7).fill("white"), Array(7).fill("white"), Array(7).fill("white"), Array(7).fill("white")],
            player1: "player1",
            player2: "player2",
            s: {
                backgroundColor: "red"
            }
        }
    }
    game_over = (clr) => {
        let background = [...this.state.background]
        let winner;
        clr === 1 ? winner = 'red' : winner = 'yellow';
        let i = 0;
        let j = 0;
        let de = setInterval(() => {
            if (j >= 7 || i >= 6) {
                clearInterval(de)
               
            }
            background[i][j] = winner
            this.setState({
                background: background,
                s: {
                    backgroundColor: winner
                }
            })
            j++;
            if (j >= 7) {
                i++;
                j = 0;
            }
        }, 70)

    }
    chek_win = (row, val) => {

        let currgame = [...this.state.game]
        let count1 = 0
        let count0 = 0
        for (let i = 0; i < 7; i++) {
            if (currgame[row][i] === 1 && row>=0) {
                count1++
                if (count1 === 4) {
                    setTimeout(()=>{
                        alert("Red Win")
                        this.game_over(1)
                    },1000)
                    
                    
                }
            }
            else {
                count1 = 0
            }
            if (currgame[row][i] === 0) {
                count0++
                if (count0 === 4) {
                    setTimeout(()=>{
                        alert("Yellow Win")
                        this.game_over(0)
                    },1000)
                }
            }
            else {
                count0 = 0
            }

        }

        count1 = 0
        count0 = 0
        for (let i = 0; i < 6; i++) {
            if (currgame[i][val - 1] === 1) {
                count1++
                if (count1 === 4) {
                    setTimeout(()=>{
                        alert("Red Win")
                        this.game_over(1)
                    },1000)

                }

            }
            else {
                count1 = 0
            }
            if (currgame[i][val - 1] === 0) {
                count0++
                if (count0 === 4) {
                    setTimeout(()=>{
                        alert("Yellow Win")
                        this.game_over(0)
                    },1000)
                }
            }
            else {
                count0 = 0
            }

        }

    let i=row
    let j=val-1
    let digonal_arr=[]
    while (i>0 && j>0){
        i--
        j--
    }
    

    while(i<6 && j<7){
        digonal_arr.push(currgame[i][j])
        i++
        j++
    }
    
    count1=0
    count0=0
    let len=digonal_arr.length
    for(let i=0 ;i<len;i++){
        if (digonal_arr[i]===1){
            count1++
            if (count1===4){
                setTimeout(()=>{
                    alert("Red Win")
                    this.game_over(1)
                },1000)  
                break 
            }
        }
        else{
            count1=0
        }
    }
    for(let i=0 ;i<len;i++){
        if (digonal_arr[i]===0){
            count0++
            if (count0===4){
                setTimeout(()=>{
                    alert("Yellow Win")
                    this.game_over(0)
                },1000)  
                break 
            }
        }
        else{
            count0=0
        }
    }
    i=row
    j=val-1
    digonal_arr=[]
    while (i>0 && j<6){
        i--
        j++
    }

    while(i<6 && j>=0){
        digonal_arr.push(currgame[i][j])
        console.log(digonal_arr)
        i++
        j--
    }
    count1=0
    count0=0
    len=digonal_arr.length
    for(let i=0 ;i<len;i++){
        if (digonal_arr[i]===1){
            count1++
            if (count1===4){
                setTimeout(()=>{
                    alert("Red Win")
                    this.game_over(1)
                },1000)  
                break 
            }
        }
        else{
            count1=0
        }
    }
    for(let i=0 ;i<len;i++){
        if (digonal_arr[i]===0){
            count0++
            if (count0===4){
                setTimeout(()=>{
                    alert("Yellow Win")
                    this.game_over(0)
                },1000)  
                break 
            }
        }
        else{
            count0=0
        }
    }
    
    }
    drop = (val) => {

        let new_game = [...this.state.game]
        let isOne = this.state.one

        let row_no;

        for (let i = 5; i > -1; i--) {
            if (new_game[i][val - 1] === -1) {
                if (isOne) {
                    new_game[i][val - 1] = 1
                    row_no = i
                    break
                }
                else {
                    new_game[i][val - 1] = 0
                    row_no = i
                    break
                }
            }
        } 

        let i = 0;
        let j = 0;
        let background = [...this.state.background]
        let dp = setInterval(() => {
            if (i <= row_no) {
                this.state.one ? background[i][val - 1] = 'yellow' : background[i][val - 1] = 'red'

                this.setState({

                    background: background
                })

            }
            i++;
            if (i > row_no && i !== 1) {
                background[j][val - 1] = 'white'
                this.setState({

                    background: background

                })
                j++
            }

            if (j >= row_no) {
                clearInterval(dp)
            }

        }, 80)


        let buttoncolor;

        isOne ? buttoncolor = 'yellow' : buttoncolor = 'red'

        this.setState({
            game: new_game,
            one: !isOne,
            s: {
                backgroundColor: buttoncolor
            }
        })
        let newback = [...this.state.background]

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                if (this.state.game[i][j] === 1) {

                    newback[i][j] = 'red'
                    this.setState({

                        background: newback
                    })

                }
                else if (this.state.game[i][j] === 0) {
                    newback[i][j] = 'yellow'
                    this.setState({

                        background: newback
                    })

                }

            }
        }

        this.chek_win(row_no, val)
    }

    render() {


        const Buttons = Array(7)
        for (let i = 1; i <= 7; i++) {
            let ele = (<button className="In_the_box" key={i} style={this.state.s} onClick={() => this.drop(i)}><i className="fas fa-arrow-down"></i></button>);
            Buttons[i] = ele;

        }

        return (
            <div className='board'>
                <h1
                    style={{
                        color: this.state.s.backgroundColor,
                        textAlign: 'center',
                        fontSize: "40px"

                    }}> PLOT-4</h1>
                <div className='row'>
                    {Buttons}</div>
                <Board game={this.state.game} background={this.state.background} />

            </div>



        );
    }
}
const Board = (props) => {


    let Row = [];

    let style = {
        fontSize: '20px',
        border: '3px solid black',
        borderRadius: '100px',
        textAlign: 'center',
        padding: "15px"
    };
    let background = props.background

    for (let i = 0; i < 6; i++) {


        Row.push([<div className='row' key={i}>
            <div className='box'><span className="box" value={7 * i + 1} style={{ ...style, backgroundColor: background[i][0] }}></span></div>
            <div className='box'><span className="box" value={7 * i + 2} style={{ ...style, backgroundColor: background[i][1] }}></span></div>
            <div className='box'><span className="box" value={7 * i + 3} style={{ ...style, backgroundColor: background[i][2] }}></span></div>
            <div className='box'><span className="box" value={7 * i + 4} style={{ ...style, backgroundColor: background[i][3] }}></span></div>
            <div className='box'><span className="box" value={7 * i + 5} style={{ ...style, backgroundColor: background[i][4] }}></span></div>
            <div className='box'><span className="box" value={7 * i + 6} style={{ ...style, backgroundColor: background[i][5] }}></span></div>
            <div className='box'><span className="box" value={7 * i + 7} style={{ ...style, backgroundColor: background[i][6] }} ></span></div>
        </div>])
    }
    return (

        <div>
            {Row}
        </div>




    );
}






class App extends React.Component {
    render() {
        return <div>

            <PlayButton /></div>
    }
}
export default App