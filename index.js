const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const w = 450*2
const h = 270*2
const padding = 10


class Drawing {
    constructor(width,height,XYPosition,color,roundness){
        this.width=width
        this.height=height
        this.XYPosition=XYPosition
        this.color=color
        this.roundness=roundness
    }
    draw(){
        context.beginPath()
        context.roundRect(this.XYPosition[0],this.XYPosition[1],this.width,this.height,[this.roundness])
        context.fillStyle = this.color
        context.fill()
    }
}

class Seed extends Drawing{
    constructor(width,height,XYPosition,color,roundness){
        super(width,height,XYPosition,color,roundness)
    }
}

class Tile extends Drawing{
    constructor(width,height,XYPosition,color,roundness){
        super(width,height,XYPosition,color,roundness)
    }
}

const startGame = () => {
    canvas.width = w
    canvas.height = h

    //Drawing canva
    context.fillStyle = '#C0D889'
    context.fillRect(w/4,h/4,w/2,h/2)

    //Drawing garden
    context.roundRect(w/4,h/4,w/2,h/2,2.5)
    context.lineWidth = padding
    context.strokeStyle = 'white'
    context.stroke()

    //Drawing grass HACERLA UN OBJETO

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
        context.beginPath()
        context.roundRect(xOffset,yOffset,grassWidth,grassHeight,[10])
        context.fillStyle ='#B1C07D'
        context.fill()
    }




    //Drawing seeds
    const bean = new Seed(w/30,h/16,[(w-40), (h/40)],'#EF9E63',100)
    bean.draw()
}



