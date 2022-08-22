const w = 450*2
const h = 270*2
const padding = 10

const seed = {
    width: w/32,
    height: h/16,
    XYPosition: [(w-30), (h/40)],
    color: '#EE9D5D',
}

const myGameArea = {
    canvasGame: document.createElement('canvas'),
    hi: function(){console.log("hi")},
    start: function() {
        this.canvasGame.width = w
        this.canvasGame.height = h

        this.contextGame = this.canvasGame.getContext('2d')
        
        //Drawing canva
        this.contextGame.fillStyle = '#C0D889'
        this.contextGame.fillRect(w/4,h/4,w/2,h/2)

        //Drawing garden

        this.contextGame.roundRect(w/4,h/4,w/2,h/2,2.5)
        this.contextGame.lineWidth = padding
        this.contextGame.strokeStyle = 'white'
        this.contextGame.stroke()

        //Drawing grass
        const grassWidth = w/8
        const grassHeight = h/8
        const grassXPosition = (w/4+5) - padding
        const grassYPosition = (h/4+5) - padding
        let xOffset = grassXPosition
        let yOffset = grassYPosition
        const positions = [{x:0,y:0},{x:0,y:2},{x:2,y:0},{x:2,y:2},{x:1,y:1},{x:1,y:3},{x:3,y:1},{x:3,y:3}]
        for(let i=0; i<positions.length; i++){
            xOffset=grassXPosition+(grassWidth*positions[i].x*.97)+padding
            yOffset=grassYPosition+(grassHeight*positions[i].y*.95)+padding
            this.contextGame.beginPath()
            this.contextGame.roundRect(xOffset,yOffset,grassWidth,grassHeight,[10])
            this.contextGame.fillStyle ='#B1C07D'
            this.contextGame.fill()
        }

        //Drawing seeds
        const bean = Object.create(seed)
        this.contextGame.beginPath()
        this.contextGame.roundRect(bean.XYPosition[0],bean.XYPosition[1],bean.width,bean.height,[10])
        this.contextGame.fillStyle = bean.color
        this.contextGame.fill()

        hi()

        document.body.insertBefore(this.canvasGame,document.body.childNodes[0])
    },
}




const startGame = () => {
    myGameArea.start();
    window.resizeTo(screen.width-300,screen.height-500)   
}