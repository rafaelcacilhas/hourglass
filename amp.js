let n = Number(Object.values(process.argv).slice(2).join(' '));

if( isNaN(n) ) {
    console.log('Invalid input - Please type a number')
}

else if( n < 0) {
    console.log('Invalid input - Please type a number greater than 0')
}

else {
    const drawTopLine = (line,column,output) => {
        if(line === 0) {
            return "-"
        } 
        else return output
    }
    
    const drawBottomLine = (line,column,output) => {
        if(line === n-1) {
            return "-"
        } 
        else return output
    }
    
    const drawLeftLine = (line,column,output) => {
        if(column === 0) {
            return "|"
        }
        else return output
    }
    
    const drawRightLine = (line,column,output) => {
        if(column === n-1) {
            return "|"
        }
        else return output
    }
    
    const drawMiddleLine = (line,column,output) => {
        if(line === Math.ceil(n/2) ) {
            return "#"
        }
        else return output
    }
    
    const drawMainDiagonal = (line,column,output) => {
        if(column === n-1 - line ) {
            return "#"
        }
        else return output
    }
    
    const drawSecondaryDiagonal = (line,column,output) => {
        if(column === line ) {
            return "#"
        }
        else return output
    }
    
    const drawTopSand = (line,column,output) => {
        if(column >= line && column <= n-1 - line ) {
            return '*'
        }
        else return output
    }
    
    const drawBottomSand = (line,column,output) => {
        if( column >= n-1 - line   && column <= line) {
            return '*'
        }
        else return output
    }
    
    const drawFullAmp = () => {
        for(let line = 0; line < n; line++){
            let lineOutput = "";    //saves the whole line to be printed
        
            for(let column = 0; column < n; column++){
                let output = ' '; //output is a space unless its overwritten bellow
        
        
                output = drawMiddleLine(line,column,output)
                output = drawMainDiagonal(line,column,output)
                output = drawSecondaryDiagonal(line,column,output)
        
                output = drawTopSand(line,column,output)
        
                output = drawTopLine(line,column, output)           //the next four lines could could make a function drawBorders()
                output = drawBottomLine(line,column, output)    
                output = drawLeftLine(line,column,output)       
                output = drawRightLine(line,column,output)
        
        
                lineOutput = lineOutput+output  //append this character to the whole line output
            }
        
            console.log(lineOutput) //prints the line
        }
    }
    
    const drawEmptyAmp = () => {
        for(let line = 0; line < n; line++){
            let lineOutput = "";    //saves the whole line to be printed
        
            for(let column = 0; column < n; column++){
                let output = ' '; //output is a space unless its overwritten bellow
        
                output = drawBottomSand(line,column,output)
    
                output = drawMiddleLine(line,column,output)
                output = drawMainDiagonal(line,column,output)
                output = drawSecondaryDiagonal(line,column,output)
    
                output = drawTopLine(line,column, output)        
                output = drawBottomLine(line,column, output)    
                output = drawLeftLine(line,column,output)       
                output = drawRightLine(line,column,output)
        
        
                lineOutput = lineOutput+output  //append this character to the whole line output
            }
        
            console.log(lineOutput) //prints the line
        }
        
    }
    
    drawFullAmp()
    //we could make a loop here to make an animation of the sand flowing
    drawEmptyAmp()
    
    
    console.log('n = ',n)
    
    
}
