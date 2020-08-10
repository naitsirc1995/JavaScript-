// Here I describe with a function my favorite song by the french artist Edith Piaf

function TheSong(name,genre,typeOfLovers,country,author){
    this.name = name; 
    this.gnere = genre; 
    this.typeOfLovers = typeOfLovers;
    this.country = country;
    this.author = author;
    this.good = true; 
    this.opinion = function(){
        if(this.good){
            console.log("The name of this song is "+this.name + " and it is good ! ");
        }else{
            console.log("This is a good song, don't listen to it");
        }
    }

}

// Here we initialize an obect with the name of the song, but the constructor can be used to make any kind of song 

var mySong = new TheSong(name = "La Foule", genre = "French Music",typeOfLovers = ["French People","Old people","Language Lovers","Language Learners"] , country = "France",author = "Edith Piaf"
)

mySong.typeOfLovers.push("New Yorkers also love Edith piaf and her music")

mySong.opinion()

console.log("The song that I love is "+mySong.name+" and it is also loved by "+mySong.typeOfLovers.join(","))
