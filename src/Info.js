import React from 'react';
import store from './store';

class Info extends React.Component {

  state = this.getCurrentStateFromStore()
  
  getCurrentStateFromStore() {
    return {
      person: store.getState().person
    }
  }
  
  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();
    
    if (this.state.person !== currentState.person) {
      this.setState(currentState);
    }
  }
  
  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }
  
  componentWillUnmount() {
    this.unsubscribeStore();
  }
  
render() {
  switch(this.state.person) { 
    case "jeff":
      return (
        <div class="infoBox">
            <h2>Jeff Bezos</h2> 
            <br />
            <div>Net Worth: $108.6 billion</div> 
            <br />
            <div><p>Jeffrey Preston Bezos (born January 12, 1964) is an American internet and aerospace entrepreneur, media proprietor, and investor. He is best known as the founder, chief executive officer, and president of Amazon. The first centi-billionaire on the Forbes wealth index, Bezos was named the "richest man in modern history" after his net worth increased to $150 billion in July 2018. In September 2018, Forbes described him as "far richer than anyone else on the planet" as he added $1.8 billion to his net worth when Amazon became the second company in history to reach a market cap of $1 trillion.</p></div>
        </div>
      )
    case "warren":
      return (
        <div class="infoBox">
            <h2>Warren Buffett</h2> 
            <br />
            <div>Net Worth: $88.9 billion</div> 
            <br />
            <div><p>Warren Edward Buffett (born August 30, 1930) is an American business magnate, investor, and philanthropist, who is the chairman and CEO of Berkshire Hathaway. He is considered one of the most successful investors in the world and the fourth-wealthiest person in the world.</p></div>
        </div>
      )
    case "mark":
      return (
         <div class="infoBox">
            <h2>Mark Zuckerberg</h2> 
            <br />
            <div>Net Worth: $82 billion</div> 
            <br />
             <div><p>Mark Elliot Zuckerberg (born May 14, 1984) is an American internet entrepreneur and philanthropist. He co-founded Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder. He also co-founded and is a board member of the solar sail spacecraft development project Breakthrough Starshot.</p></div>
        </div>
        )
    case "bill":
      return (
        <div class="infoBox" >
            <h2>Bill Gates</h2> 
            <br />
            <div>Net Worth: $107.1 billion</div> 
            <br />
             <div><p>William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014. He is one of the best-known entrepreneurs and pioneers of the microcomputer revolution of the 1970s and 1980s.</p></div>
        </div>
    )
    case "bernard":
      return (
        <div class="infoBox">
            <h2>Bernard Arnault</h2> 
            <br />
            <div>Net Worth: $101.6 billion</div> 
            <br />
            <div><p>Bernard Jean Étienne Arnault (born 5 March 1949) is a French billionaire business magnate, and art collector. Arnault is the chairman and chief executive of LVMH Moët Hennessy – Louis Vuitton SE, LVMH, the world's largest luxury-goods company. In April 2018, he became the richest person in fashion, topping Zara's Amancio Ortega. He was also briefly the richest man in the world in December of 2019.</p></div>
    </div>
    )
      default:
        return (
          <div>
              
          </div>
        )
   }
}
}

export default Info;