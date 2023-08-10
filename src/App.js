import logo from './logo.svg';
import './App.css';

function App() {
  let apiKey = ''

const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=',true);
xhr.onload = ()=>{
    if(this.status===200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHtml = "";
        articles.map(function(element,index){
            let news = `<div class="accordion" id="newsAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <b>Breaking News ${index+1}: </b> ${element["title"]}
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       ${element["description"]}. <a href = "${element['url']}" target="_blank"> Read more here </a>
                                </div>
                            </div>
                        </div> `
            newsHtml += news;

        });
    }
    else{
        console.log("some error occured")
    }
}
xhr.send()
}

export default App;
