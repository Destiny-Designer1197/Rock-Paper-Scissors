const selButtons = document.querySelectorAll('[data-selection]')
const finalCol = document.querySelector('[data-final-col]')
const computerScoreSpan=document.querySelector('[data-computer-score]')
const myScoreSpan = document.querySelector('[data-my-score]')

const CHOICES = [
    {
        name: 'Rock',
        emoji:'👊',
        beats:'Scissors'
    },
    {
        name: 'Paper',
        emoji:'🖐',
        beats:'Rock'
    },
    {
        name: 'Scissors',
        emoji:'✌',
        beats:'Paper'
    },
]

selButtons.forEach(selButton =>{
    selButton.addEventListener('click', e => {
        const selName = selButton.dataset.selection
        const selection = CHOICES.find(selection => selection.name == selName)
        
        makeSelection(selection)
        
    })
})


function makeSelection(selection){
    const compSel = ranSel()
    const meWinner = isWinner(selection,compSel)
    const compWinner = isWinner(compSel,selection)
    console.log(meWinner)
 //   console.log(compWinner)

    addSelResult(compSel,compWinner)
    addSelResult(selection,meWinner)

    if(meWinner) incrementScore(myScoreSpan)
    if(compWinner) incrementScore(computerScoreSpan)

}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelResult(sel,winner){
    const div = document.createElement('div')
    div.innerText= sel.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalCol.after(div)

}

function isWinner(me,opp){
    me.beats == opp.name
}
function ranSel(){
    const ranInd = Math.floor(Math.random()*CHOICES.length)
    return CHOICES[ranInd]
}