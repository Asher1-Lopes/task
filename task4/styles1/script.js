function barclick() {
    var element = document.querySelector("#iopen");
    element.classList.toggle("hidden");
    var a =  document.querySelector(".bardivpa");
    a.classList.toggle("dark")
   
    var b =  document.querySelector(".bclick");
    b.classList.toggle("rotate")
   //  var element = document.getElementsByClassName("iopen");
   //  element.classList[0].toggle("hidden");
   //  for(let i =0;i<element.length;i++){

   //  }
}

let horn =[
  {
    "heading" : "Liscense to introduction to algebra has been assigned",
    "sub":"",
    "date":"15-Sep-2018 at 07:21 pm",
    "style":"sdivbg",
    "mark":"fa-solid fa-circle-minus"
  },  {
    "heading" : "Liscense to introduction to algebra has been assigned",
    "sub":" Course: <b>Adavanced Mathematics</b>",
    "date":"15-Sep-2018 at 07:21 pm",
    "style": "",
    "mark":"fa-solid fa-circle-check"
  },  {
    "heading" : "23 new students created",
    "sub":"",
    "date":"15-Sep-2018 at 07:21 pm",
      "style":"sdivbg",
    "mark":"fa-solid fa-circle-minus"
  },  {
    "heading" : "Liscense to introduction to algebra has been assigned",
    "sub":" Course: <b>Adavanced Mathematics</b>",
    "date":"15-Sep-2018 at 07:21 pm", 
      "style":"sdivbg",
    "mark":"fa-solid fa-circle-minus"
  },  {
    "heading" : "License for Basic Conc",
    "sub":"",
    "date":"15-Sep-2018 at 07:21 pm",
      "style":"sdivbg",
    "mark":"fa-solid fa-circle-minus"
  },  {
    "heading" : "Liscense to introduction to algebra has been assigned",
    "sub":" Course: <b>Adavanced Mathematics</b>",
    "date":"15-Sep-2018 at 07:21 pm",
    "style": "",
    "mark":"fa-solid fa-circle-check"
  }
]


let horndis="";


for(let i =0;i<6;i++){
  horndis += `
    <div class="sdiv ${horn[i].style}">

                <div class="scroll-content1">
                  <div class="bellc"><b>${horn[i].heading}</b></div>
                  <i class="${horn[i].mark}"></i>
                </div>


                 <div class="bellc2">${horn[i].sub}</div>

                 <div class="scroll-content3">
                  <div><i ></i></div>
                  <div>${horn[i].date}</div>
                 </div>

              </div>
  `;
  document.getElementById("hornup").innerHTML=horndis;
}




let bell = [
  {
    "lefthead" : "PA",
    "name" : "Wilson Kumar",
    "style": "",
    "mark": "fa-solid fa-circle-check",
    "heading":"No classes will be held on 21st Nov",
    "leftsub" : "2 files are attached",
    "rightsub" : "15-Sep-2018 at 07:21 pm"

  },
  {
    "lefthead" : "PA",
    "name" : "Wilson Kumar",
    "style": " sdivbg",
    "mark": "fa-solid fa-circle-minus",
    "heading":"No classes will be held on 21st Nov",
    "leftsub" : "2 files are attached",
    "rightsub" : "15-Sep-2018 at 07:21 pm"

  },
  {
    "lefthead" : "PA",
    "name" : "Wilson Kumar",
    "style": "",
    "mark": "fa-solid fa-circle-check",
    "heading":"No classes will be held on 21st Nov",
    "leftsub" : "2 files are attached",
    "rightsub" : "15-Sep-2018 at 07:21 pm"

  },
  {
    "lefthead" : "PA",
    "name" : "Wilson Kumar",
    "style": "sdivbg",
    "mark": "fa-solid fa-circle-minus",
    "heading":"No classes will be held on 21st Nov",
    "leftsub" : "2 files are attached",
    "rightsub" : "15-Sep-2018 at 07:21 pm"

  },
  {
    "lefthead" : "PA",
    "name" : "Wilson Kumar",
    "style": "sdivbg",
    "mark": "fa-solid fa-circle-minus",
    "heading":"No classes will be held on 21st Nov",
    "leftsub" : "2 files are attached",
    "rightsub" : "15-Sep-2018 at 07:21 pm"

  },
  {
    "lefthead" : "PA",
    "name" : "Wilson Kumar",
    "style": "",
    "mark": "fa-solid fa-circle-check",
    "heading":"No classes will be held on 21st Nov",
    "leftsub" : "2 files are attached",
    "rightsub" : "15-Sep-2018 at 07:21 pm"
  }
]


