$('#btn_calc').click(function(){
     let text = $('textarea#inp_text').val()
     let alpha = getwords(text)
     console.log(alpha)
     let word_count = getwordcounts(alpha)
     let sorted_array = sortwordcount(word_count)
     printtable(sorted_array)
     generatechart(sorted_array)


     
})

function getwords(input_text)
{
    let chars = input_text.split('')
    let  newchars = []
    chars.forEach((c)=>{
        switch(c)
        {
            case `'`:
           case `"`:
            case `;`:
            case `:`:
            case `.`:
            case `-`:
            case `_`:
            case `?`:
            case `-`:
            case `,`:
            case `'`:
            case `(`:
            case `)`: 
            case '\n':newchars.push(' ');break;
            case ' ':newchars.push(' ');break;
            case '   ':newchars.push(' ');break;
            case `"`:return
            
           default:newchars.push(c.toLowerCase())
        }
    
   
    })
    
    let newtext = newchars.join('')
    console.log(newtext)
    let words = newtext.split(' ')
    console.log(words)
    return words
   
}


function getwordcounts(words)
{
    let wordcount = {}
    words.forEach((w)=>{
        if(wordcount[w])
        {
            console.log(w)
            wordcount[w]++
        }
        else
        {
            console.log(w)
            wordcount[w] =1
        }
    })
    return wordcount
    
}

function sortwordcount(wordcounts)
{
    let wcarr = []

    Object.keys(wordcounts).forEach((w)=>{
        if(w === "")return
        wcarr.push({
            word:w,
            count:wordcounts[w]})

    })
    return wcarr.sort((a,b)=> b.count - a.count).slice(0,50)

    
}

function printtable(wordcountarray)
{
    let table = $('#sorted')
    $("#wor").append($('<h4>').text('WORD COUNT').addClass("text-center"))
    wordcountarray.forEach((wc)=>{
        table.append(
            $('<tr>')
            .append($('<td>').text(wc.word))
            .append($('<td>').text(wc.count))
            )
         
    })
}


function generatechart(wcarr)
{
    

    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx,{
        type:'line',
        data:{
            labels:wcarr.map((wc)=> wc.word),
            datasets: [
                {
                    label:'WORD FREQUENCY',
                    borderColor: 'white',
                    borderWidth:2,
                    data:wcarr.map((wc)=>wc.count)
                }
            ]
        }
        
    })
}