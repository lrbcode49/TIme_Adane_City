let select = document.getElementById('select')

city = [

    {
        namear:"فاس",
        nameen:"Fes"
    },

    {
        namear:"الرباط",
        nameen:"Rabat"
    },

    {
        namear:"مراكش",
        nameen:"Marrakech"
    },

    {
        namear:"طنجة",
        nameen:"Tangier"
    },

    {
        namear:"الدار البيضاء",
        nameen:"Casablanca"
    },

    {
        namear:"أكادير",
        nameen:"Agadir"
    },

    {
        namear:"تطوان",
        nameen:"Tetouan"
    },

    {
        namear:"وجدة",
        nameen:"Oujda"
    },

    {
        namear:"القنيطرة",
        nameen:"Kenitra"
    },

    {
        namear:"مكناس",
        nameen:"Meknes"
    },

    {
        namear:"الصويرة",
        nameen:"Essaouira"
    },

    {
        namear:"الناظور",
        nameen:"Nador"
    },

    {
        namear:"تارودانت",
        nameen:"Taroudant"
    },

    {
        namear:"آسفي",
        nameen:"Safi"
    },

    {
        namear:"الجديدة",
        nameen:"El Jadida"
    },

    {
        namear:"بني ملال",
        nameen:"Beni Mellal"
    },

    {
        namear:"العيون",
        nameen:"Laayoune"
    },

    {
        namear:"الداخلة",
        nameen:"Dakhla"
    },

    {
        namear:"تازة",
        nameen:"Taza"
    },

    {
        namear:"الحسيمة",
        nameen:"Al Hoceima"
    },

    {
        namear:"خريبكة",
        nameen:"Khouribga"
    },

    {
        namear:"زاكورة",
        nameen:"Zagora"
    },

    {
        namear:"ورزازات",
        nameen:"Ouarzazate"
    },

    {
        namear:"شفشاون",
        nameen:"Chefchaouen"
    },

    {
        namear:"تاونات",
        nameen:"Taounate"
    },

    {
        namear:"قلعة السراغنة",
        nameen:"Kelaat Sraghna"
    },

    {
        namear:"سيدي قاسم",
        nameen:"Sidi Kacem"
    },

    {
        namear:"بركان",
        nameen:"Berkane"
    },

    {
        namear:"تيفلت",
        nameen:"Tiflet"
    }

]

for(cityname of city){
    select.innerHTML +=`
    <option>${cityname.namear}</option>
    
    `
}
select.addEventListener('change', function(){
    // console.log(this.value)

    let cityen = ""
    for(cityname of city){
        if(cityname.namear === this.value){
            cityen = cityname.nameen
        }
    }
    gettimen(cityen)

})
function gettimen(citynamme) {
    let contentboxx = document.querySelector(".contentboxx");
    fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${citynamme}&country=Morocco`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("err fetch " + response.status);
        }
        return response.json();
      })
      .then((datx) => {
        let dasxvv = datx.data.timings;
  
        // let dataarr = Object.entries(dasxvv)
        contentboxx.innerHTML = "";
        const filteredKeys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
        for (let keyname in dasxvv) {
          if (filteredKeys.includes(keyname)) {
            contentboxx.innerHTML += `
                  <section  style="width: 15%; height: 123px;  box-shadow: 2px 2px 3px #7a37bf; border-radius: 12px;"  onclick="borderget(this)" >
                      <h1 style="margin: 0;width: 100%; background-color:  #5709ee; text-align: center;">${keyname}</h1>
                      <h2 style="text-align: center;">
                      ${dasxvv[keyname]}
                      </h2>
                  </section>
                  `;
          }
        }
      })
      .catch((err) => console.log(err.message));
  }
  
 function  borderget(element){

    let allelement = document.getElementsByClassName('border');

    for (let ff of allelement) {
        ff.classList.remove('border');
    }
    element.classList.add('border')
  }