let bellup= "";
for(let i =0;i<6;i++){
  bellup += `
      <div class="sdiv ${bell[i].style}">
               <!-- 3 -->
                <div class="scroll-content1">
                  <div><span class="spanc1">${bell[i].lefthead}: </span><b>${bell[i].name}</b></div>
                  <i class="${bell[i].mark}"></i>
                </div>


                 <div class="scroll-content2"><b>${bell[i].heading}</b></div>

                 <div class="scroll-content3">
                  <div><i class="fa-solid fa-paperclip"></i>${bell[i].leftsub}</div>
                  <div>${bell[i].rightsub}</div>
                 </div>


              </div>
  `;

  document.getElementById("bellup").innerHTML=bellup;
}




let container = [
    {
         "heading" : "Acceleration",
         "img" : "i1.PNG",
         "topcss":"",
         "toph":"",
         "star":"fa-solid fa-star fa-lg",
         "sub1" : "physics",
          "sub2" : "grade 7",
          "sub13" : "+2",
          "sub21": 4,
          "sub22":"Units",
          "sub23":18,
          "sub24":"lessons",
          "sub25":24,
          "sub26":"Topics",
          "sub3":"Mr Frank Class B",
          "sub4":"50 students  |",
 
          "sub5":"21-jan-2020 21-Aug-2020"

    },
    {
        "heading" : "Displacement, Velocity and <br>Speed",
        "img" : "i2.PNG",
        "topcss":"",
        "toph":"",
        "star":"fa-solid fa-star fa-lg",
        "sub1" : "physics",
         "sub2" : "grade 6",
         "sub13" : "+2",
         "sub21": 2,
         "sub22":"Units",
         "sub23":15,
         "sub24":"lessons",
         "sub25":20,
         "sub26":"Topics",
         "sub3":"No Classes",
         "sub4":"",
 
     "sub5":""

   },
   {
    "heading" : "Introduction to Biology: Micro<br>organisms and how they affec..",
    "img" : "i3.PNG",
    "topcss":"",
    "toph":"",
    "star":"fa-solid fa-star fa-lg",
    "sub1" : "Biology",
     "sub2" : "grade 4",
     "sub13" : "+1",
     "sub21": 4,
     "sub22":"Units",
     "sub23":18,
     "sub24":"lessons",
     "sub25":24,
     "sub26":"Topics",
     "sub3":"All Classes",
     "sub4":"300 students",
 
     "sub5": ""

},
{
    "heading" : "Introduction to High school<br>Mathematics",
    "img" : "i4.PNG",
    "topcss":"pspan",
    "toph":"Expired",
    "star":"fa-solid fa-star fa-lg greystar",
    "sub1" : "Mathematics",
     "sub2" : "grade 8",
     "sub13" : "+2",
     "sub21": 4,
     "sub22":"Units",
     "sub23":18,
     "sub24":"lessons",
     "sub25":24,
     "sub26":"Topics",
     "sub3":"Mr Frank Class A",
     "sub4":"50 students  |",
 
     "sub5":"21-jan-2020 21-Aug-2020"

}
]




let markup="";
    for(let i=0;i<4;i++){
 markup += `
        <div class="parent">
         <span class="${container[i].topcss}">${container[i].toph}</span>
          <div class="flexbox">
            <div class="rightsub">
              <img src="${container[i].img}" alt="" />
            </div>
            <div class="leftsub">
              <div class="l1">
                <b>${container[i].heading}</b>
                <i class="${container[i].star}"></i>
              </div>
            

              <div class="l2">
                <span class="span1l2">${container[i].sub1}</span>
                <span class="span2l2">${container[i].sub2}<span>${container[i].sub13}</span> </span>
              </div>

              <div class="l3">
                <span><b>${container[i].sub21}</b>${container[i].sub22} <b>${container[i].sub23}</b> ${container[i].sub24} <b>${container[i].sub25}</b> ${container[i].sub26}</span>
              </div>

              <div class="l4">
                <select name="" id="">
                  <option value="">${container[i].sub3}</option>
                </select>
              </div>

              <div class="l5">
                <span class="span1l5">${container[i].sub4} </span>
                <span class="span2l5">${container[i].sub5}</span>
              </div>
            </div>
          </div>

          <div class="boxfooter">
            <div>
              <i class="fa-solid fa-eye fa-lg"></i>
            </div>
            <div>
              <i class="fa-regular fa-calendar-days fa-lg"></i>
            </div>
            <div>
              <i class="fa-regular fa-calendar-days fa-lg"></i>
            </div>
            <div>
              <i class="fa-solid fa-chart-simple fa-lg"></i>
            </div>
          </div>
        </div>
`;

  document.getElementById("grid").innerHTML=markup;
    }


    // have to fix sub1 and sublast